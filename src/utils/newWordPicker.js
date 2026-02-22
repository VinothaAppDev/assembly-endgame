export default function newWordPicker() {
    const wordList = [
        // EASY & COMMON
        "apple", "table", "chair", "house", "river", "plant", "cloud", "light", "sound", "smile",
        "dream", "water", "stone", "grass", "bread", "clock", "paper", "glass", "train", "earth",
        "fruit", "money", "music", "heart", "night", "child", "world", "green", "white", "black",
        "brown", "sweet", "sugar", "honey", "happy", "laugh", "dance", "drink", "sleep", "carry",
        "build", "paint", "write", "read", "learn", "teach", "clean", "wash", "drive", "walk",
        "stand", "sit", "jump", "catch", "throw", "open", "close", "start", "stop", "begin",
        "finish", "watch", "listen", "speak", "answer", "story", "letter", "number",
        "picture", "window", "door", "floor", "garden", "forest", "animal", "bird", "fish",
        "horse", "tiger", "lion", "snake", "mouse", "butter", "cheese", "salt",

        // MEDIUM
        "travel", "weather", "holiday", "journey", "village", "country", "mountain", "ocean",
        "desert", "island", "valley", "volcano", "thunder", "sunrise", "sunset", "twilight",
        "shadow", "silence", "whisper", "echo", "promise", "secret", "memory", "history",
        "future", "present", "past", "culture", "festival", "language", "grammar", "sentence",
        "chapter", "library", "college", "teacher", "student", "science", "physics", "biology",
        "computer", "keyboard", "monitor", "network", "program", "website", "browser",
        "battery", "charger", "device", "engine", "vehicle", "traffic", "signal", "bridge",
        "highway", "station", "airport", "passport", "ticket", "luggage", "uniform", "medicine",
        "doctor", "nurse", "hospital", "patient", "surgery", "therapy", "fitness", "exercise",
        "strength", "balance", "energy", "motion", "gravity", "pressure", "material", "plastic",
        "metal", "rubber", "cotton", "leather", "fabric", "pattern", "design", "fashion",
        "button", "zipper", "collar", "pocket", "mirror", "camera", "painting", "gallery",
        "museum", "theatre", "concert", "audience", "emotion", "feeling", "anxiety", "courage",
        "freedom", "justice", "honesty", "loyalty", "respect",

        // HARD / TRICKY
        "puzzle", "mystery", "illusion", "fantasy", "curiosity", "knowledge", "wisdom",
        "philosophy", "psychology", "technology", "innovation", "creativity", "invention",
        "discovery", "experiment", "analysis", "strategy", "solution", "problem", "challenge",
        "victory", "defeat", "success", "failure", "discipline", "patience", "confidence",
        "motivation", "inspiration", "dedication", "ambition", "opportunity", "potential",
        "capacity", "efficiency", "management", "leadership", "communication", "negotiation",
        "cooperation", "integrity", "stability", "flexibility", "environment", "ecosystem",
        "pollution", "recycling", "renewable", "climate", "atmosphere", "radiation",
        "electricity", "magnetism", "frequency", "vibration", "resonance", "algorithm",
        "database", "encryption", "automation", "artificial", "simulation", "prediction",
        "probability", "statistics", "calculation", "measurement", "estimation",

        // RARE / FUN / WORDLE STYLE
        "awkward", "cryptic", "zephyr", "quartz", "voyage", "whimsy", "glitch", "pixel", "matrix",
        "binary", "syntax", "kernel", "buffer", "cursor", "format", "module", "vector", "scalar",
        "random", "chaotic", "entropy", "paradox", "enigma", "obscure", "abstract", "concrete",
        "minimal", "complex", "dynamic", "static", "neutral", "variant", "element", "compound",
        "mixture", "reaction", "catalyst", "polymer", "crystal", "molecule", "isotope",
        "spectrum", "quantum", "neutron", "proton", "electron", "orbit", "galaxy", "nebula",
        "asteroid", "comet", "satellite", "telescope", "microscope", "organism", "mutation",
        "evolution", "adaptation", "instinct", "behavior", "cognition", "perception",
        "intuition", "awareness", "identity", "personality", "character", "attitude", "belief",
        "opinion", "perspective", "narrative", "metaphor", "symbol", "allegory", "irony",
        "satire", "humor", "sarcasm", "melody", "rhythm", "harmony", "tempo", "chord", "lyric",
        "verse", "chorus"
    ];

    const index = Math.floor(Math.random() * wordList.length)

    return wordList[index]
}