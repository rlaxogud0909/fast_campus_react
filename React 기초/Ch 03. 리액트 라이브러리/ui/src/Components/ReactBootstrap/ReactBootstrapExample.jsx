// 리엑트 부트스트랩
// 반응형 웹 -> xs / md / lg
// Sass -> @import 해서 쓸 수 있음
// 익숙한 UI -> 부트스트랩을 그대로 가져옴

import React from "react";
import AlertDismissible from "./AlertDismissible";
import ButtonExample from "./ButtonExample";
import CarouselExample from "./CarouselExample";
import GridExample from "./GridExample";
import MyModalWithGrid from "./MyModalWithGrid";

export default function ReactBootstrapExample() {
    return (
        <div>
            <MyModalWithGrid />
            <CarouselExample />
            <ButtonExample />
            <br />
            <br />
            <AlertDismissible />
            <GridExample />
        </div>
    );
}
