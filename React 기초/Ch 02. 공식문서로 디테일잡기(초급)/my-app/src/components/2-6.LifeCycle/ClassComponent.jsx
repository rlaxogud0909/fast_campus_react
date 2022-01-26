import React, { Component } from 'react';

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = { date: new Date() };
        //바인딩을 사용하는 이유
        // 함수 안에서 클래스를 직접 접근하고 싶다할때 사용
        // 하지만 이 함수를 엘오?? function으로 바꾸면 바인딩을 안해도됨
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate () {
        console.log("componentDidUpdate");
    }

    componentWillUnmount () {
        console.log("componentWillUnmount");
        clearInterval(this.timerID);
    }

    tick() {
        console.log("tick");
        this.setState({ date: new Date() });
    }

    // handelClick = () => {} 엘오 fucntion
    handleClick() {
        alert(this.state.date);
    }

    render() {
        console.log("render");
        return (
            <div>
                <h1 onClick={this.handleClick}>Hello, world!</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}
