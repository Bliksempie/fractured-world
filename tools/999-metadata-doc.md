# META STRUCTURES OVERVIEWS

The tables below show the structure for all defined metadata types. Do not edit above this text manually unless there is an error, or new metadata types are defined.

## 📜 `fragment-meta` Schema Specification

| Field Name               | Required | Allowed Values / Format                                                   | Notes                                                                 |
|--------------------------|----------|---------------------------------------------------------------------------|-----------------------------------------------------------------------|
| `affects-living-chronicles` | True       | `true` or `false`                                                        | Controls whether this fragment updates the player's Living Chronicles |
| `converts-myth-to-confirmed` | True    | `true` or `false`                                                        | Marks if this fragment debunks a myth                                 |
| `fragment-id`            | True       | `fragment-[a-z0-9-]+` (unique)                                            | Used for internal reference and game logic                            |
| `myth-id`                | True       | `myth-[a-z0-9-]+` or `"null"`                                             | Set to `"null"` if `converts-myth-to-confirmed` is `false`           |
| `fragment-timing`        | True       | `earlygame`, `midgame`, `lategame`                                       | Helps control when the fragment appears                               |
| `fragment-lore-type`     | True       | `item`, `event`, `ritual`, `colony`, `belief`                            | Categorizes lore content                                              |
| `is-unlocked-by`         | True       | `item:x`, `event-ended:x`, `step-reached:x`, or `"null"`                 | Determines how the player obtains the fragment                        |
| `unlocks-chronicle`      | True       | `chronicle-[a-z0-9-]+` or `"null"`                                        | Use `"null"` if it does not unlock any official chronicle section    |
| `unlock-behavior`        | True       | `on-analysis`, `on-acquisition`                                          | Defines whether it applies when found or when safely analyzed         |
