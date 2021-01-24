import Database from "./Database.json";

function getAll(){
  return Promise.resolve(Database);
}

export default getAll;