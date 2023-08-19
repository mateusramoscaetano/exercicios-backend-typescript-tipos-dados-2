import * as fs from "fs";

export const readFromFile = (filePath: string): unknown => {
  const content = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(content);
};

export const writeToFile = (filePath: string, data: any): void => {
  const jsonData = JSON.stringify(data);

  fs.writeFileSync(filePath, jsonData);
  console.log("Escrita concluída.");
};

const filePath = "01/bd.json";

let fileContent = readFromFile(filePath) as string[];

fileContent.push("Example 2");

writeToFile(filePath, fileContent);
