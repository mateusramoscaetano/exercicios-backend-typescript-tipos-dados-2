import { readFromFile, writeToFile } from "../01"; // Certifique-se de fornecer o caminho correto para o seu módulo
import { Address, UserToRegister } from "../02";

interface UserEditDto {
  name?: string;
  email?: string;
  cpf?: string;
  job?: string;
  address?: Address | null;
}

const findUserToEdit = (cpf: string): UserToRegister => {
  const fileContent = readFromFile("./02/bd.json") as UserToRegister[];
  const userToEdit = fileContent.filter(
    (user: UserToRegister) => user.cpf === cpf
  );

  return userToEdit[0];
};

const userDetail = (cpf: string): void => {
  const user = findUserToEdit(cpf);
  console.log(user);
};

const editUser = (data: UserEditDto, cpf: string) => {
  let users = readFromFile("./02/bd.json") as UserToRegister[];
  const userIndex = users.findIndex((user) => user.cpf === cpf);

  if (userIndex !== -1) {
    users[userIndex] = Object.assign({}, users[userIndex], data);
    writeToFile("./02/bd.json", users);
  } else {
    console.log("Usuário não encontrado");
  }
};

editUser(
  {
    name: "joao",
    address: {
      cep: "88888",
      street: "rua",
      district: "string",
      city: "sao paulo",
    },
  },
  "9999999999"
);

userDetail("9999999999");
