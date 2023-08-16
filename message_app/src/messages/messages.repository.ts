import { readFile, writeFile } from "fs";
import { promisify } from "util";

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile);

export class MessageRepository {
  async findOne(id:string){
    const content = await readFileAsync('messages.json','utf8')
    const messages = JSON.parse(content)

    return messages[id]
  }

  async findAll() {
    const contents = await readFileAsync('messages.json','utf8')
    const messages = JSON.parse(contents)

    return messages
  }

  async create(message:string){
    const contents = await readFileAsync('messages.json','utf8')
    const messages = JSON.parse(contents)

    const id = Math.floor(Math.random() * 999)

    messages[id] = {id,contents}

    await writeFileAsync('messages.json',JSON.stringify(messages))
  }
}