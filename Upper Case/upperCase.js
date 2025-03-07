export function upperCaseFirst(text){
    return (text[0] !== undefined) ? text[0].toUpperCase() + text.slice(1, text.length) : "";
}