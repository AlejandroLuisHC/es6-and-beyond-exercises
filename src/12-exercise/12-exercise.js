/**
 * Exercise 12:
 *
 * Finish the code of the `exercise12` function so that it:
 *
 * 1. Receives 2 parameters: `array` and `entry`
 *
 * @example
 *
 * function fn (array, entry) {...}
 *
 * 2. Executes the array.includes() method to check if the `entry`
 *    is in the `array` parameter that the function receives.
 *
 * 3. Returns the result
 */

// Finish the code of the function
function exercise12(arr, entry) {
    return arr.includes(entry);
}

// Don’t change the code bellow this line
import setup12Exercise from "./12-exercise-setup";

if (process.env.NODE_ENV !== "test") {
    setup12Exercise(() =>
        console.log(
            exercise12(
                ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "SOME OTHER DAY"
            )
        )
    );
}

export default exercise12;
