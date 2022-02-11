import React from "react";
import { Button } from "react-onsenui";

export default function ButtonExample() {
    const handleClick = () => {
        alert("pressed");
    };
    return (
        <>
            <Button modifier="large--cta" onClick={handleClick}>
                Tap Me
            </Button>
            <br />
            <br />
            <Button disabled={true} onClick={handleClick}>
                disabled
            </Button>
            <br />
            <br />
            <Button modifier="outline" onClick={handleClick}>
                outline
            </Button>
            <br />
            <br />
            <Button modifier="light" onClick={handleClick}>
                light
            </Button>
            <br />
            <br />
            <Button modifier="quiet" onClick={handleClick}>
                quiet
            </Button>
            <br />
            <br />
            <Button modifier="cta" onClick={handleClick}>
                cta
            </Button>
            <br />
            <br />
            <Button modifier="large-quiet" onClick={handleClick}>
                large-quiet
            </Button>
            <br />
            <br />
            <Button modifier="material" onClick={handleClick}>
                material
            </Button>
            <br />
            <br />
            <Button modifier="material--flat" onClick={handleClick}>
                flat
            </Button>
        </>
    );
}
