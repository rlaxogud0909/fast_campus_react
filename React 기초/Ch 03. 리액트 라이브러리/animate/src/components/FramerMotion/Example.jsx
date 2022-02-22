// Framer -> Design + Frontend Tool
// Motion -> Animation 기능이 들어간 Component
// Variants -> Propagation / Orchestration
// Gestures / MotionVlaue -> 편의 기능들 제공

import React from "react";
import Keyframes from "./Keyframes";
import Scale from "./Scale";

export default function Example() {
    return (
        <div>
            <Keyframes />
            <div style={{ position: "absolute", top: 300, left: 300 }}>
                <Scale />
            </div>
        </div>
    );
}
