import {useEffect, useState} from "react";

const App = () => {
    const [sentence, setSentence] = useState("");

    useEffect(() => {
        const callAPI = async () => {
            try {
                const res = await fetch("https://api.quotable.io/random");
                const data = await res.json();
                const content = data.content;
                setSentence(content);
            } catch (err) {
                console.error(err);
            }
        }
        callAPI()
    }, [])
    return (
        <div>
            { sentence }
        </div>
    );
};

export default App;