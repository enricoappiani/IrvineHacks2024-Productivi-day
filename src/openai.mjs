import OpenAI from "openai";
//require('dotenv').config()

const openai = new OpenAI({
   apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true
 });

export default async function main(blah) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: blah }],
    model: "gpt-3.5-turbo",
  });
  const out_message = completion.choices[0]['message']['content'];
  const arr = out_message.split("\n")
  const list = []
  const info = []
  for(const x of arr){
    if(x.indexOf(":") >= 0){
      list.push(x.split(":")[0])
      info.push(x.split(":")[1])
    }
  }
  /*
  console.log("\n")
  for(const x of list){
    console.log(x)
  }
  console.log("\n")
  */
  const all_info = list.join("\n")
  return all_info;
}