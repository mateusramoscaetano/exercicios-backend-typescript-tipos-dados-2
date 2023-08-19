import * as fs from "fs";

type JSONData = { [key: string]: string };

const readFromFile = (filePath: string): JSONData => {
  const content = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(content);
};

const writeToFile = (filePath: string, data: JSONData): void => {
  const jsonData = JSON.stringify(data);

  fs.writeFileSync(filePath, jsonData);
};

const filePath = "01/bd.json";

let fileContent = readFromFile(filePath);

fileContent.example1 = "Example 2";

writeToFile(filePath, fileContent);
console.log("Escrita concluída.");
