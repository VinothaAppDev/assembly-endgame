export default function farewellMsgPicker(language){
    const msgs = [
        `FareWell: ${language}`,
        `R.I.P: ${language}`,
        `We lost ${language} from the world`,
        `We'll miss you, ${language}`,
        `Oh no, not ${language}!`,
        `${language} bites the dust`,
        `Gone but not forgotten, ${language}`,
        `The end of ${language} as we know it`,
        `Off into the sunset, ${language}`,
        `${language}, it's been real`,
        `${language}, your watch has ended`,
        `${language} has left the building`,
        `Adios, ${language}`
    ]

    const index = Math.floor(Math.random()*(msgs.length))

    return msgs[index]
}