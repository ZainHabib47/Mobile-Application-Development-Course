// Array And String Methods

const str = ' Hello Zain Habib! ';

// String Methods
// Get character at index 1
console.log("1. charAt(1):", str.charAt(1));

// Get Unicode value of character at index 1
console.log("2. charCodeAt(1):", str.charCodeAt(1));

// Get Unicode code point of character at index 1
console.log("3. codePointAt(1):", str.codePointAt(1));

// Concatenate '!' to the string
console.log("4. concat('!'):", str.concat('!'));

// Check if string ends with '!'
console.log("5. endsWith('!'):", str.endsWith('!'));

// Check if string includes 'Java'
console.log("6. includes('Java'):", str.includes('Java'));

// Get index of first occurrence of 'J'
console.log("7. indexOf('J'):", str.indexOf('J'));

// Get index of last occurrence of 'a'
console.log("8. lastIndexOf('a'):", str.lastIndexOf('a'));

// Compare string with 'Hello' (locale-sensitive)
console.log("9. localeCompare('Hello'):", str.localeCompare('Hello'));

// Normalize Unicode characters
console.log("12. normalize():", str.normalize());

// Pad end of string with '.' to make length 20
console.log("13. padEnd(20, '.'):", str.padEnd(20, '.'));

// Pad start of string with '.' to make length 20
console.log("14. padStart(20, '.'):", str.padStart(20, '.'));

// Repeat the string 2 times
console.log("15. repeat(2):", str.repeat(2));

// Replace 'Mr' with 'Hello' (no effect here)
console.log("16. replace('Mr', 'Hello'):", str.replace('Mr', 'Hello'));

// Replace all spaces with '_'
console.log("17. replaceAll(' ', '_'):", str.replaceAll(' ', '_'));

// Search for 'Java' and return its index
console.log("18. search(Zain):", str.search('Zain'));

// Extract substring from index 1 to 6
console.log("19. slice(1, 6):", str.slice(1, 6));

// Split string into array by spaces
console.log("20. split(' '):", str.split(' '));

// Check if string starts with a space
console.log("21. startsWith(' '):", str.startsWith(' '));

// Extract substring from index 1 to 6
console.log("22. substring(1, 6):", str.substring(1, 6));

// Convert string to lowercase
console.log("25. toLowerCase():", str.toLowerCase());

// Convert string to its string representation
console.log("26. toString():", str.toString());

// Convert string to uppercase
console.log("27. toUpperCase():", str.toUpperCase());

// Remove leading and trailing spaces
console.log("28. trim():", str.trim());

// Remove trailing spaces
console.log("29. trimEnd():", str.trimEnd());

// Remove leading spaces
console.log("30. trimStart():", str.trimStart());

// Return primitive value of the string
console.log("31. valueOf():", str.valueOf());

// Create string from Unicode values
console.log("32. String.fromCharCode(72, 101):", String.fromCharCode(72, 101));

// Array Methods
let arr = [1, 2, 3, 4, 5];

// Concatenate array with [6,7]
console.log("1. concat([6,7]):", arr.concat([6,7]));

// Copy elements from index 3 to start
console.log("2. copyWithin(0, 3):", [...arr].copyWithin(0, 3));

// Get array iterator of key-value pairs
console.log("3. entries():", Array.from(arr.entries()));

// Fill array with 0
console.log("4. fill(0):", [...arr].fill(0));

// Check if array includes 3
console.log("5. includes(3):", arr.includes(3));

// Get index of first occurrence of 3
console.log("6. indexOf(3):", arr.indexOf(3));

// Join array elements with '-' separator
console.log("7. join('-'):", arr.join('-'));

// Get array iterator of keys
console.log("8. keys():", Array.from(arr.keys()));

// Get index of last occurrence of 3
console.log("9. lastIndexOf(3):", arr.lastIndexOf(3));

// Remove and return last element
console.log("10. pop():", [...arr].pop());

// Add 6 to the end of the array
console.log("11. push(6):", [...arr,6]);

// Reverse the array
console.log("12. reverse():", [...arr].reverse());

// Remove and return first element
console.log("13. shift():", [...arr].shift());

// Extract elements from index 1 to 3
console.log("14. slice(1,3):", arr.slice(1,3));

// Convert array to string
console.log("16. toString():", arr.toString());

// Add 0 to the start of the array
console.log("17. unshift(0):", [0,...arr]);

// Get array iterator of values
console.log("18. values():", Array.from(arr.values()));

// Create array from string '123'
console.log("19. Array.from('123'):", Array.from('123', Number));

// Check if arr is an array
console.log("20. Array.isArray(arr):", Array.isArray(arr));

// Create array from arguments
console.log("21. Array.of(1,2,3):", Array.of(1,2,3));

// Get element at index -1 (last element)
console.log("22. at(-1):", arr.at(-1));

// Return new reversed array
console.log("23. toReversed():", arr.toReversed());

// Return new array with element replaced at index 2
console.log("24. toSpliced(2,1,'a'):", arr.toSpliced(2,1,'a'));

// Return new array with element at index 2 replaced with 'a'
console.log("25. with(2,'a'):", arr.with(2,'a'));