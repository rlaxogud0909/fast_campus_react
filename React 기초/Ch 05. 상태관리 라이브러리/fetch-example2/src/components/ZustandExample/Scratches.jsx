import React, { useEffect, useRef } from "react";
import create from "zustand";

const useStore = create((set) => ({
    scratches: 0,
    addScratches: () => set((state) => ({ scratches: state.scratches + 1 })),
}));

export default function Scratches() {
    // const scratches = useStore((state) => state.scratches);
    const scratchRef = useRef(useStore.getState().scratches);

    const addScratches = useStore((state) => state.addScratches);

    useEffect(() => {
        useStore.subscribe(
            (scratches) => {
                scratchRef.current = scratches;
                console.log(scratches);
                console.log(`scratchRef: ${scratchRef.current}`);
            },
            (state) => state.scratches
        );
    }, []);

    return (
        <div>
            {scratchRef.current}
            <br />
            <button onClick={addScratches}>Add scratches</button>
        </div>
    );
}
