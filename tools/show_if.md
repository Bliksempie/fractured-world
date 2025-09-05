# Manual

`<!-- show-if -->` blocks define conditional lore visibility in Fractured World. Each block controls whether a specific lore entry is shown based on game state, player discovery, or systemic triggers. This metadata lives inside HTML comments in your `.md` lore files.

## Structure and mechanic

show-if - mechanic, primary gate for content governance.
sections - main keys of the show-if, ie., audience, filters, etc.
keys - sub-sections of sections, i.e., player or lore-explorer for audience section.
values - values for keys, used in key:value pairs.

- When a section has no keys, define with [], for example, keywords:[]
- When a key has no values, define with [], for example, spoiler:[]

All sections, keys and values are required, therefore use [] when any are not defined. Thus, no ambiguity of missing vs. not in use.

### General provisios

- The outer gate (show-if) must include all relevant value pairs for a section or key if further filtering are done
- inside the show-if, for example, audience:type:player combined with audience:type:lore-explorer means the outer gate
- allows both types of audience in, but if the audience is only a player, inner gated content meant for the lore-explorer
- will not be displayed. lore-explorer content are additional enriching content that are not required to finish the game.

### Audience

type|locale

When both player and lore-explorer are allowed in the outer gate, use inline only: blocks to narrow content inside the same fragment. If only one audience is valid, declare just that audience at the outer level.

- type: player|lore-explorer
    - player - only shows content relevant to the game experience
    - lore-explorer - the user can set a flag in The Living Chronicles if they are interested in deeper lore content.
- locale: default|locale-code
    - default - available for all locales, including specific
    - any out-of-game regional content.
    - not necessarily in a language for that locale, but could also be relevant to that locale, like special offers.

### Context

all|any|none

- all - a player must have all of the items to unlock this section
- any - a player must have any of the items to unlock this section
- none - a player must not have any of the items to unlock this section

### The context section keys are:
- at-location
- found-item - posession of item is requirement.
- discussed-item - need to discuss the item with companions for more clarity before useful.
- repaired-item - if an item is broken or not working for any reason, needs to be repaired before useful.
- analyzed-item - if an item requires indepth analysis beyond basic discussion before useful.

### Filters

spoiler|violence|language|sex|prejudice

Note that filters work only for optional content, should always be defined as [] if no inner gatekeeping for filters are present. Each filter key can have only one value - the least restrictive should be used and gatekept later if needed, or use [] for none.

- spoiler - needed if some content may contain game spoilers and should be redacted in Reddit style.
    - no
    - yes
- violence - allows the user to filter out optional lore that contains violence.
- language - allows the user to filter out optional lore that contains content with high-age language usage
- sex - allows the user to filter out optional lore with sexual content
- prejudice - allows the user to filter out all optional lore with prejudicial content

- The prejudicial keys (violence, language, sex and prejudice) have the following possible values:
    - family
    - pg10
    - pg13
    - 16
    - 18
    - 21

### Tags

type|canon

- type
    - narrative - related to the primary story
    - codex - related to additional content (i.e., for lore-explorers, or not main story-line)
    - mechanic - describes a game mechanic (i.e., gravity)
    - quote - used to indicate an in-game quote.
    - system - used to indicate an in-game system note - rarely seen.
- canon
    - core
    - regional
    - apocrypha
    - dev-only

### Confidence <value>

Low confidence values means the content has not been verified yet, so may be less complete, or even contain false information. In other words, the confidence level governs the level of detail and truthfulness.

- 100 - verified/core truth
- 50 - survivor recollection
- 20 - rumor

### Keywords <list>

Keywords help organize content by a topic. Maximum 20 keywords.

### Source ID <name>

Source ID is the internal name for a show-if block, fragment, or other game metadata, and must be unique throughout the system. Source IDs may later be automatically created if feasible.

### Prompt

Prompts are used to introduce a new item to the user by means of a dialog or console display to draw the player's attention to the new content. May contain metadata to link to a lore entry, i.e., {{lore-entry-source-id}}.

## Example

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
        - necromyce
        - infection
        - fungal
        - infection-origin
        - pathogen-evolution
        - collapse
        - infrastructure-failure
        - contaminated-water
        - contaminated-food
        - animal-carriers
        - cycle-78
        - first-bloom
        - early-infection
        - apocalypse
        - dread
    source-id:lore-living-chronicles-intro-100
    prompt:[]
-->
Some text here
<!-- /show-if -->