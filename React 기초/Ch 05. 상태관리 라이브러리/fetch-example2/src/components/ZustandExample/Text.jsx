// Zustand
// No Provider -> React와 완전 분리
// create -> useStore를 만들 수 있음 (자유도)
// compare 로직 -> 커스텀 가능
// memoizing selector -> 메모이제이션 with useCallback

import React from "react";
import create from "zustand";

const useStore = create((set) => ({
    fontSize: 14,
    increaseFontSize: () => set((state) => ({ fontSize: state.fontSize + 1 })),
    trigger: false,
    toggleTrigger: () => set((state) => ({ trigger: !state.trigger }), true),
}));

function FontLabel() {
    const {
        fontSize,
        increaseFontSize,
        fontSizeLabel,
        trigger,
        toggleTrigger,
    } = useStore(
        (state) => ({
            fontSize: state.fontSize,
            increaseFontSize: state.increaseFontSize,
            fontSizeLabel: state.fontSize + "px",
            trigger: state.trigger,
            toggleTrigger: state.toggleTrigger,
        }),
        (oldState, newState) => oldState.trigger === newState.trigger
    );

    return (
        <>
            <div style={{ fontSize }}>Current font size: {fontSizeLabel}</div>
            <button onClick={increaseFontSize}>size up</button>
            <button onClick={toggleTrigger}>
                toggle: {trigger.toString()}
            </button>
        </>
    );
}

export default function Text() {
    const fontSize = useStore((state) => state.fontSize);
    const increaseFontSize = useStore((state) => state.increaseFontSize);
    return (
        <>
            <p style={{ fontSize }}>This text will increase in size too.</p>
            <FontLabel />
        </>
    );
}
