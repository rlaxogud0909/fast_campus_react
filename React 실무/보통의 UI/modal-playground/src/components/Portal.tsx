import React from "react";
import { createPortal } from "react-dom";

// createPortal
// 첫 번째 인자로(children)는 element, 문자열, 혹은 fragment와 같은 렌더링 할 수 있는 react element 입니다.
// 두 번째 인자(container)는 DOM element 입니다.

interface Props {
    selector?: string;
}

const Portal: React.FC<Props> = ({ children, selector }) => {
    const rootElement = selector && document.getElementById(selector);

    return <>{rootElement ? createPortal(children, rootElement) : children}</>;
};

export default Portal;
