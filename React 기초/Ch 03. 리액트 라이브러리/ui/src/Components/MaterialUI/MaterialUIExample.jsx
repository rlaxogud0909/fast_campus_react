// Material Design -> 구글이 선도한 디자인 시스템
// 다양한 서포트 -> Example Project / Design Tools
// FAQ -> 실무과정에서 마주할 이슈들 정리
// Layout / Theme -> 체계화 된 시스템

//api 구성 -> Components / api / Demo
// makeStyles -> 컴포넌트의 구조를 관장
// Virtual List -> Virtual scroll
// System -> 순수한 커스텀 컴포넌트 생성 가능

import React from "react";
import ButtonExample from "./ButtonExample";
import CenteredGrid from "./CenteredGrid";
import CheckboxLabels from "./CheckboxLabels";
import IconLabelButtons from "./IconLabelButtons";
import TemporaryDrawer from "./TemporaryDrawer";
import VirtualizedList from "./VirtualizedList";

export default function MaterialUIExample() {
    return (
        <div>
            <VirtualizedList />
            <TemporaryDrawer />
            <CheckboxLabels />
            <IconLabelButtons />
            <CenteredGrid />
            <ButtonExample />
        </div>
    );
}
