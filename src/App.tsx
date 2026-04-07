import {useEffect, useRef, useState} from "react";

const getSentence = () => {
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
    return words.sort(() => 0.5 - Math.random()).slice(0, 3).join(" ");
};

export default function App() {
    const [typed, setTyped] = useState("");
    const [sentence, setSentence] = useState("");
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const init = () => {
            setSentence(getSentence());
            inputRef.current?.focus();
        };

        init();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTyped(e.currentTarget.value);
        if (e.currentTarget.value === sentence) {
            setSentence(getSentence());
            setTyped("");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen text-4xl whitespace-nowrap">
            <div className="">
                {sentence.split("").map((char, index) => {
                    let color = "";
                    if (index < typed.length) {
                        if (typed[index] === char) {
                            color += "text-green-500";
                        } else {
                            color += "text-red-500";
                        }
                    }
                    return (
                        <span key={index} className={color}>
                            {char}
                        </span>
                    );
                })}
            </div>
            <input ref={inputRef} type="text" onChange={handleChange} value={typed}/>
        </div>
    );
}