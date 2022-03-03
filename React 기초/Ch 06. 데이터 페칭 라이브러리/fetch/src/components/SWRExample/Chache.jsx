import React from "react";
import { SWRConfig, useSWRConfig } from "swr";
import { Avatar } from "./Profile";

export default function Chache() {
    return (
        <SWRConfig>
            <Page />
        </SWRConfig>
    );
}

const Page = () => {
    const { cache } = useSWRConfig();
    return (
        <div>
            <Avatar id={1212} />
            <button
                onClick={() => {
                    console.log(
                        `check: ${JSON.stringify(cache.get("/api/user/1212"))}`
                    );
                }}
            >
                check
            </button>
        </div>
    );
};
