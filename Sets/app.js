// const random = "third";

// const unique = new Set();
// unique.add("first");
// unique.add("second");
// unique.add("third");
// unique.add("first");
// unique.add(4);

// const result = unique.delete("five");
// console.log(result);

// const isValue = unique.has(4);

// console.log(unique);

// new Set() - accepts iterable objects
const products = [
  {
    title: "high-back bench",
    company: "ikea",
  },
  {
    title: "albany table",
    company: "marcos",
  },
  {
    title: "accent chair",
    company: "caressa",
  },
  {
    title: "wooden table",
    company: "ikea",
  },
];

// const companies = products.map((item) => item.company);
// console.log(companies);
// const uniqueCompanies = new Set(companies);
// console.log(uniqueCompanies);

// const finalCompanies = ["all", ...uniqueCompanies];
// console.log(finalCompanies);

const result = ["all", ...new Set(products.map((item) => item.company))];
console.log(result);

// string.includes
// const firstName = "john";
// const results = firstName.includes("jo");
// console;

// const product = {
//   title: "Leather Chair",
// };

// const results = product.title.includes("Le");
// console.log(results);

// STRING-INCLUDE METHOD
const furnitures = [
  { title: "Modern Poster" },
  { title: "Bar Stool" },
  { title: "Armchair" },
  { title: "Leather Chair" },
];

const text = "a";

const fiteredFurniture = furnitures.filter((furniture) =>
  furniture.title.toLowerCase().includes(text)
);

console.log(fiteredFurniture);

// ARRAY-INCLUDES-METHOD
const groceries = ["milk", "bread", "meat", "garri"];

let randomItem = "garri";

// const isIncluded = groceries.includes(randomItem, 0);
if (groceries.includes(randomItem)) {
  console.log(`Yeah! it is on the list`);
}
// console.log(isIncluded);
