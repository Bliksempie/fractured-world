# DO-* TAGS

> THESE TAGS ARE ACTION TAGS THAT INSTRUCTS THE GAME TO DO A TASK
<!-- do-x:y:z -->
<!-- /do-x:y:z -->

## SOME EXAMPLES OF DO-* TAGS

> THESE TAGS LOCK/UNLOCK ITEM OF TYPE X IDENTIFIED BY Y
<!-- do-unlock:fragment:half-map -->
<!-- /do-unlock:fragment:half-map -->

<!-- do-lock:chronicle:bloodrites -->
<!-- /do-lock:chronicle:bloodrites -->

# IS TAGS

IS tags allows the game to check if a certain condition X is true for item type Y identified by Z.

<!-- is:x:y:z -->
<!-- /is:x:y:z -->

## SOME EXAMPLES OF IS TAGS

> THESE TAGS ARE USED TO DENOTE REQUIREMENT ITEM OF TYPE X, IDENTIFIED BY Y, e.g., requires:fragment:x
<!-- is:required:fragment:half-map -->
<!-- /is:required:fragment:half-map -->

<!-- is:locked:chronicle:bloodrites -->
<!-- /is:locked:chronicle:bloodrites -->

# SHOW-IF TAGS

The general format of show-if is show-if:x:y.

<!-- show-if:x:y -->
<!-- /show-if:x:y -->


## SOME EXAMPLES OF SHOW-IF

> THESE TAGS ARE USED BY THE GRAVITY SYSTEM TO GROUP TEXTS BASED ON GRAVITY SCORE
<!-- show-if:gravity-is:below-0 -->
<!-- /show-if:gravity-is:below-0 -->

<!-- show-if:gravity-is:above-0 -->
<!-- /show-if:gravity-is:above-0 -->

<!-- show-if:gravity-is:neutral -->
<!-- /show-if:gravity-is:neutral -->

> MORE EXAMPLES
<!-- show-if:event-triggered:x -->
<!-- /show-if:event-triggered:x -->

<!-- show-if:event-ended:x -->
<!-- /show-if:event-ended:x -->

<!-- show-if:step-reached:x -->
<!-- /show-if:step-reached:x -->
