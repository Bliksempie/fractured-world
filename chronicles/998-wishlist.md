# 📝 Fractured World — Master Feature Wishlist

---

## 1️⃣ Narrative & Lore Integration

- ✅ **Full novella alignment** — keep player actions within the core arc while allowing variation in flavor text and pacing.
- ✅ **Document parsing refinement**:
  - Fragments can only be analyzed in safe zones.
  - Scene triggers occur only when narrative + lore conditions are met.
  - Lore thresholds respected (safe zone + rest + mental clarity %).
- ✅ **Indexed scene/fragment map** — pre-tag novella and lore segments for deterministic placement.
- ✅ **Expanded regional lore** — 7 primary regions with historic city entries.
- ✅ **Mini-novella core (Last Light)** — Acts with traceable player outcomes and variation potential.
- ✅ **Complication integration** — ripple effects from fragment analysis impact lore and narrative.
- 📌 **SUPERCEDES OLDER** — earlier plan allowed fragment analysis anywhere; this is replaced by **safe zone–only** rule.

---

## 2️⃣ Game Mechanics

- ✅ **Choice Fork system** — condensed 1–2 forks per novella section:
  - Clear consequence mapping (stats, inventory, alignment).
  - Deterministic outcomes for identical choices.
- ✅ **Player Gauges** (percentages):
  - Fatigue
  - Morale
  - Hunger
  - Mental Clarity
  - Health
  - Daylight Remaining
- ✅ **Environmental thresholds** — risk scales after dusk; mist activity.
- ✅ **Alignment system** — track tendencies (Protector, Loner, Ruthless, Survivor) affecting Gravity and epilogue.
- ✅ **Combat resolution** — choice-driven, affecting health/fatigue/morale.
- ✅ **Inventory management** — visible after each action; durability tracked.
- ✅ **Starting Regions** — each with passive perk and trade options.
- ✅ **Echo Traces** — ambient lore encounters, max 2 spawns/day, small Gravity effect.
- ✅ **The Hum mechanic** — environmental hazard influencing gauges and events.
- ✅ **Player Actions**:
  - Rest
  - Scout
  - Salvage
  - Eat
  - Analyze
  - Craft
  - Interact
- ✅ **Companions** — temporary allies with trust/burden mechanics.
- ✅ **World Navigation** — node-based travel, unstable routes at low clarity.
- ✅ **Hazards** — collapses, spores, Hum spikes, parasitic mimics, traps, weather hazards.

---

## 3️⃣ Fragment & Chronicle System

- ✅ **Fragment discovery**:
  - Found in-world or via scripted events.
  - Analyzed only in **safe zones**.
- ✅ **Fragment impact** — may:
  - Unlock Chronicle entries.
  - Confirm/debunk myths.
  - Change world state.
- ✅ **Living Chronicle updates** — log impactful events per player.
- ✅ **Metadata-driven gating** — `fragment-meta`, `show-if-meta`, conditional unlocks.
- ✅ **Rare fragment events** — integrated into main story beats.

---

## 4️⃣ Randomization & Determinism

- ✅ **Randomized flavor** — replay variety without altering deterministic outcomes.
- ✅ **Random environmental events** — mist shifts, Hum variations, wildlife.
- ✅ **Deterministic key events** — same major choice = same major outcome.

---

## 5️⃣ Session Flow & Structure

- ✅ **Condensed sessions** — ~30–40 minutes for complete run.
- ✅ **Scene-based progression**:
  - Acts mapped to novella beats.
  - Each beat = 1–2 forks → update gauges → inventory → proceed.
- ✅ **Visible stat updates** after each choice.
- ✅ **Safe zone identification** — signals for rest, heal, fragment analysis.

---

## 6️⃣ Lore & RAG System

- ✅ **Lore fragment gating** — tied to `player_lore_state` + confidence.
- ✅ **Unlocked-only AI retrieval** — no surfacing locked lore.
- ✅ **Debug tooling** — view visible/locked fragments; see reasons.
- ✅ **Post-analysis lore reveals** — codex/journal updates.
- ✅ **Myth/fact confidence system** — progressive reveal over playthrough.
- ✅ **Multiple AI personas** — Archivist, cultist, survivor, neutral lorekeeper.
- ✅ **Dynamic scene generation** — context-specific.
- ✅ **Local/Hybrid RAG option** — GPT-4 for core, local LLM for filler.

---

## 7️⃣ AI & Performance

- ✅ **Reduced latency** — US-hosted API; streaming GPT responses.
- ✅ **Persistent cURL handles** — reduce RTT overhead.
- ✅ **Token optimization** — trim `$context` before sending.
- ✅ **Cache-busting** for dev/test.

---

## 8️⃣ Developer Tools

- ✅ **Multi-block parser** — imports every gated section separately.
- ✅ **Clean metadata storage** — keys/values structured for queries.
- ✅ **Bulk SQL generator** — initial lore state setup.
- ✅ **Lore state UI** — view/edit per player; reset/advance progression.
- ✅ **Cache control** — invalidate on edits; dev/test logging.
- ✅ **Contributor workflow** — GitHub PR with style/meta guidelines.
- ✅ **Metadata validation** — ensure correctness of all meta block types.
- ✅ **JSON export** — RAG-ready, parallel human/machine versions.

---

## 9️⃣ Core Gameplay Framework (Extended)

- ✅ **Flexible session state system** — branching progression.
- ✅ **Inventory system**:
  - Item props (name, desc, keep/discard).
  - Quantity/stacking.
  - Consumable vs. permanent.
- ✅ **Random treasure** — multi-item drops, independent chance, variable qty.
- ✅ **Skills** — Strength, Dexterity, Intelligence, Charisma, Luck.
- ✅ **Crafting** — recipes, upgrades, special stations.
- ✅ **Base building** — construct facilities for new actions.
- ✅ **Turn-based combat** — enemy stats, loot tables, gear effects.
- ✅ **Questlines** — branching; choices influence outcome.
- ✅ **Achievements** — collection, combat, exploration.
- ✅ **Dynamic events** — storms, markets, raids.
- ✅ **Trading** — NPC buy/sell; black market option.

---

## 🔟 Lore & Narrative Systems (Extended)

- ✅ **Dynamic Living Chronicles** — mutable, per-player.
- ✅ **Fragments of Wisdom** — myths/truths; analyzed in safe zones.
- ✅ **Conditional lore display** — meta tags for timing/context.
- ✅ **Gravity-based conditions** — influence mid/late-game.
- ✅ **World state tracking** — events, environmental/cultural shifts.
- ✅ **Region perks** — minor benefits; tradable early-game.
- ✅ **Environmental lore** — disaster/resource/cultural traits.
- ✅ **Epilogue fragment system** — weighted by gravity.
- ✅ **RAG-driven narrative queries** — lore-fed scene generation.
- ✅ **Custom event triggers** — `do-*`, `is-*` controls.
- ✅ **Markdown-first lore** — human + machine versions.

---

### ⚠️ Notes on Conflicts / Superseded Items
- **Fragment Analysis Anywhere** — *superseded* by **Safe Zone–only** rule.
- **Unrestricted Lore Access** — *superseded* by **gated unlock system**.
- **Combat Mechanics Detail** — earlier versions implied more RPG-like complexity; refined to focus on **choice-driven core** for narrative sessions.
- **Session Length** — older notes allowed variable session pacing; now targeting **30–40 min condensed runs** for core story.

---



## Pre-summary list

:

📝 Fractured World – Feature Wishlist
1️⃣ Narrative & Lore Integration
✅ Full novella alignment — keep player actions within the core arc of the novella while allowing variation in flavor text and pacing.

✅ Document parsing refinement — improve AI understanding of chronicles.md and novella.md to ensure:

Fragments can only be analyzed in safe zones.

Scene triggers occur only when narrative + lore conditions are met.

Lore thresholds (safe zone + rest + mental clarity %) are respected.

✅ Indexed scene/fragment map — pre-tag all novella and lore segments for quick retrieval and deterministic placement.

2️⃣ Game Mechanics
✅ Choice Fork system — condensed 1–2 meaningful forks per novella section, with:

Clear consequence mapping (stats, inventory, alignment).

Deterministic outcomes for identical decisions.

✅ Gauges & Stats — tracked as percentages:

Fatigue

Morale

Hunger

Mental Clarity

Health

Daylight Remaining

✅ Environmental thresholds — e.g., risk increase after dusk, mist activity scaling.

✅ Alignment system — track player tendencies (Protector, Loner, Ruthless, Survivor) that influence late-game Gravity outcomes.

✅ Combat resolution — simple, choice-driven fights that affect health, fatigue, and morale.

✅ Inventory management — visible after each action; dynamic durability for weapons/tools.

3️⃣ Fragment & Chronicle System
✅ Fragment discovery rules:

Found in-world via exploration or scripted encounters.

Cannot be analyzed until safe zone conditions are met.

✅ Fragment impact — on analysis, may:

Unlock Chronicle entries.

Confirm or debunk myths.

Modify environmental/world state.

✅ Living Chronicle updates — log impactful events in Kobus’s journey, maintaining a unique player-specific record.

4️⃣ Randomization & Determinism
✅ Randomized flavor text for replayability, without changing deterministic core outcomes.

✅ Random environmental events — e.g., mist shifts, distant Hum, wildlife movement — to keep sessions feeling alive.

✅ Deterministic key events — two players making identical major choices always reach the same essential result.

5️⃣ Session Flow & Structure
✅ Condensed session play — 30–40 minute complete runs.

✅ Scene-based progression:

Act broken into key novella beats.

Each beat = 1–2 forks → update gauges → inventory check → proceed.

✅ Visible stat updates after each decision for transparency.

✅ Safe zone identification mechanic — signals when player can rest, heal, and analyze fragments.

6️⃣ Future Refinements
📌 Pre-flight parsing of source docs before each run to ensure scene logic matches lore requirements.

📌 Configurable thresholds for rest, safe zones, and fragment analysis.

📌 Chronicle export — ability to save the player’s Living Chronicle for later review or as a replay log.

📌 Replay variations — optional alternate routes through novella beats for different starting conditions.


=====

📜 Lore & Narrative Systems
Dynamic Living Chronicles

Core, mutable game history unique to each player.

Updates based on choices, fragments, and discoveries.

Can debunk myths or confirm truths dynamically.

Fragments of Wisdom

Rare in-game artifacts that can be myths, truths, or nonsense.

Only update chronicles when analyzed in safe zones.

May contain unlock conditions tied to inventory, events, or steps reached.

Have fragment-meta blocks with detailed metadata for logic control.

Conditional Lore Display

Custom metadata tags (show-if, is, do) to control when and how lore appears.

Gravity-based conditional outcomes for endgame and midgame events.

Event-driven world state changes recorded in lore.

Gravity System

Tracks moral weight of decisions.

Influences endgame tone and epilogue fragments.

NPC “inner voice” hints push player toward hope or despair.

World State Tracking

Global, regional, and personal story states.

Event logging (earthquakes, explosions, etc.) with possible lore tie-ins.

Region-specific environmental and cultural influences.

🌍 World-Building & Starting Conditions
Region-Based Perks

Minor gameplay benefits based on starting location (e.g., Iceland geothermal expertise).

Can keep or trade starting perk early in the game for other benefits.

NPC trade offers at first merchant, forsaken cache, or salvage vault.

Environmental & Resource-Based Lore

Disaster types, mineral wealth, soil fertility per region.

Cultural survivor traits tied to resources and historical conditions.

🎮 Gameplay Systems
Player Gauges

Health, morale, hunger, mental clarity, daytime left.

Rest, food, and medicine interact with multiple gauges.

Negative outcomes possible but never game-breaking.

Inventory System

Gear, weapons, ammunition, materials, parts.

Items salvageable for parts/materials.

Trade system with NPCs for key upgrades or resources.

Exploration & Risk

Day/night cycle with higher risks at night.

Spores as localized hazards requiring masks.

Minor setbacks from risky actions to maintain tension.

🧩 Gameplay Integration with Lore
Epilogue Fragment System

Endgame text built from key high-impact decisions (player-choice-x markers).

Weighted by gravity score.

Conditional display of decision-based text.

RAG-Driven Narrative Queries

Retrieval-Augmented Generation to dynamically generate scenes and descriptions from lore.

Context-aware NPC dialogue and environmental text.

Custom Event Triggers

Structured do-* and is-* metadata to control unlocks, locks, and checks.

Step-based or event-completion triggers.

📂 Tools & Collaboration
Markdown as Primary Lore Format

Human-editable with embedded structured metadata.

Easy to collaborate on via GitHub pull requests.

Metadata Validation

Automated validator for all meta block types (fragment-meta, do-meta, is-meta, show-if-meta).

Ensures correct keys, values, and dependencies.

Lore Contribution Workflow

GitHub PR process for community submissions.

Contributor guidelines for lore style, metadata, and file structure.

RAG-Ready Lore Storage

Export metadata-enhanced Markdown to JSON for search and AI queries.

Maintain parallel versions for human editing and machine retrieval.

=====

Fractured World — Feature Wishlist
1. Core Gameplay Framework
Flexible, session-based state system for branching story progression.

Inventory system with:

Item properties (name, description, keep/discard after use).

Quantity tracking and stacking.

Dynamic usage rules (consumable vs. permanent items).

Random treasure system:

Multiple possible items per container.

Independent drop chance for each item.

Variable quantity ranges.

2. Player Progression
Skills development:

Strength, Dexterity, Intelligence, Charisma, Luck.

Leveling by repeated use or training.

Crafting & Forging:

Recipes combining collected resources.

Equipment upgrades.

Specialized crafting stations (e.g., forge, alchemy lab).

3. World Interaction
Base building:

Constructable facilities unlocking new actions (forge, farm, workshop).

Resource requirements for construction.

Combat system:

Turn-based battles with varied attack types.

Enemy stats and loot tables.

Weapon/armor effects on combat.

4. Narrative & Quests
Branching questlines with player choices influencing outcomes.

Achievements:

Milestones for collection, combat, exploration.

Dynamic world events:

Random encounters (storms, market shifts, raids).

Impact player inventory, economy, or travel.

5. Economy & Trading
Trading system:

Buy/sell items with NPC merchants.

Price fluctuations based on scarcity/demand.

Black market:

Risk/reward for rare or forbidden goods.

6. Multiplayer / Social Features (Future / Optional)
Player-to-player trading.

PvP challenges.

Leaderboards for survival stats, wealth, or achievements.

=====

📚 Lore & RAG System
Lore Fragment Gating

Fully working show-if gating system tied to player_lore_state with state + confidence.

Only surface lore fragments the player has unlocked.

Debug view to display all visible fragments for a given player.

Option to display “locked” fragments with a reason (for testing or immersion).

Semantic Search & AI Integration

AI answers grounded only in unlocked lore fragments.

Prioritize context fragments containing relevant keywords.

Prompt tuned to interpret meaning and intent, not just exact wording.

Ability for AI to explain why no relevant lore was found.

Cache-busting logic for testing (avoid stale cached answers).

Context Debugging

Ability to log and review context fragments used for any AI answer.

Debug output showing why a fragment was included/excluded.

Lore Unlock Progression

Process unlocks field from lore fragments to update player_lore_state.

Option to display newly unlocked lore to the player (journal entries, codex updates).

🧠 AI Behavior & Prompts
Multiple Personas & Tones

Archivist, cultist, survivor, and neutral lorekeeper roles.

Dynamic tones: fearful, sarcastic, cryptic, hopeful.

Expandable persona/tone library for different in-game NPC personalities.

Dynamic Scene Generation

When requested, AI generates immersive narrative scenes using relevant lore.

Potential for “day in the life” or “event recap” scenes tailored to the player’s state.

Smart Question Handling

Built-in semantic interpretation for quoted-text queries.

Option for AI to answer with the closest relevant fragment even if exact wording isn’t present.

⚡ Performance & Hosting
Reduce AI Latency

Deploy backend API to a US-hosted server to reduce RTT latency to OpenAI.

Reuse persistent cURL handles for multiple GPT requests in a single session.

Trim $context before sending to AI (token optimization).

Optional streaming responses from GPT for faster perceived output.

Local or Hybrid RAG

Experiment with local embeddings (e.g., sentence-transformers).

Consider local LLM fallback (Ollama, LocalAI, LM Studio) for offline play or less critical queries.

Hybrid model: GPT-4 for important answers, local LLM for filler dialogue.

🛠 Developer Tools
Import & Parsing Improvements

Full multi-block show-if parser to import every gated section as a separate chunk.

Ensure metadata keys (discovery, state, confidence, etc.) are stored cleanly.

Bulk SQL generator for setting initial player_lore_state from new lore imports.

Lore State Management

Simple UI to view/edit a player’s lore state (for testing or GM control).

Reset or advance lore progression per player.

Highlight differences between two players’ lore unlocks.

Cache & Testing

Cache invalidation on lore edits or state changes.

?nocache=1 flag for API requests during development.

Separate dev/test mode that logs all decisions made in AI filtering.

🎮 Gameplay Integration Ideas
In-Game Codex

Player-accessible journal that automatically updates with unlocked lore.

Search/filter by category or tags.

Highlight “new” entries since last view.

Narrative Unlock Triggers

Unlock lore based on quest completion, location visits, NPC interactions.

Auto-inject unlocked lore into conversations or scene descriptions.

Immersion Features

In-character NPC commentary when lore is unlocked.

Potential for “lore rumors” system — partial truths before confirmed lore is unlocked.

=====

📝 Fractured World Feature Wishlist
🎮 Core Gameplay
AI-driven RAG lore system with show-if and fragment-meta conditions.

Hard-coded narrative anchor locations with flexible AI-driven encounters.

Confidence-based myth/fact system for lore progression.

Branching decision-making with persistent Chronicle updates.

🎨 Visual Presentation
Full-width, full-height background images for narrative locations.

Optional animated fog/mist overlay for atmosphere.

Subtle lighting/flicker effects on scene elements (e.g., “Beware Spores” sign).

Region-specific environmental variants (foggy, burned, overgrown, flooded).

Semi-fixed location backdrops that can change state via overlays.

Cohesive themeable UI using your CMS theme system.

🎙️ Audio & Voice
ElevenLabs streaming voice integration (Node.js bridge for real-time speech).

Optional pre-generated voice lines for proof-of-concept.

Atmospheric background audio loops (wind, Hum, rain, distant cries).

🤖 AI & Dynamic Content
AI-generated micro-encounters within fixed locations.

Adaptive AI dialogue based on player history and confidence levels.

Potential procedural visual generation for less critical locations.

🧩 Systems & Mechanics
Location-based confidence bump triggers (NPC dialogue, environmental cues).

Event-based Chronicle updates when key discoveries occur.

Inventory for lore-related items (audio logs, notes, posters).

Post-analysis lore reveals for “safe location” discoveries.

Optional multi-level myth exposure (multiple low-confidence “undiscovered” variants).

🚀 Future/Stretch Ideas
Multiplayer/shared lore world state.

Procedural “what if” mini-scenarios using AI.

In-game terminal or comms for asynchronous NPC contact.

Investor-friendly vertical slice proof-of-concept with 1–2 polished story paths.

=====

📜 Lore & Storytelling
Maintain the grounded, eerie tone of Fractured World — avoid overly “sci-fi clean tech” in favor of glitchy, symbolic, and suggestive tech behavior.

Fully expanded regional lore for all 7 regions:

The Americas

Eastern Europe and Surrounds

Western Europe and Surrounds

Asia and Surrounds

Australasia and Surrounds

Northern Africa and Surrounds

Southern Africa and Surrounds

Historic city entries for each region.

Personalisation tokens table for novella integration.

Mini-novella core (Last Light) with Acts that have traceable player outcomes and player variation potential.

Chronicle events triggered in narrative to reflect fragment analysis or rare events.

Integration of complications and ripple effects from fragments into both lore and narrative.

⚙️ Game Mechanics
Gravity – hidden moral weight system affecting story tone and epilogue.

Fragment Analysis – only in Safe Zones, can alter Chronicle, unlock lore, shift Gravity.

Safe Zones – multiple types with different capabilities:

Sanctum

Refuge

Echo Shelter

Dead Zones (Corrupted)

Starting Regions – each with starting bonus, passive trait, and limited trade options.

Environmental Gauges – Health, Hunger, Fatigue, Mental Clarity, Morale.

Inventory System – Six categories:

Weapons

Ammunition

Gear

Loot

Parts

Materials

Echo Traces – ambient lore encounters, max 2 random spawns per 24 hours, influence Gravity slightly.

The Hum – environmental and psychological hazard affecting gauges, events, and dialogue.

Player Actions – fully written mechanics for:

Rest

Scout

Salvage

Eat

Analyze

Craft

Interact

Companion Mechanics – temporary, narrative-impactful allies with trust levels, burdens, and departures.

World Navigation – node-based travel, unstable routes, false paths at low Clarity.

Hazards – environmental dangers:

Collapse Zones

Fungal Spores

Psychic Feedback (Hum Spike)

Parasitic Mimics

Memory Failsafe Traps

Weather Hazards – environmental conditions with gameplay effects:

Fogwall Drift

Electrical Storm

Black Cold

Wind Shear

🌍 World Content & Lore Hooks
Large, consistent Fragments of Wisdom set for each region.

Rare, high-impact fragments tied to Living Chronicle and regional mysteries.

Expanded Blightspore, Gravebloomer, and Uninfected fragment archives with meta and narrative impact.

Maintain consistent metadata format for all fragments (fragment-meta blocks).

Tagging system for conditional display (<!-- show-if-meta -->).

Integration of rare fragment events into story progression.

✍️ Writing & Narrative Goals
Keep Fractured World’s aesthetic: grounded, haunting, morally ambiguous.

Avoid “new age” mechanics like sleep rituals unless deeply recontextualized.

Maintain cold, clinical section titles for Act subheadings (e.g., Fragment 782b-d4).

Expand the novella with Acts 2 and 3 while tracking decision paths and Chronicle changes.

Develop narrative “trigger points” for Chronicle entries and fragment effects.

Playtest novella events in a light interactive mode to ensure story pacing works for player choice branching.
