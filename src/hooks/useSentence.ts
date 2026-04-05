import {useState} from "react";

export const useSentence = () => {
    const [sentence, setSentence] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchSentence = async () => {
        setLoading(true);
        try {
            const res = await fetch("https://random-word-api.herokuapp.com/word?number=2");
            const data = await res.json();
            setSentence(data.join(" "));
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return { sentence, loading, fetchSentence };
}