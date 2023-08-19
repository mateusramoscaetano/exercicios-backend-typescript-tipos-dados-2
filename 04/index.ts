import { readFromFile, writeToFile } from "../01";
import { UserToRegister } from "../02";

const deleteuser = (cpf: string): string => {
  const fileContent = readFromFile("./02/bd.json") as UserToRegister[];
  const userIndex = fileContent.findIndex((user) => user.cpf === cpf);

  if (userIndex !== -1) {
    fileContent.splice(userIndex, 1);
  } else {
    console.log("Usuário não encontrado");
  }

  writeToFile("./02/bd.json", fileContent);

  return " successfully deleted";
};

deleteuser("9999999999");
