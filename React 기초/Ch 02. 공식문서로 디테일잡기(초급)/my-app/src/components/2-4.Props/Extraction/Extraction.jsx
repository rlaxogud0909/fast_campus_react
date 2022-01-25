// 추출을 하는 이유는 재활용성
// Props란 컴포넌트에 전달되는 단일 객체
// 순수 처럼 동작(Props) 자체를 수정해서는 안됨
// 컴포넌트 합성이란 여러 컴포넌트를 모은 것
// 컴포넌트 추출이란 여러곳에서 사용되거나 / 복잡한 경우 유용하다.

import React from 'react';

function formatDate(data) {
    return data.toLocaleDateString();
}

// Avatar 추출
function Avatar(props) {
    return <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
}

// UserInfo 추출
function UserInfo(props) {
    return (
        <div className="UserInfo">
        {/* Avatar 추출 */}
        <Avatar user={props.user}/>
        <div className="UserInfo-name">{props.user.name}</div>
    </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            {/* userinfo 추출 */}
            <UserInfo user={props.author} />
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">{formatDate(props.date)}</div>
        </div>
    )
}

const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
        name: "HelloKitty",
        avatarUrl: "https://placekitten.com/g/64/64",
    },
};

export default function Extraction() {
    return (
        <Comment date={comment.date} text={comment.text} author={comment.author} />
    );
}
