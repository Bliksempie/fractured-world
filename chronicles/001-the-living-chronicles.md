<!-- show-if
    key: living-chronicles-intro
    observed-at: player-location-start
    discovered-at: player-location-start
    trigger: discovery
    state: discovered
    confidence: 100
    unlocks:
        - fractured-world-overview
    tags:
        - narrative:living-chronicles
        - narrative:chronicle-system
        - narrative:fragment-narration
        - narrative:meta-lore
        - narrative:player-journal
        - narrative:lore-personalization
        - narrative:subjective-truth
        - theme:memory
        - theme:truth
        - theme:subjectivity
        - theme:perspective
        - theme:uncertainty
        - theme:discovery
        - theme:cautionary-lore
        - theme:interpretation
        - quote-and-attribution:archivist-quote
        - quote-and-attribution:ironroot-vault
        - quote-and-attribution:in-universe-quote
        - quote-and-attribution:lore-fragment
        - gameplay-and-mechanic:player-variation
        - gameplay-and-mechanic:chronicle-divergence
        - gameplay-and-mechanic:lore-reliability
        - gameplay-and-mechanic:discovery-dependent
        - gameplay-and-mechanic:player-driven-lore
        - gameplay-and-mechanic:chronicle
    source-id: lore-living-chronicles-intro-100
-->
# The Living Chronicles

> This is not a book. It's a wound stitched shut with ink and memory.
> _~ Unknown Archivist, Ironroot Vault_

The Living Chronicles are not static. They shift. They breathe. They remember. What one survivor records as truth, another may never encounter. Some fragments are echoes. Some are lies. Others are whispers of a deeper truth, waiting to be unearthed. The world you walk through is yours, and so too are the Chronicles it leaves behind. No two survivors carry the same pages. No two fates align the same way.

**Be warned:** A truth confirmed by another does not make it so for you. This record reflects your discoveries, your scars, and your unraveling of the fractured world. Nothing more. **Read carefully. Trust cautiously. Chronicle relentlessly.**

If you are reading this... you are still uninfected. For now.

> The world doesn't lie to you. It just tells you what it knows — and hopes you survive long enough to learn better.
> _~ Fragment from an archivist at Ironroot Vault_
<!-- /show-if -->

<!-- show-if
    key: fractured-world-overview
    observed-at: player-location-start
    discovered-at: player-location-start
    trigger: discovery
    state: discovered
    confidence: 100
    unlocked-by: []
    unlocks:
        - infected-blightspores
    tags:
        - narrative:cycle-78
        - narrative:first-bloom
        - narrative:post-collapse
        - narrative:early-infection
        - narrative:chronicle-intro
        - narrative:journal-fragment
        - narrative:in-universe-quote
        - narrative:fragment-narration
        - narrative:player-context
        - environment:necromyce
        - environment:infection
        - environment:fungal
        - environment:infection-origin
        - environment:pathogen-evolution
        - environment:collapse
        - environment:infrastructure-failure
        - environment:environmental-threats
        - environment:contaminated-water
        - environment:contaminated-food
        - environment:animal-carriers
        - theme:first-responders
        - theme:governments-fall
        - theme:slow-apocalypse
        - theme:societal-collapse
        - theme:psychological-dread
        - gameplay-and-mechanic:chronicle
    source-id: lore-fractured-world-overview-100
-->
## The Fractured World

You are living in Cycle 78 — nearly eight decades after the incident called **The First Bloom**, remembered by a rush of sick people to local hospitals. The first responders did not know what hit them. They had lost the battle even before it really started.

> The world ended not with fire or war, but with a whisper carried through the crust of the earth.
> _~ Entry from a torn page of an old journal, long discarded by its creator._

The **Necromyce infection** rose from the soil like a curse: silent, fungal, inescapable. In weeks, it spread. In months, the world crumbled.

The land turned treacherous. Water, crops, and animals all became carriers. Infrastructure failed. Communication collapsed. Governments were devoured by the rot. Civilization did not fall with a scream, but with a slow, suffocating silence.

The original Necromyce strain eventually burned itself out. But in its wake, two divergent horrors emerged: adaptations that could survive the unforgiving world it had created.
<!-- /show-if -->

<!-- show-if
    key: infected-blightspores
    observed-at: fragment-blightspores-informational-poster
    discovered-at: fragment-blightspores-informational-poster
    trigger: discovery
    state: undiscovered
    confidence: 20
    unlocked-by: []
    unlocks: []
    tags:
        - strain:blightspores
        - trait:feral
        - trait:mindless
        - trait:short-lived
        - behavior:aggressive
        - gameplay-and-mechanic:hum
        - gameplay-and-mechanic:regional-dialects
        - gameplay-and-mechanic:chronicle
        - effect:madness
        - effect:hostile-to-non-dialect
        - theme:infection
        - theme:loss-of-control
    source-id: lore-infected-blightspores-20
-->
### The Blightspores

The first strain became known as the **Blightspores**. They are believed to be feral and mindless.
<!-- /show-if -->

<!-- show-if
    key: infected-blightspores
    observed-at: fragment-blightspores-informational-poster
    discovered-at: fragment-blightspores-informational-poster
    trigger: discovery
    state: discovered
    confidence: 100
    unlocked-by: []
    unlocks:
        - infected-gravebloomers
    tags:
        - strain:blightspores
        - trait:feral
        - trait:mindless
        - trait:short-lived
        - behavior:aggressive
        - gameplay-and-mechanic:hum
        - gameplay-and-mechanic:regional-dialects
        - gameplay-and-mechanic:chronicle
        - effect:madness
        - effect:hostile-to-non-dialect
        - theme:infection
        - theme:loss-of-control
    source-id: lore-infected-blightspores-100
-->
### The Blightspores

The first strain became known as the **Blightspores**. They are feral and mindless, usually short-lived. Victims of this strain descended into madness within hours of infection. They didn't live long enough to age or procreate. They fought. They killed. They died.

Yet, they weren't without structure. A low and droning sound, called **the Hum**, bound them into violent colonies. Each region developed its own frequency. Any being that failed to echo their dialect, be it human, animal, or even other Blightspore variants, was torn apart.
<!-- /show-if -->

<!-- show-if
    key: infected-gravebloomers
    observed-at: fragment-gravebloomers-lab-recorder-message
    discovered-at: safe-location
    trigger: discovery
    state: discovered
    confidence: 100
    unlocked-by: []
    unlocks:
        - uninfected-overview
    tags:
        - strain:gravebloomers
        - trait:cognitive
        - trait:strategic
        - trait:sentient
        - trait:hateful
        - behavior:alliance-forming
        - behavior:hostile
        - behavior:generational-memory
        - theme:remembrance
        - theme:arrogance
        - theme:post-human-evolution
        - gameplay-and-mechanic:chronicle
        - culture:scripture
        - culture:doctrine
        - culture:gravebloomer-gospel
    source-id: lore-infected-gravebloomers-100
-->
### The Gravebloomers

The second strain, the Gravebloomers, did not lose their minds; they sharpened them. They could think, plan, and forge alliances — both with other Gravebloomer clans and, when it suited their aims, even with the uninfected. They could also hate... and there are no known survivors of a Gravebloomer's hatred.

Remembrance gave way to arrogance. The uninfected were no longer seen as survivors, but as stunted echoes — unfinished, aging relics too afraid to embrace the bloom. Gravebloomers aged, procreated, and with each generation, more of what it meant to be human slipped away.

What remained hardened into doctrine. Stories became scripture, victories became legend. From colony to colony, their gospel spread — preached in bone and whispered through spores. They did not mourn what was lost. They preached what had replaced it.
<!-- /show-if -->

<!-- show-if
    key: uninfected-overview
    discovered-at: safe-location
    trigger: discovery
    state: discovered
    confidence: 100
    unlocked-by: []
    unlocks:
        - player-paths
    tags:
        - group:uninfected
        - theme:survival
        - theme:isolation
        - theme:scarcity
        - theme:trust-collapse
        - theme:ashes
        - theme:bleak
        - theme:resilient
        - narrative:post-collapse
        - narrative:player-perspective
        - narrative:choice-driven
        - gameplay-and-mechanic:chronicle
        - gameplay-and-mechanic:player-agency
    source-id: lore-uninfected-overview-100
-->
### The Uninfected

The uninfected endure. They are scattered across the wastes, living like ghosts in the ruins. Food is rare. Clean water even rarer, and trust is nearly extinct.

You are one of these uninfected survivors. Every decision and every step you take shapes not only your fate but also the future of those who walk beside you.

There **is no cure**. There **are no saviors**. There is only the **fractured world**, and what you choose to build from the ashes.

**This is your chronicle.** The ink is still wet. What you write next may never be written again.
<!-- /show-if -->
