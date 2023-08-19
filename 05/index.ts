import { readFromFile } from "../01";
import { UserToRegister } from "../02";

const searchUserByJob = (job: string): UserToRegister => {
  const fileContent = readFromFile("./02/bd.json") as UserToRegister[];

  const userFounded = fileContent.filter((user) =>
    user.job?.toLowerCase().startsWith(job.toLowerCase())
  );

  return userFounded[0];
};

searchUserByJob("free");
