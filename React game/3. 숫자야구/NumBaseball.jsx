import React, { Component } from "react";
import Try from "./Try";

function getNumbers() {
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i++) {
        const chosen = candidate.splice(
            Math.floor(Math.random() * (9 - i)),
            1
        )[0];
        array.push(chosen);
    }
    return array;
}
class NumBaseball extends Component {
    state = {
        result: "",
        value: "",
        answer: getNumbers(),
        tries: [],
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.value === this.state.answer.join("")) {
            this.setState((prevState) => {
                return {
                    result: "홈런",
                    tries: [
                        ...prevState.tries,
                        { try: this.state.value, result: "홈런" },
                    ],
                };
            });
            alert("게임을 다시 시작합니다");
            this.setState({
                value: "",
                answer: getNumbers(),
                tries: [],
            });
        } else {
            const answerArray = this.state.value
                .split("")
                .map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (this.state.tries.length >= 9) {
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(
                        ","
                    )}였습니다.`,
                });
                alert("게임을 다시 시작합니다");
                this.setState({
                    value: "",
                    answer: getNumbers(),
                    tries: [],
                });
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === this.state.answer[i]) {
                        strike += 1;
                    } else if (this.state.answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState((prevState) => {
                    return {
                        tries: [
                            ...prevState.tries,
                            {
                                try: this.state.value,
                                result: `${strike} 스크라이크, ${ball} 볼입니다`,
                            },
                        ],
                        value: "",
                    };
                });
            }
        }
    };

    onChangeInput = (e) => {
        console.log(this.state.answer);
        e.preventDefault();
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input
                        maxLength={4}
                        value={this.state.value}
                        onChange={this.onChangeInput}
                    />
                    <button>입력</button>
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {this.state.tries.map((v, i) => {
                        return <Try key={`${i + 1}차 시도:`} tryInfo={v} />;
                    })}
                </ul>
            </>
        );
    }
}

export default NumBaseball;
