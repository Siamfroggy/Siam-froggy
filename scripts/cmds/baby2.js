module.exports.config = {
  name: "bby",
    author:"Romim",
    version: "72782828281919292992",
category: "text"

}
module.exports.onStart = async function ({}) { }
module.exports.onChat = async function ({api,event,args}) {
  const fuck = args.join(" ")
  const axios = require("axios")
  const res =  await axios.get(`https://www.noobs-api.000.pe/dipto/baby?text=${fuck}`)
  const response = res.data.reply 
 await api.sendMessage(`${response}`,event.threadID, (error,info) => {
global.GoatBot.onReply.set(info.messageID, {commandName: this.config.name,
            type: "reply",
            messageID: info.messageID,
            author: event.senderID,
            msg: response,
        });
 },event.messageID)
}
module.exports.onReply = async ({api,event,args}) => {
  const n = event.body.toLowerCase()
  if (n.includes("bby")||n.includes("baby")||n.includes("A6")) {
    const axios = require("axios")
      const fuck = args.join(" ")
    const res =  await axios.get(`https://www.noobs-api.000.pe/dipto/baby?text=${fuck}`)
    const response = res.data.reply 
   await api.sendMessage(`${response}`,event.threadID, (error,info) => {
  global.GoatBot.onReply.set(info.messageID, {commandName: this.config.name,
              type: "reply",
              messageID: info.messageID,
              author: event.senderID,
              msg: response,
          });
   },event.messageID)
  }
}
