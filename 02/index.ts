import { readFromFile } from "../01";
import * as fs from "fs";

interface Address {
  cep: string;
  street: string;
  complement?: string;
  district: string;
  city: string;
}

interface UserToRegister {
  name: string;
  email: string;
  cpf: string;
  job?: string;
  address?: Address | null;
}

const writeToFile = (filePath: string, data: UserToRegister[]): void => {
  const jsonData = JSON.stringify(data);
  fs.writeFileSync(filePath, jsonData);
};

const registerUserData = (filePath: string, data: UserToRegister) => {
  const existingData = readFromFile(filePath) as UserToRegister[];
  existingData.push(data);
  writeToFile(filePath, existingData);
};

const example1 = {
  name: "mateus",
  email: "m@a.com",
  cpf: "9999999999",
  job: "freelancer",
};

const example2 = {
  name: "mateus2",
  email: "m@a2.com",
  cpf: "99999929999",
  job: "freelancer2",
};

const filePath = "02/bd.json";

registerUserData(filePath, example1);
registerUserData(filePath, example2);
