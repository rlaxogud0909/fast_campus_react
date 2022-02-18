// Material Design -> 구글이 선도한 디자인 시스템
// 다양한 서포트 -> Example Project / Design Tools
// FAQ -> 실무과정에서 마주할 이슈들 정리
// Layout / Theme -> 체계화 된 시스템

import React from "react";
import ButtonExample from "./ButtonExample";
import CenteredGrid from "./CenteredGrid";

export default function MaterialUIExample() {
    return (
        <div>
            <CenteredGrid />
            <ButtonExample />
        </div>
    );
}
