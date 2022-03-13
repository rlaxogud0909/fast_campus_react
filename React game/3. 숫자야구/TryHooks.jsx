import React, { memo } from "react";

// const TryHook = (props) => {
// };

// props 구조 분해
const TryHook = memo(({ tryInfo }) => {
    return (
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    );
});

export default TryHook;
