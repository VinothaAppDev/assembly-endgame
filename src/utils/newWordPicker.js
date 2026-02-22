export default function newWordPicker() {
    const wordList = [
        // EASY & COMMON
        "apple", "table", "chair", "house", "river", "plant", "cloud", "light", "sound", "smile",
        "dream", "water", "stone", "grass", "bread", "clock", "paper", "glass", "train", "earth",
        "fruit", "money", "music", "heart", "night", "child", "world", "green", "white", "black",
        "brown", "sweet", "sugar", "honey", "happy", "laugh", "dance", "drink", "sleep", "carry",
        "build", "paint", "write", "read", "learn", "teach", "clean", "wash", "drive", "walk",
        "stand", "sit", "jump", "catch", "throw", "open", "close", "start", "stop", "begin",
        "finish", "watch", "listen", "speak", "answer", "question", "story", "letter", "number",
        "picture", "window", "door", "floor", "ceiling", "garden", "forest", "animal", "bird",
        "fish", "horse", "tiger", "lion", "snake", "mouse", "butter", "cheese", "salt",

        // MEDIUM
        "travel", "weather", "holiday", "journey", "village", "country", "mountain", "ocean",
        "desert", "island", "valley", "volcano", "rainfall", "thunder", "lightning", "sunrise",
        "sunset", "twilight", "shadow", "reflection", "silence", "whisper", "echo", "promise",
        "secret", "memory", "history", "future", "present", "past", "culture", "tradition",
        "festival", "language", "grammar", "sentence", "paragraph", "chapter", "library",
        "college", "teacher", "student", "science", "physics", "chemistry", "biology",
        "computer", "keyboard", "monitor", "network", "program", "website", "browser",
        "battery", "charger", "device", "engine", "vehicle", "traffic", "signal", "bridge",
        "highway", "station", "airport", "passport", "ticket", "luggage", "uniform", "medicine",
        "doctor", "nurse", "hospital", "patient", "surgery", "therapy", "fitness", "exercise",
        "strength", "balance", "energy", "motion", "gravity", "pressure", "temperature",
        "material", "plastic", "metal", "rubber", "cotton", "leather", "fabric", "pattern",
        "design", "fashion", "button", "zipper", "collar", "pocket", "mirror", "camera",
        "photograph", "painting", "sculpture", "gallery", "museum", "theatre", "concert",
        "audience", "performance", "applause", "emotion", "feeling", "anxiety", "courage",
        "freedom", "justice", "honesty", "loyalty", "respect",

        // HARD / TRICKY
        "puzzle", "mystery", "illusion", "fantasy", "imagination", "curiosity", "knowledge",
        "wisdom", "intelligence", "philosophy", "psychology", "technology", "innovation",
        "creativity", "invention", "discovery", "experiment", "analysis", "strategy",
        "solution", "problem", "challenge", "competition", "victory", "defeat", "success",
        "failure", "discipline", "patience", "confidence", "motivation", "inspiration",
        "dedication", "ambition", "perseverance", "determination", "opportunity", "potential",
        "capacity", "capability", "efficiency", "productivity", "organization", "management",
        "leadership", "communication", "negotiation", "collaboration", "cooperation",
        "responsibility", "accountability", "reputation", "integrity", "transparency",
        "credibility", "reliability", "stability", "flexibility", "adaptability",
        "sustainability", "environment", "ecosystem", "biodiversity", "pollution",
        "conservation", "recycling", "renewable", "climate", "atmosphere", "radiation",
        "electricity", "magnetism", "frequency", "wavelength", "vibration", "resonance",
        "amplitude", "algorithm", "database", "encryption", "authentication",
        "cybersecurity", "automation", "artificial", "simulation", "prediction",
        "probability", "statistics", "calculation", "measurement", "estimation",
        "optimization",

        // RARE / FUN / WORDLE STYLE
        "awkward", "cryptic", "zephyr", "quartz", "voyage", "whimsy", "glitch", "pixel", "matrix",
        "binary", "syntax", "kernel", "buffer", "cursor", "format", "module", "vector", "scalar",
        "random", "chaotic", "entropy", "paradox", "enigma", "obscure", "abstract", "concrete",
        "minimal", "complex", "dynamic", "static", "neutral", "variant", "element", "compound",
        "mixture", "reaction", "catalyst", "polymer", "crystal", "molecule", "isotope",
        "spectrum", "quantum", "neutron", "proton", "electron", "orbit", "galaxy", "nebula",
        "asteroid", "comet", "satellite", "telescope", "microscope", "organism", "mutation",
        "evolution", "adaptation", "instinct", "behavior", "cognition", "perception",
        "intuition", "awareness", "consciousness", "subconscious", "identity", "personality",
        "character", "attitude", "belief", "opinion", "perspective", "narrative", "metaphor",
        "symbol", "allegory", "irony", "satire", "humor", "sarcasm", "melody", "rhythm",
        "harmony", "tempo", "chord", "lyric", "verse", "chorus", "crescendo"
    ];

    const index = Math.floor(Math.random() * wordList.length)

    return wordList[index]
}