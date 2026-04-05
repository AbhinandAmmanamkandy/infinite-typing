import {useSentence} from "./hooks/useSentence.ts";
import {useEffect, useState} from "react";

const App = () => {
    const [typed, setTyped] = useState<string>();
    const {sentence, loading, fetchSentence} = useSentence();

    useEffect(() => {
        fetchSentence().then(() => {
        });
    }, []);

    const handleKeyDown = (e) => {
        const value: string = typed + e.key;
        if (sentence.startsWith(value)) {
            setTyped(value);
        }
    }

    return (
        <div className="flex items-center justify-center h-screen flex-col" tabIndex={0} onKeyDown={handleKeyDown}>
            {loading ? "Loading..." : sentence}
        </div>
    );
};

export default App;