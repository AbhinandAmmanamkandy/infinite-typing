import {useSentence} from "./hooks/useSentence.ts";
import {useEffect} from "react";

const App = () => {
    const {sentence, loading, fetchSentence} = useSentence();

    useEffect(() => {
        fetchSentence().then(() => {
        });
    }, [fetchSentence]);

    return (
        <div className="flex items-center justify-center h-screen flex-col">
            {loading ? "Loading..." : sentence}
        </div>
    );
};

export default App;