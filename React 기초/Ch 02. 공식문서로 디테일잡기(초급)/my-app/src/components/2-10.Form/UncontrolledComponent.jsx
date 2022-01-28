// Uncontrolled Component -> form element 자체의 내부 상태 활용
// defaultValue, ref -> 기본값 / value 확인

import React, { useRef} from 'react';

export default function UncontrolledComponent() {
    const fileInputRef = useRef(null);
    function handleSubmit(event) {
        event.preventDefault();
        alert(`Selected file - ${fileInputRef.current.files[0].name}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Upload file:
                <input type="file" ref={fileInputRef} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}
