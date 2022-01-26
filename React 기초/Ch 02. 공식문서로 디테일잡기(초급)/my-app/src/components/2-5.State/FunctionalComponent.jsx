// 함수형 컴포넌트 

// 컴포넌트 내의 상태 -> 자신의 출력값을 변경
// props는 수정할 수 없지만 너의 컴포넌트의 상태를 수정하고 싶으면 state를 써라
// class component는 state liecyle(componentDidMount, componentWillUnmount 등) 이 있음
// Functional component는 훅으로 관리
// 유의사항: 직적 수정x/비동기적일 수 있음

import React, {useEffect, useState} from 'react';

export default function FunctionalComponent() {
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    }

    // 클래스형의 componentDidMount에 해당
    // 빈 배열([])일때 시작할때 1번 불림
    useEffect(() => {
        const interval = setInterval(() => tick(), 1000);
        
        // 컴포넌트 클린업 (마무리때)
        // 클래스형의 componentWillUnmount에 해당
        return () => {
            clearInterval(interval)
        }

    }, []);

    return (
        <div>
          <h1>Hello, world! It's Functional</h1>
          <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
      );
}
