import { useEffect, useRef, useState } from "react";

const getSentence = async (): Promise<string> => {
    try {
        const res = await fetch("https://random-word-api.herokuapp.com/word?number=2");
        const data = await res.json();
        return data.join(" ");
    } catch {
        return "";
    }
};

export default function App() {
    const [sentence, setSentence] = useState("");
    const [typed, setTyped] = useState("");
    const [loading, setLoading] = useState(true);

    const nextRef = useRef("");
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const init = async () => {
            const first = await getSentence();
            nextRef.current = await getSentence();

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