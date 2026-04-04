import {useSentence} from "./hooks/useSentence.ts";
import {checkTyping} from "./utils/checkTyping.ts";
import {type ChangeEvent, useEffect, useState} from "react";

const App = () => {
    const [typed, setTyped] = useState("");
    const {sentence, loading, fetchSentence} = useSentence();

    useEffect(() => {
        fetchSentence();
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (checkTyping(value, sentence)) {
            setTyped(value);
        }

        if (value === sentence) {
            setTyped("");
            fetchSentence();
        }
    };
    return (
        <div>
            {loading ? "Loading..." : sentence}
            <br/>
            <input
                type="text"
                value={typed}
                onChange={handleChange}/>
        </div>
    );
};

export default App;