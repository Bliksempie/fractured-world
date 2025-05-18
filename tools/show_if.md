# SHOW-IF

`<!-- show-if -->` blocks define conditional lore visibility in Fractured World.
Each block controls whether a specific lore entry is shown based on game state, player discovery, or systemic triggers.

This metadata lives inside HTML comments in your `.md` lore files.

## Structure

<!-- show-if
    key: <identifier>                                            # A unique, stable ID for this condition (e.g., infection-behavior)
    trigger: <discovery | event | step | gravity>                # What kind of system event activates this check
    state: <(un)discovered|started|ended|reached|gravity<50>     # The condition value
    confidence: <0–100>                                          # Internal trust score (not shown to players)
    unlocks:                                                     # Items this condition unlocks (empty if none)
        - <system-key>
        - <system-key>
    tags:                                                        # e.g., origin, infection, confirmed
        - <tag>
        - <tag>
    source-id: lore-<identifier>-<state>                         # Stable source reference for parsing/debugging
-->
<!-- /show-if -->

## Example

<!-- show-if
    key: infection-behavior
    trigger: gravity
    state: gravity<50
    confidence: 23
    unlocks:
        - fragment-half-map
    tags:
        - origin
        - infection
        - unconfirmed
    source-id: lore-infection-behavior-gravity-threshold
-->
Some text here
<!-- /show-if -->