import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
export default function ButtonExample() {
    return (
        <>
            <ButtonGroup size="lg" className="mb-2">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
            <br />
            <ButtonGroup className="mb-2">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
            <br />
            <ButtonGroup size="sm">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </>
    );
}
