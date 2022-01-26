// 합성 이벤트 -> 인터페이스는 같지만 직접 대응되지 않음
// 버블링: 자식으로 부터 부모에게 올라가는 것
// 캡처링: 부모로부터 자식이 언제 이벤트가 있는지 캡쳐해보는 것
// return false 경우 e.preventDefault() 해줘야함

import React from 'react';

export default function Event() {
    const handleButtonClick = (e) => {
        console.dir(e);
        console.log("handleButtonClick");
    }
    const handleClickCapture = () => {
        console.log("handleClickCapture");
    }

    const handleClickCapture2 = () => {
        console.log("handleClickCapture2");
    }
    const handleClickBubble = () => {
        console.log("handleClickBubble");
    }

    return (
        // 캡처1-> 캡처2 -> 버튼의 onclick -> 그 부모의 onclick
        <div onClickCapture={handleClickCapture}>
            <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
                <button onClick={handleButtonClick}>Button</button>
            </div>
        </div>
    );
}
