import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[βππππβ] πΈπ½πΆππ΄ππ΄ π΄π» π½πΎπΌπ±ππ΄ π³π΄ π°π»πΆππ½π° π²π°π½π²πΈπΎπ½ π° π±πππ²π°π*`
try {
let res = await fetch(`https://api.akuari.my.id/search/searchsoundcloud?query=${text}`)
let json2 = await res.json()
let urlSC = await json2.hasil[0].url
let res2 = await fetch(`https://api.akuari.my.id/downloader/scdl?link=${urlSC}`)
let json = await res2.json()
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${json.link}`)).text()
let soundcloudt = `βββββ¬ ππππππππππ β­ββββΎβ
β¬
ββ£β¨ *ππΈπππ»πΎ:* ${json.title}
β΄
β¬
ββ£π *πππ» π³πΈππ΄π²ππΎ:* ${shortUrl}
β΄
β¬
ββ£ *- π΄πππππππ ππππππ...*
β΄
β¬
β _@ffxryu.18_
β΄`
conn.sendFile(m.chat, json.thumb, '', soundcloudt, m)
conn.sendMessage(m.chat, { audio: { url: json.link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
//conn.sendFile(m.chat, json.link, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch (e) {
throw '*[βππππβ] π΄πππΎπ, π½πΎ ππ΄ π»πΎπΆππΎ π±πππ²π°π π»π° π²π°π½π²πΈπΎπ½ πΎ π»π° πΏπ°πΆπΈπ½π° π³π΄ π°πππ³π° πΏπ°ππ° π±πππ²π°π π»π° π²π°π½π²πΈπΎπ½ π΄πππ° π²π°πΈπ³π°, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄ππ½ππ°ππ»πΎ πΌπ°π ππ°ππ³π΄*'
}}
handler.command = /^(soundcloud|cover)$/i
export default handler
