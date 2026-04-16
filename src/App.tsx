import {getSentence} from "./utils/wordUtil.ts";
import {type ChangeEvent, type RefObject, useEffect, useRef, useState} from "react";

export default function App() {
    const words = 3;
    const [typed, setTyped] = useState("");
    const [sentence, setSentence] = useState("");
    const inputRef: RefObject<HTMLInputElement | null> = useRef<HTMLInputElement | null>(null);

    useEffect((): void => {
        const init: () => void = (): void => {
            setSentence(getSentence(words));
            inputRef.current?.focus();
        };
        init();
    }, []);

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
        <div className="flex flex-col items-center justify-center h-screen text-lg sm:text-2xl md:text-3xl lg:text-4xl px-4">
            <div className="w-full max-w-[90vw] sm:max-w-md text-center wrap-break-word">
                {sentence.split("").map((char: string, index: number) => {
                    let color = "";
                    if (index < typed.length) {
                        if (typed[index] === char) {
                            color = "text-green-500";
                        } else {
                            color = "text-red-500";
                        }
                    }
                    return (
                        <span key={index} className={color}>
                            {char}
                        </span>
                    );
                })}
            </div>
            <input
                ref={inputRef}
                type="text"
                onChange={handleChange}
                value={typed}
                className="w-full max-w-[90vw] sm:max-w-md mt-4 text-center outline-none border-none"
            />
        </div>
    );
}