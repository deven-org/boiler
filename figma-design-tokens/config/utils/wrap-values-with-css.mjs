import fs from 'fs';


const wrapValuesWithCss = (obj) => {
  // Iterate over each key-value pair in the object
  for (let key in obj) {
    let value = obj[key];
    // If the value is an object, recursively call the function
    if (typeof value === 'object') {
      obj[key] = wrapValuesWithCss(value);
    }
    // If the value is a string, wrap it with css``
    else if (typeof value === 'string') {
      obj[key] = css`value`;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return obj;
};

// Read the file contents
const filePath = 'src/foundation/_tokens-generated/semantic-tokens.generated.js';
const fileContents = fs.readFileSync(filePath, 'utf8');
console.log(fileContents);

// Extract the file header comment
const headerComment = fileContents.match(/\/\*[\s\S]*?\*\//)?.[0] || '';
console.log(headerComment);

// Extract the object from the file contents
const objectString = fileContents.match(/const semanticTokens = ({[\s\S]*?});/)[1];

// Parse the object string into a JavaScript object
const myObject = JSON.parse(objectString);
console.log(myObject)

// Define a function to iterate over nested objects and update the file contents
// function iterateNestedObjectsAndUpdateContents(obj, callback) {
//   for (const key in obj) {
//     const value = obj[key];
//     callback(key, value);
//     if (typeof value === 'object') {
//       iterateNestedObjectsAndUpdateContents(value, callback);
//     }
//   }
//   // Update file contents with the new object
//   fileContents = fileContents.replace(objectString, JSON.stringify(myObject, null, 2));
// }

// Use the function to iterate over the nested objects in myObject and update the file contents
// iterateNestedObjectsAndUpdateContents(myObject, (key, value) => {
//   console.log(`${key}: ${JSON.stringify(value)}`);
// });

// // Delete the original file
// fs.unlinkSync(filePath);

// // Create a new file with the updated header comment and contents
// fs.writeFileSync(filePath, `${headerComment}\n${fileContents}`);

