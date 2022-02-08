// &(나 자신)는 가상 엘리머트 / 가상 선택자
// Global style -> 전역 스타일
//attrs -> props addition
// key frames / ThemeProvider -> Animation / Theme

import React from "react";
import styled, { keyframes } from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${(props) => (props.primary ? "palevioletred" : "white")};
    color: ${(props) => (props.primary ? "white" : "palevioletred")};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;
const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`;

const ReversedButton = (props) => (
    <Button {...props} children={props.children.split("").reverse()} />
);

const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
    color: blue;

    &:hover {
        color: red; // <Thing> when hovered
    }

    & ~ & {
        background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
    }

    & + & {
        background: lime; // <Thing> next to <Thing>
    }

    &.something {
        background: orange; // <Thing> tagged with an additional CSS class ".something"
    }

    .something-else & {
        border: 1px solid; // <Thing> inside another element labeled ".something-else"
    }
`;

const Input = styled.input.attrs((props) => ({
    type: "text",
    size: props.size || "1em",
}))`
    border: 2px solid palevioletred;
    margin: ${(props) => props.size};
    padding: ${(props) => props.size};
`;

// Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input).attrs({
    type: "password",
})`
    // similarly, border will override Input's border
    border: 2px solid aqua;
`;

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`;

export default function StyledComponentExample() {
    // Use Title and Wrapper like any other React component – except they're styled!
    return (
        <>
            <Rotate>&lt; 💅🏾 &gt;</Rotate>
            <br />
            <Input placeholder="A bigger text input" size="2em" />
            <br />
            {/* Notice we can still use the size attr from Input */}
            <PasswordInput placeholder="A bigger password input" size="2em" />
            {/* <>
                <Thing>Hello world!</Thing>
                <Thing>How ya doing?</Thing>
                <Thing className="something">The sun is shining...</Thing>
                <div>Pretty nice day today.</div>
                <Thing>Don't you think?</Thing>
                <div className="something-else">
                    <Thing>Splendid.</Thing>
                </div>
            </> */}
            {/* <Wrapper>
                <Title>Hello World!</Title>
            </Wrapper>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
            <TomatoButton>Tomato</TomatoButton>
            <br />
            <Button>Normal Button</Button>
            <Button as="a" href="#">
                Link with Button styles
            </Button>
            <TomatoButton as="a" href="#">
                Link with Tomato Button styles
            </TomatoButton>
            <br />
            <Button>Normal Button</Button>
            <Button as={ReversedButton}>
                Custom Button with Normal Button styles
            </Button> */}
        </>
    );
}
