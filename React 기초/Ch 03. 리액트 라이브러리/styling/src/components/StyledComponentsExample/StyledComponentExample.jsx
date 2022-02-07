import React from "react";
import styled from "styled-components";

export default function StyledComponentExample() {
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

    // Use Title and Wrapper like any other React component – except they're styled!
    return (
        <>
            <Wrapper>
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
            </Button>
        </>
    );
}
