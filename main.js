"use strict";
// Sandwich
function makeSandwich(...item) {
    console.log("Sandwich Summery:");
    if (ClipboardItem.length === 0) {
        console.log("   -You ordered an empty sandwich. Please add some items.");
    }
    else {
        item.forEach((item, i) => {
            console.log(`   ${i + 1}. ${item}`);
        });
    }
    console.log("\n");
}
// Call the function with different numbers of arguments.
makeSandwich();
makeSandwich("Turkey", "Lettuce", "Tomato", "Mayonise");
makeSandwich("Hum", "Lettuce", "Tomato", "Cheese");
makeSandwich("Peanut Butter", "Jam", "Banana", "Honey");
