import React, { useMemo } from "react";
import { keyframes, css } from "@emotion/react";
import styled from "@emotion/styled";
//rops로 지정할 수 있는 변수들의 이름과 형태까지 지정해 줄 수 있어서 자식 컴포넌트에 Props를 넘겨줄 때 일어나는 문제점을 미리
// ?: -> 받을 수도 있고 받지 않아도될 상황
interface Props {
    width?: number;
    height?: number;
    circle?: boolean; // 원형 스켈레톤
    rounded?: boolean; // 둥근 모서리
    count?: number; // inline 으로 선언 시, 글자 수
    unit?: string; // width, height 단위
    animation?: boolean; // 애니메이션 유무
    color?: string; // 스켈레톤 색상
    style?: React.CSSProperties; //추가
}

// opacity: 불투명도
// 0% -> 애니메이션 시작 프레임
// 100% -> 애니메이션 마지막 프레임
const pulseKeyframe = keyframes`
  0% {
    opacity: 1; 
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const pulseAnimation = css`
    animation: ${pulseKeyframe} 1.5s ease-in-out 0.5s infinite;
`;

const Base = styled.span<Props>`
    ${({ color }) => color && `background-color: ${color}`};
    ${({ rounded }) => rounded && "border-radius: 8px"};
    ${({ circle }) => circle && "border-radius: 50%"};
    ${({ width, height }) => (width || height) && "display: block"};
    ${({ animation }) => animation && pulseAnimation};
    width: ${({ width, unit }) => width && unit && `${width}${unit}`};
    height: ${({ height, unit }) => height && unit && `${height}${unit}`};
`;

const Content = styled.span`
    opacity: 0;
`;

const Skeleton: React.FC<Props> = ({
    animation = true,
    children,
    width,
    height,
    circle,
    rounded,
    count,
    unit = "px",
    color = "#F4F4F4",
    style,
}) => {
    const content = useMemo(
        () => [...Array({ length: count })].map(() => "-").join(""),
        [count]
    );

    return (
        <Base
            style={style}
            rounded={rounded}
            circle={circle}
            width={width}
            height={height}
            animation={animation}
            unit={unit}
            color={color}
        >
            <Content>{children || content}</Content>
        </Base>
    );
};

export default Skeleton;
