import {useEffect, useState} from "react";

const App = () => {
    const [sentence, setSentence] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const callAPI = async () => {
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
        callAPI()
    }, [])
    return (
        <div>
            { loading ? "Loading..." : sentence }
        </div>
    );
};

export default App;