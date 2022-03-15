import React, { useState, useRef } from "react";

const ResponseCheckHook = () => {
    const [state, setState] = useState("waiting");
    const [message, setMessage] = useState("클릭해서 시작하세요");
    const [result, setResult] = useState([]);

    // useState는 바뀔때 retrun이 다시 실행되지만
    // useRef는 바뀌더라도 다시 실행되지 않는다.
    // 사용: 값은 바뀌긴하지만 화면에 영향이 안미칠때
    const timeout = useRef(null);
    const startTime = useRef();
    const endTime = useRef();

    const onClickScreen = () => {
        if (state === "waiting") {
            setState("ready");
            setMessage("초록색이 되면 클릭하세요");
            timeout.current = setTimeout(() => {
                setState("now");
                setMessage("지금 클릭");
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);
        } else if (state === "ready") {
            clearTimeout(timeout.current);
            setState("waiting");
            setMessage("너무성급하시군요! 초록색이 된 후에 클릭하세요");
        } else if (state === "now") {
            endTime.current = new Date();
            setState("waiting");
            setMessage("클릭해서 시작하세요");
            setResult((prevState) => {
                return [...prevState, endTime.current - startTime.current];
            });
        }
    };

    const renderAverage = () => {
        return result.length === 0 ? null : (
            <div>
                평균시간: {result.reduce((a, c) => a + c) / result.length}ms
            </div>
        );
    };

    return (
        <>
            <div id="screen" className={state} onClick={onClickScreen}>
                {message}
            </div>
            {renderAverage()}
        </>
    );
};

export default ResponseCheckHook;
