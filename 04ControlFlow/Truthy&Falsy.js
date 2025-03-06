/*
Truthy & Falsy Values in JavaScript
In JavaScript, values are categorized as truthy or falsy based on how they behave in boolean contexts (like inside if statements).
*/

// 🔹 Truthy Values
// A truthy value is any value that is considered true when evaluated in a boolean context.

if ("Hello") console.log("Truthy!");  // ✅ Logs: Truthy!
if (42) console.log("Truthy!");       // ✅ Logs: Truthy!
if (true) console.log("Truthy!");     // ✅ Logs: Truthy!
if ([]) console.log("Truthy!");       // ✅ Logs: Truthy!
if ({}) console.log("Truthy!");       // ✅ Logs: Truthy!
if (3.14) console.log("Truthy!");     // ✅ Logs: Truthy!
if (-1) console.log("Truthy!");       // ✅ Logs: Truthy!


// 🔹 Falsy Values
// A falsy value is any value that is considered false when evaluated in a boolean context.

// 🚫 There are only 7 falsy values in JavaScript:

// Falsy Value	                              Description

// false	                               The boolean false
// 0	                                    The number zero
// -0	                                     Negative zero
// "" or ''	                                 Empty string
// null	                                     Absence of value
// undefined	                            Uninitialized value
// NaN	                                      Not a Number


if (false) console.log("Falsy!");     // ❌ Not executed
if (0) console.log("Falsy!");         // ❌ Not executed
if (-0) console.log("Falsy!");        // ❌ Not executed
if ("") console.log("Falsy!");        // ❌ Not executed
if (null) console.log("Falsy!");      // ❌ Not executed
if (undefined) console.log("Falsy!"); // ❌ Not executed
if (NaN) console.log("Falsy!");       // ❌ Not executed

// 🔑 Conclusion
// Truthy values evaluate as true in boolean contexts.
// Falsy values are: false, 0, -0, "", null, undefined, and NaN.
// Use || (OR) for default values.
// Use && (AND) for conditional execution.
// Use !! (Double NOT) to convert values to true or false.










// 🔹 Summary Table
// Operator	                                      Description	                                                    Example	                             Output
// >	                                          Greater than	                                                     5 > 3	                             true
// <	                                          Less than	                                                         3 < 5	                             true
// >=	                                          Greater than or equal	                                             5 >= 5                               true
// <=	                                          Less than or equal                                           	     4 <= 5	                             true
// ==	                                          Loose equality (type conversion)	                                 "5" == 5         	                 true
// ===	                                          Strict equality (no type conversion)	                             "5" === 5                     	     false
// !=	                                          Loose inequality (type conversion)	                              false != 0	                      false
// !==	                                          Strict inequality (no type conversion)	                         false !== 0	                     true
                                           