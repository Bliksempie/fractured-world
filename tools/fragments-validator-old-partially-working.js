// fragments-validator.js
// Validates metadata blocks in fragment markdown files

const fs = require('fs');
const path = require('path');

const VALID_KEYS = [
    'affects-living-chronicles',
    'converts-myth-to-confirmed',
    'fragment-id',
    'myth-id',
    'fragment-timing',
    'fragment-lore-type',
    'is-unlocked-by',
    'unlocks-chronicle',
    'unlock-behavior'
];

const REQUIRED_KEYS = [
    'affects-living-chronicles',
    'converts-myth-to-confirmed',
    'fragment-id',
    'myth-id',
    'fragment-timing',
    'fragment-lore-type',
    'is-unlocked-by',
    'unlocks-chronicle',
    'unlock-behavior'
];

const FRAGMENT_TAG = /<!-- fragment-meta([\s\S]*?)-->/gm;

function parseMetaBlock(text) {
    const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
    const meta = {};

    lines.forEach(line => {
        const match = line.match(/^([a-zA-Z0-9\-]+):\s(.+)$/);
        if (match) {
            const [, key, value] = match;
            meta[key.trim()] = value.trim();
        }
    });

    return meta;
}

function validateMeta(meta, file) {
    const errors = [];
    const fileInfo = `In file: ${file}`;

    // Check for required keys
    REQUIRED_KEYS.forEach(key => {
        if (!(key in meta)) {
            errors.push(`${fileInfo} - Missing required key: ${key}`);
        }
    });

    // Check for unknown keys
    Object.keys(meta).forEach(key => {
        if (!VALID_KEYS.includes(key)) {
            errors.push(`${fileInfo} - Unknown key: ${key}`);
        }
    });

    return errors;
}

function scanFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.matchAll(FRAGMENT_TAG);

    const allErrors = [];
    for (const match of matches) {
        const metaBlock = match[1];
        const parsed = parseMetaBlock(metaBlock);
        const errors = validateMeta(parsed, filePath);
        allErrors.push(...errors);
    }

    return allErrors;
}

function walkDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const mdFiles = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            mdFiles.push(...walkDir(fullPath));
        } else if (entry.name.endsWith('.md')) {
            mdFiles.push(fullPath);
        }
    }

    return mdFiles;
}

function main() {
    const targetDir = process.argv[2] || '.';
    const files = walkDir(targetDir);

    const allErrors = files.flatMap(scanFile);

    if (allErrors.length === 0) {
        console.log('✅ All fragment meta blocks validated successfully.');
    } else {
        console.error('❌ Validation errors found:');
        allErrors.forEach(err => console.error(err));
        process.exit(1);
    }
}

main();