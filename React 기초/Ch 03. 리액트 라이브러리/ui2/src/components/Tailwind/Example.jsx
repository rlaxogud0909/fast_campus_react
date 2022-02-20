// Tailwind CSS
// 컴포넌트 -> 자체를 제공하진 않음(유료)
// class -> 스타일 요소를 모두 줌
// Tiny -> 빌드할때는 사용하는  class만
// Intelli Sense -> vs code extension 제공

// Utility Frist -> 클래스 이름 생성x / css 추가 x (이미 만들어지는 것을 그냥 쓰면됨)
// 다크모드 -> 대응 용이(media, class)
// Customize -> configuration 차원에서
// 대부분의 css -> 커버함(but 예제는 아쉽)
import React from "react";
import Background from "./Background";
import Button from "./Button";
import Message from "./Message";

export default function Example() {
    return (
        <div>
            <Message />
            <Button />
            <Background />
        </div>
    );
}
