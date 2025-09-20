<!-- show-if
    audience:
        type:
            - player
            - lore-explorer
        locale:
            - default
    filters:
        - spoiler:[]
        - violence:[]
        - language:[]
        - sex:[]
        - prejudice:[]
    unlocked-by:[]
    unlocks:[]
    context:
        all:
            - at-location:player-location-start
        any:[]
        none:[]
    tags:
        - type:narrative
        - canon:core
    confidence:100
    keywords:
        - chronicles
        - game-manual
        - introduction
    source-id:lore-living-chronicles-intro-100
    prompt:[]
-->
# The Living Chronicles

> This is not a book. It's a wound stitched shut with ink and memory.
> _~ Unknown Archivist, Ironroot Vault_

The Living Chronicles are not static. They shift. They breathe. They remember. What one survivor records as truth, another may never encounter. Some fragments are echoes. Some are lies. Others are whispers of a deeper truth, waiting to be unearthed. The world you walk through is yours, and so too are the Chronicles it leaves behind. No two survivors carry the same pages. No two fates align the same way.

**Be warned:** A truth confirmed by another does not make it so for you. This record reflects your discoveries, your scars, and your unraveling of the fractured world. Nothing more. **Read carefully. Trust cautiously. Chronicle relentlessly.**

If you are reading this... you are still uninfected. For now.

<!-- only:audience:lore-explorer -->
> The world doesn't lie to you. It just tells you what it knows — and hopes you survive long enough to learn better.
> _~ Fragment from an archivist at Ironroot Vault_
<!-- /only -->
<!-- /show-if -->

<!-- show-if
    audience:
        type:
            - player
            - lore-explorer
        locale:
            - default
    filters:
        - spoiler:[]
        - violence:[]
        - language:[]
        - sex:[]
        - prejudice:[]
    unlocked-by:[]
    unlocks:[]
    context:
        all:
            - at-location:player-location-start
            - has-discussed:spoke-with-first-companion
        any:[]
        none:[]
    tags:
        - type:narrative
        - canon:core
    confidence:100
    keywords:
        - necromyce
        - infection
        - fungal
        - infection-origin
        - collapse
        - infrastructure-failure
        - contamination
        - animal-carriers
        - cycle-78
        - first-bloom
        - apocalypse
    source-id:lore-fractured-world-100
    prompt:[]
-->
## The Fractured World

You are living in Cycle 78 — nearly eight decades after the incident called **The First Bloom**, remembered by a rush of sick people to local hospitals. The first responders did not know what hit them. They had lost the battle even before it really started.

> The world ended not with fire or war, but with a whisper carried through the crust of the earth.
> _~ Entry from a torn page of an old journal, long discarded by its creator._

The **Necromyce infection** rose from the soil like a curse: silent, fungal, inescapable. In weeks, it spread. In months, the world crumbled.

<!-- only:audience:lore-explorer -->
The land turned treacherous. Water, crops, and animals all became carriers. Infrastructure failed. Communication collapsed. Governments were devoured by the rot. Civilization did not fall with a scream, but with a slow, suffocating silence.

The original Necromyce strain eventually burned itself out. But in its wake, two divergent horrors emerged: adaptations that could survive the unforgiving world it had created.
<!-- /only -->
<!-- /show-if -->

<!-- show-if
    audience:
        type:
            - player
            - lore-explorer
        locale:
            - default
    filters:
        - spoiler:[]
        - violence:[]
        - language:[]
        - sex:[]
        - prejudice:[]
    unlocked-by:[]
    unlocks:[]
    context:
        all:
            - has-item:fragment-blightspores-informational-poster-outside-home
        any:
            - has-item:lamp-post-outside-starting-location
            - has-item:lamp-post-outside-building-after-first-encounter
        none:[]
    tags:
        - type:narrative
        - canon:core
    confidence:20
    keywords:
        - blightspores
        - feral
        - mindless
        - short-lived
        - aggressive
        - infection
        - loss-of-control
    source-id:lore-infected-blightspores-20
    prompt:You see a poster flapping in the wind against a fallen-over lamp post. You tell {{child-name}} to stay back while you go to retrieve it.
-->
### The Blightspores

The first strain became known as the **Blightspores**. They are believed to be feral and mindless.
<!-- /show-if -->

<!-- show-if
    audience:
        - player
        - lore-explorer
    filters:
        - spoiler:[]
        - violence:[]
        - language:[]
        - sex:[]
        - prejudice:[]
    context:
        all:
            - has-discussed:infected-discussion-at-player-location-start
            - at-location:safe-location
        any:[]
        none:[]
    unlocked-by:[]
    unlocks:[]
    tags:
        - type:narrative
        - canon:core
    confidence:100
    keywords:
        - blightspores
        - feral
        - mindless
        - short-lived
        - aggressive
        - hostile
        - infection
        - loss-of-control
        - madness
        - hostile-to-non-dialect
        - hum
        - regional-dialects
    source-id:lore-infected-blightspores-100
    prompt:You discuss the poster's content with {{child-name}}. {{child-pronoun}} takes your caution to heart and promises to be careful and vigilant.
-->
### The Blightspores

The first strain became known as the **Blightspores**. They are feral and mindless, usually short-lived. Victims of this strain descended into madness within hours of infection. They didn't live long enough to age or procreate. They fought. They killed. They died.

<!-- only:audience:lore-explorer -->
Yet, they weren't without structure. A low and droning sound, called **the Hum**, bound them into violent colonies. Each region developed its own frequency. Any being that failed to echo their dialect, be it human, animal, or even other Blightspore variants, was torn apart.
<!-- /only -->
<!-- /show-if -->

<!-- show-if
    audience:
        - player
        - lore-explorer
    filters:
        - spoiler:[]
        - violence:[]
        - language:[]
        - sex:[]
        - prejudice:[]
    context:
        all:
            - has-item: charged-battery
            - has-item: screwdriver
            - at-location: safe-location
        any:[]
        none:[]
    unlocked-by:
        - infected-blightspores-100
    unlocks:
        - uninfected-overview-100
    tags:
        - type:narrative
        - canon:core
    confidence:100
    keywords:
        - gravebloomers
        - cognitive
        - strategic
        - sentient
        - hateful
        - alliance-forming
        - hostile
        - generational-memory
        - remembrance
        - arrogance
        - scripture
        - doctrine
    source-id:lore-infected-gravebloomers-100
    prompt:{{child-name}} asks you whether there are more types of infected. "I know about the Gravebloomers. I will tell you more later. Let's fix this recorder first. Maybe there is something important on it."
    metadata:
        - discovered-at:fragment-gravebloomers-lab-recorder-message
-->
### The Gravebloomers

The second strain, the Gravebloomers, did not lose their minds; they sharpened them. They could think, plan, and forge alliances — both with other Gravebloomer clans and, when it suited their aims, even with the uninfected. They could also hate... and there are no known survivors of a Gravebloomer's hatred.

<!-- only:audience:lore-explorer -->
Remembrance gave way to arrogance. The uninfected were no longer seen as survivors, but as stunted echoes — unfinished, aging relics too afraid to embrace the bloom. Gravebloomers aged, procreated, and with each generation, more of what it meant to be human slipped away.

What remained hardened into doctrine. Stories became scripture, victories became legend. From colony to colony, their gospel spread — preached in bone and whispered through spores. They did not mourn what was lost. They preached what had replaced it.
<!-- /only -->
<!-- /show-if -->

<!-- show-if
    audience:
        - player
        - lore-explorer
    filters:
        - spoiler:[]
        - violence:[]
        - language:[]
        - sex:[]
        - prejudice:[]
    context:
        all:
            - has-analyzed:infected-gravebloomers-100
            - at-location: safe-location
        any:[]
        none:[]
    unlocked-by:
        - infected-gravebloomers-100
    unlocks:
        - infection-character-10
    tags:
        - type:narrative
        - canon:core
    confidence:100
    keywords:
        - uninfected
        - survival
        - isolation
        - trust-collapse
        - resilience
        - post-collapse
    source-id:lore-infected-gravebloomers-100
    prompt:[]
    metadata:
        - discovered-at:fragment-gravebloomers-lab-recorder-message
    source-id: lore-uninfected-overview-100
-->
### The Uninfected

The uninfected endure. They are scattered across the wastes, living like ghosts in the ruins. Food is rare. Clean water even rarer, and trust is nearly extinct.

You and {{child-name}} do not have any of the symptoms mentioned in the lab recorder message. Thus, you and {{child-name}} are two of these uninfected survivors. For now. Every decision and every step you take shapes not only your fate but also the future of those who walk beside you.

There **is no cure**. There **are no saviors**. There is only the **fractured world**, and what you choose to build from the ashes.

**This is your chronicle.** The ink is still wet. What you write next may never be written again.
<!-- /show-if -->
