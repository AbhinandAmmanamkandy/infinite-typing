import {getSentence} from "./utils/wordUtil.ts";
import {type ChangeEvent, type RefObject, useEffect, useRef, useState} from "react";

export default function App() {
    const words = 3;
    const [typed, setTyped] = useState("");
    const [sentence, setSentence] = useState("");
    const inputRef: RefObject<HTMLInputElement | null> = useRef<HTMLInputElement | null>(null);

    const textRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect((): void => {
        const init: () => void = (): void => {
            setSentence(getSentence(words));
            inputRef.current?.focus();
        };
        init();
    }, []);

    useEffect((): void => {
        if (textRef.current) {
            setWidth(textRef.current.offsetWidth);
        }
    }, [sentence]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value: string = e.currentTarget.value;
        if (
            value.length <= sentence.length &&
            (value === "" || value[0] !== " ")
        ) {
            setTyped(value);
        }
        if (value === sentence) {
            setSentence(getSentence(words));
            setTyped("");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen text-4xl whitespace-nowrap">
            <div ref={textRef} className="">
                {sentence.split("").map((char: string, index: number) => {
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
            <input ref={inputRef} type="text" onChange={handleChange} style={{width}} value={typed}
                   className="outline-none focus:outline-none border-none focus:border-none"/>
        </div>
    );
}