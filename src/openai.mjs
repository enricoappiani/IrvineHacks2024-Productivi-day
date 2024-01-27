import OpenAI from "openai";

const openai = new OpenAI({
   apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true
 });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "tell me a joke" }],
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
  console.log("\n")
  for(const x of list){
    console.log(x)
  }
  console.log("\n")

  return out_message; // Exporting the out_message variable
}
const openai_message = main()
export default openai_message;
