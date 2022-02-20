import React from "react";

export default function background() {
    return (
        <div style={{ height: 100 }}>
            <div
                style={{ height: 100 }}
                className="bg-purple-600 bg-opacity-100 ..."
            ></div>
            <div
                style={{ height: 100 }}
                className="bg-purple-600 bg-opacity-75 ..."
            ></div>
            <div
                style={{ height: 100 }}
                className="bg-purple-600 bg-opacity-50 ..."
            ></div>
            <div
                style={{ height: 100 }}
                className="bg-purple-600 bg-opacity-25 ..."
            ></div>
            <div
                style={{ height: 300 }}
                className="bg-purple-600 bg-opacity-0 ..."
            ></div>
        </div>
    );
}
