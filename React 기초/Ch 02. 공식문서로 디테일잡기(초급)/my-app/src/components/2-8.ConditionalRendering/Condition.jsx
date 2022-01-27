// 조건부 렌더링
// if -> if(condition){return A} else {return B}
// && -> condition && A, falsy 주의
// 삼항연산자 -> condition ? A : B
// 아예 안그리고 싶은 경우 -> return null;
import React from 'react';


function UserGreeting(props) {
    // JavaScript에서 true && expression은 항상 expression으로 평가되고 false && expression은 항상 false로 평가됩니다.
    // 따라서 && 뒤의 엘리먼트는 조건이 true일때 출력이 됩니다. 조건이 false라면 React는 무시하고 건너뜁니다.
    // 0은 false이기 때문에 Boolean()를 붙여주거나 아래와 같이 코드를 만들어줘야한다.
    return <h1>{props.name && `${props.name} ,`} Welcome {props.count ? `It's ${props.count} times` : null}</h1>
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>
}


function Greeting(props) {
    // if (props.isLoggedIn) {
    //     return <UserGreeting name="jimmy" count={0} />
    // }
    // return <GuestGreeting />
    return props.isLoggedIn ? <UserGreeting name="jimmy" count={0} /> : <GuestGreeting />
}

export default function Condition() {

    const isLoggedIn = true;

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
        </div>
    );
}
