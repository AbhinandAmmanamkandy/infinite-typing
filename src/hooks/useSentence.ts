import {useState} from "react";

export const useSentence = () => {
    const [sentence, setSentence] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchSentence = async () => {
        setLoading(true);
        try {
            const res = await fetch("https://api.quotable.io/random");
            const data = await res.json();
            setSentence(data.content);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return { sentence, loading, fetchSentence };
}