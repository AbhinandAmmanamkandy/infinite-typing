import { useEffect, useRef, useState } from "react";

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
    const [sentence, setSentence] = useState("");
    const [typed, setTyped] = useState("");
    const [loading, setLoading] = useState(true);

    const nextRef = useRef("");
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const init = () => {
            const first = getSentence();
            nextRef.current = getSentence();

            setSentence(first);
            setLoading(false);
            divRef.current?.focus();
        };

        init();
    }, []);

    const handleKeyDown = async (e: React.KeyboardEvent) => {
        const value = typed + e.key;

        if (!sentence.startsWith(value)) return;

        if (value === sentence) {
            setTyped("");
            setSentence(nextRef.current);
            nextRef.current = await getSentence();
        } else {
            setTyped(value);
        }
    };

    return (
        <div
            ref={divRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="flex items-center justify-center h-screen text-4xl flex-col"
        >
            {!loading && (
                <p>
                    <span className="text-green-500">
                        {sentence.slice(0, typed.length)}
                    </span>
                    <span>{sentence.slice(typed.length)}</span>
                </p>
            )}
        </div>
    );
}