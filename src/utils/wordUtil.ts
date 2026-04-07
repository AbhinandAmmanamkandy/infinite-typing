const words = [
    "apple", "banana", "cat", "dog", "elephant", "fish", "grape", "house", "ice", "jungle",
    "kite", "lion", "monkey", "night", "orange", "pencil", "queen", "river", "sun", "tree",
    "umbrella", "violin", "water", "xray", "yacht", "zebra", "cloud", "dream", "earth", "fire",
    "gold", "heart", "island", "jacket", "key", "leaf", "mountain", "nest", "ocean", "plant",
    "quiet", "road", "stone", "train", "unity", "valley", "wind", "xenon", "yellow", "zone",
    "bread", "chair", "desk", "energy", "flower", "glass", "hill", "idea", "juice", "knife",
    "lamp", "mirror", "noise", "object", "paper", "quick", "rain", "salt", "table", "user",
    "voice", "window", "xylophone", "youth", "zero", "bird", "circle", "dance", "engine", "field",
    "game", "horse", "image", "jewel", "king", "light", "music", "number", "open", "power",
    "quest", "rock", "star", "time", "unit", "value", "world", "year", "zen", "alpha"
];


export const getSentence = (length: number = 3): string => {
    const sentence = [];
    for (let i = 0; i < length; i++) {
        sentence.push(words[Math.floor(Math.random() * words.length)]);
    }
    return sentence.join(" ");
}