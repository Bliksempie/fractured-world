<!-- do-meta
    do-key: lock | unlock | activate | deactivate | trigger | end    (REQUIRED)
    do-type: fragment | chronicle | item | event                     (REQUIRED)
    do-value: valid-value                                            (REQUIRED)
-->
<!-- /do-meta -->

<!-- is-meta
    is-key: required | locked                                        (REQUIRED)
    is-type: fragment | chronicle | item                             (REQUIRED)
    is-value: valid-value                                            (REQUIRED)
-->
<!-- /is-meta -->

<!-- show-if-meta
    show-key: event-triggered|event-ended|step-reached|gravity-is    (REQUIRED)
    show-value: valid-value                                          (REQUIRED)
-->
<!-- /show-if-meta -->

<!-- fragment-meta
    affects-living-chronicles: true | false                          (REQUIRED)
    converts-myth-to-confirmed: true | false                         (REQUIRED)
    fragment-id: fragment-name                                       (REQUIRED, unique ID)
    myth-id: myth-name | "null"                                      (REQUIRED, use value null if converts-myth-to-confirmed is false)
    fragment-timing: earlygame | midgame | lategame                  (REQUIRED)
    fragment-lore-type: item | event | ritual | colony | belief      (REQUIRED)
    is-unlocked-by: item:x | event-ended:x | step-reached:x | "null" (REQUIRED, null if unlocked at start of the game)
    unlocks-chronicle: chronicle-id | "null"                         (REQUIRED, even if not used)
    unlock-behavior: on-analysis | on-acquisition                    (REQUIRED)
-->

# META STRUCTURES OVERVIEWS

The tables below show the structure for all defined metadata types. Do not edit above this text manually unless there is an error, or new metadata types are defined.

## 📜 `fragment-meta` Schema Specification

| Field Name               | Required | Allowed Values / Format                                                   | Notes                                                                 |
|--------------------------|----------|---------------------------------------------------------------------------|-----------------------------------------------------------------------|
| `affects-living-chronicles` | ✅       | `true` or `false`                                                        | Controls whether this fragment updates the player's Living Chronicles |
| `converts-myth-to-confirmed` | ✅    | `true` or `false`                                                        | Marks if this fragment debunks a myth                                 |
| `fragment-id`            | ✅       | `fragment-[a-z0-9-]+` (unique)                                            | Used for internal reference and game logic                            |
| `myth-id`                | ✅       | `myth-[a-z0-9-]+` or `"null"`                                             | Set to `"null"` if `converts-myth-to-confirmed` is `false`           |
| `fragment-timing`        | ✅       | `earlygame`, `midgame`, `lategame`                                       | Helps control when the fragment appears                               |
| `fragment-lore-type`     | ✅       | `item`, `event`, `ritual`, `colony`, `belief`                            | Categorizes lore content                                              |
| `is-unlocked-by`         | ✅       | `item:x`, `event-ended:x`, `step-reached:x`, or `"null"`                 | Determines how the player obtains the fragment                        |
| `unlocks-chronicle`      | ✅       | `chronicle-[a-z0-9-]+` or `"null"`                                        | Use `"null"` if it does not unlock any official chronicle section    |
| `unlock-behavior`        | ✅       | `on-analysis`, `on-acquisition`                                          | Defines whether it applies when found or when safely analyzed         |
"