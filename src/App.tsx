import {useSentence} from "./hooks/useSentence.ts";
import {useEffect, useRef, useState} from "react";

const App = () => {
    const [typed, setTyped] = useState<string>("");
    const divRef = useRef<HTMLDivElement>(null);
    const {sentence, loading, fetchSentence} = useSentence();

    useEffect(() => {
        fetchSentence().then(() => {
        });
        divRef.current?.focus();
    }, []);

    const handleKeyDown = (e) => {
        const value: string = typed + e.key;
        if (sentence.startsWith(value)) {
            setTyped(value);
            if (value === sentence) {
                fetchSentence();
                setTyped("");
            }
        }
    }

    return (
        <div ref={divRef} className="flex items-center justify-center h-screen flex-col" tabIndex={0} onKeyDown={handleKeyDown}>
            {loading ? "Loading..." : (
                <p className="text-xl">
                    <span className="text-green-500">
                        {sentence.slice(0, typed.length)}
                    </span>
                    <span>
                        {sentence.slice(typed.length)}
                    </span>
                </p>
            )}
        </div>
    );
};

export default App;