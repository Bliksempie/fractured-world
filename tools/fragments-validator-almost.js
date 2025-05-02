
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const directory = args[0];
const metaType = args.includes('--meta-type=fragment-meta') ? 'fragment-meta' :
                 args.includes('--meta-type=do-meta') ? 'do-meta' :
                 args.includes('--meta-type=is-meta') ? 'is-meta' :
                 args.includes('--meta-type=show-if-meta') ? 'show-if-meta' : null;

if (!directory || !metaType) {
    console.error('Usage: node fragments-validator.js <directory> --meta-type=<meta-type>');
    process.exit(1);
}

const metaDefinitionPath = path.join(__dirname, `${metaType.replace(/-/g, '_')}.md`);
if (!fs.existsSync(metaDefinitionPath)) {
    console.error(`❌ Metadata definition file not found: ${metaDefinitionPath}`);
    process.exit(1);
}

// Parse the meta definition file to get required keys and allowed values
function parseMetaDefinitions(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const keyDefs = {};

    for (let line of lines) {
        line = line.trim();
        const match = line.match(/^([a-zA-Z0-9_-]+):\s+(.*)\s+\(REQUIRED\)$/);
        if (match) {
            const [, key, values] = match;
            const allowedValues = values.split('|').map(v => v.trim().replace(/"/g, ''));
            keyDefs[key] = allowedValues;
        }
    }
    return keyDefs;
}

const metaKeys = parseMetaDefinitions(metaDefinitionPath);

// Scan files for meta blocks
function extractMetaBlocks(content, metaType) {
    const regex = new RegExp(`<!--\s*${metaType}\s*([\s\S]*?)-->`, 'g');
    const matches = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
        const block = match[1].trim();
        const lines = block.split('\n').map(line => line.trim()).filter(Boolean);
        const obj = {};
        for (let line of lines) {
            const [key, ...rest] = line.split(':');
            obj[key.trim()] = rest.join(':').trim();
        }
        matches.push(obj);
    }
    return matches;
}

let allErrors = [];

// Validate each meta block
function normalizeValue(value) {
    if (!value) return value;
    return value.trim().toLowerCase();
}

// Enhanced validation for each meta block
function validateBlock(block, file, index) {
    const errors = [];
    for (const [key, allowedValues] of Object.entries(metaKeys)) {
        const rawValue = block[key];
        const normalizedValue = normalizeValue(rawValue);

        if (!(key in block)) {
            errors.push(`In file: ${file}, block ${index + 1}: Missing required key: ${key}`);
        } else if (!allowedValues.map(normalizeValue).includes(normalizedValue)) {
            errors.push(`In file: ${file}, block ${index + 1}: Invalid value for "\${key}": "\${rawValue}" (Allowed: \${allowedValues.join(', ')})`);
        }
    }

    // Custom conditional logic
    if ('converts-myth-to-confirmed' in block && block['converts-myth-to-confirmed'] === 'true') {
        if (block['myth-id'] === 'null') {
            errors.push(`In file: \${file}, block \${index + 1}: myth-id must not be "null" when converts-myth-to-confirmed is true`);
        }
    }

    if (!block['fragment-id'] || block['fragment-id'] === 'null') {
        errors.push(`In file: \${file}, block \${index + 1}: fragment-id must be a valid non-null identifier`);
    }

    for (const key of Object.keys(block)) {
        if (!(key in metaKeys)) {
            errors.push(`In file: \${file}, block \${index + 1}: Unknown key: \${key}`);
        }
    }

    return errors;
}

if (allErrors.length > 0) {
    console.log('❌ Validation errors found:');
    allErrors.forEach(err => console.log(err));
    process.exit(1);
} else {
    console.log('✅ All fragment meta blocks validated successfully.');
}
