import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://raw.githubusercontent.com/socona12/TheMystic-Bot-MD/master/src/JSON/anime-Venom.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
conn.sendFile(m.chat, haha, 'error.jpg', `

*『 ️اليك قائمه بسورس البوت البوت 』*

*『 ️واتساب 』*

*⊱≼ https://wa.me/+967775302218 ≽⊰⊹*

*『 ️منصاتي 』*

*⊱≼ غير متوفر ≽⊰⊹*

*『 ️جروب واتساب 』*

*⊱≼ https://chat.whatsapp.com/LFFLFVRwTezEIMs3b2hAHC ≽⊰⊹*

*◉═══ • ❁ 👑 ❁ • ═══◉* `, m)
}
handler.command = handler.help = ['دعم','الدعم']
handler.tags = ['patchera']
export default handler
