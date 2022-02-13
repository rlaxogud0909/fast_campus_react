import React from "react";
import ButtonExample from "./ButtonExample";
import { Page } from "react-onsenui";
import ActionSheetExample from "./ActionSheetExample";
import CheckBoxExample from "./CheckBoxExample";
import FabExample from "./FabExample";
import ListExample from "./ListExample";
import ProgressExample from "./ProgressExample";
import AlertExample from "./AlertExample";

export default function OnsenUIExample() {
    return (
        <Page>
            <AlertExample />
            <ProgressExample />
            <ListExample />
            <FabExample />
            <CheckBoxExample />
            <ActionSheetExample />
            <ButtonExample />
        </Page>
    );
}
