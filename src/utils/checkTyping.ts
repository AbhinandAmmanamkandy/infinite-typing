export const checkTyping = (
    value: string,
    sentence: string
): boolean => {
    return sentence.startsWith(value);
};