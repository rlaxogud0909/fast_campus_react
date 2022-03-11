const React = require("react");
const { useState, useRef } = React;

const WordRealyHook = () => {
    const [word, setWord] = useState("첫 단어");
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const inputRef = useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (word[word.length - 1] === value[0]) {
            setResult("O");
            setWord(value);
            setValue("");
        } else {
            setResult("X");
            setValue("");
        }
    };

    return (
        <>
            <h1>끝말잇기</h1>
            <div>단어: {word}</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} value={value} onChange={onChangeInput} />
                <button>입력</button>
            </form>
            <div>{result}</div>
        </>
    );
};

module.exports = WordRealyHook;
