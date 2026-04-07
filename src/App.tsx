import {getSentence} from "./utils/wordUtil.ts";
import {type ChangeEvent, useEffect, useRef, useState} from "react";

export default function App() {
    const words = 1;
    const [typed, setTyped] = useState("");
    const [sentence, setSentence] = useState("");
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const init = () => {
            setSentence(getSentence(words));
            inputRef.current?.focus();
        };
        init();
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTyped(e.currentTarget.value);
        if (e.currentTarget.value === sentence) {
            setSentence(getSentence(words));
            setTyped("");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen text-4xl whitespace-nowrap">
            <div className="">
                {sentence.split("").map((char, index) => {
                    let color = "";
                    if (index < typed.length) {
                        if (typed[index] === char) {
                            color += "text-green-500";
                        } else {
                            color += "text-red-500";
                        }
                    }
                    return (
                        <span key={index} className={color}>
                            {char}
                        </span>
                    );
                })}
            </div>
            <input ref={inputRef} type="text" onChange={handleChange} value={typed}/>
        </div>
    );
}