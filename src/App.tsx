import {type ChangeEvent, useEffect, useState} from "react";

const App = () => {
    const [typed, setTyped] = useState("");
    const [sentence, setSentence] = useState("");
    const [loading, setLoading] = useState(false);

    const callAPI = async (): Promise<void> => {
        try {
            const res = await fetch("https://api.quotable.io/random");
            const data = await res.json();
            const content = data.content;
            setSentence(content);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        callAPI()
    }, [])
    const checkTyped = (e: ChangeEvent<HTMLInputElement>) => {
        if (sentence === e.currentTarget.value) {
            callAPI();
            setTyped("");
            return;
        }
        if (sentence[e.currentTarget.value.length - 1] === e.currentTarget.value[e.currentTarget.value.length - 1]) {
            setTyped(e.target.value)
        }
    }
    return (
        <div>
            {loading ? "Loading..." : sentence}
            <br/>
            <input
                type="text"
                value={typed}
                onChange={checkTyped}/>
        </div>
    );
};

export default App;