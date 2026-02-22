export default function cheerUpMsgPicker(language){
    const msgs = [
        `Keep moving 🎉🎉`,
        `Doing Great progress ✨`,
        `You are much Closer 🌈`,
        `Come on.... 💪`,

    ]

    const index = Math.floor(Math.random()*(msgs.length))

    return msgs[index]
}