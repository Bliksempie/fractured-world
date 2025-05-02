<!-- THIS DOCUMENT SERVES AS EXAMPLES PRIMARILY - GAME STRUCTURES ARE NOT FINALIZED -->

# Fragments of Wisdon

Fragments of Wisdom are rare, often cryptic relics scattered across both the **Last Light** campaign and the endless expanse of **Blinding Light**. They are echoes of a world undone—etched into bone, whispered through fungus, carved into rusted steel. No two players will gather the same fragments, and no two **Living Chronicles** will ever tell the same story.

While the **Living Chronicles** can be accessed at any time—halting direct threats to your companions—the world itself does not stop. Winds shift. Shadows grow. The bloom endures. And fragments? They do not shape the Chronicles until they are studied in safety.

But tread carefully. Not all fragments speak truth. Some are fevered mutterings of the broken. Others... deliberate lies, seeded by things that remember being human.

## The Testament of the Tainted

In the shattered world left behind by Necromyce, memory itself became a casualty. Stories twisted. Facts decayed. _Truths frayed into myth_.

Yet some remnants—fragments of forgotten knowledge, sacred rituals, bitter confessions—were salvaged by those who refused to let the past be wholly devoured.

These relics of wisdom are gathered into the Testament of the Tainted—a secret vault of humanity's broken memory, stitched together from blood, sorrow, and stubborn hope.

Each Fragment whispers a piece of what was... Or warns of what is yet to come. The Testament remembers. **Even when the world forgets**.

## Fragment Timing

- **Earlygame**: Fragments are mostly unconfirmed myths and scattered stories, but some may end up being true.
- **Midgame**: Fragments start revealing critical gameplay mechanics (like how to weaken Titans or Gravebloomer colony behaviors).
- **Lategame**: Fragments reveal deep world secrets—some of them rewrite what the player thought was true! Glimpses into the reason the world as the player knows it are revealed.

## Fragment List

<!-- fragment-meta
    affects-living-chronicles: trues // This is not a valid boolean value.
    converts-myth-to-confirmed: true
    fragment-id: fragment-half-map
    myth-id: myth-half-map
    fragment-timing: lategame
    fragment-lore-type: item
    is-unlocked-by: event-ended:fully-looted-townhall
    unlocks-chronicle: chronicle-half-map
    unlock-behavior: on-analysis
-->
### The Half-Map

**Lategame**: The parchment is brittle, ink faded to rust. Half the symbols seem older than memory itself, and where the words fail, strange glyphs spider across the page like fractures in time. At the bottom, one faint emblem remains visible: a cracked sun, stitched in crimson thread.

"...the Last Light...
...beneath the Iron Maw...
...guarded by those who remember the first hunger...
...only [smudged] may pass... seek the Red [illegible]"
<!-- /fragment-meta -->

<!-- fragment-meta
    affects-living-chronicles: false
    converts-myth-to-confirmed: false
    fragment-id: fragment-echo-of-the-shambles
    myth-id: null
    fragment-timing: earlygames // This is not valid as per definitions for fragment-timing.
    fragment-lore-type: item
    is-unlocked-by: null
    unlocks-chronicle: null
    unlock-behavior: on-acquisition
-->
### Echo of the Shambles

**Earlygame**:

> "We thought we were safe, outside the zone. But it wasn't the spores that killed Juno. It was the air she brought with her. Some creatures don't travel with their nests—they carry the rot inside."
<!-- /fragment-meta -->

<!-- fragment-meta
    affects-living-chronicles: false
    converts-myth-to-confirmed: false
    fragment-id: null // This is required so should fail.
    myth-id: null
    fragment-timing: midgame
    fragment-lore-type: item
    is-unlocked-by: null
    unlocks-chronicle: null
    unlock-behavior: on-acquisition
-->
### Bloomwars

**Midgame**:

> "the Hum binds them, but pride breaks them."

_- Old survivor wisdom_

These old wisdoms claim that colonies remember the first fights between brothers of the Bloom. Now, when the Hum falters, the claws come out.
<!-- /fragment-meta -->

<!-- fragment-meta
    affects-living-chronicles: false
    converts-myth-to-confirmed: true // Because this is true, myth-id becomes required, not "null", thus fails.
    fragment-id: fragment-humwars
    myth-id: null
    fragment-timing: midgame
    fragment-lore-type: item
    is-unlocked-by: null
    unlocks-chronicle: null
    unlock-behavior: on-acquisition
-->
### Humwars

**Midgame**:

> "When two Hums collide in hatred, sometimes... something worse wakes up."
<!-- /fragment-meta -->
