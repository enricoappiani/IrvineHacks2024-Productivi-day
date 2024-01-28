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
 
  const all_info = list.join("\n")
  console.log(all_info)
  return all_info;
}
main("My schedule is: wake up 8 am, play league to 12pm, go to class to 1pm, eat lunch which was Jamaican Jerk, do homework from 2pm to 5pm, eat dinner which was Jamaican Jerk (I love Jamaican Jerk), then play league for 5 hours, then homework from 11pm to 3 am, sleep at 3 am. What are some bad habits of my schedule?")