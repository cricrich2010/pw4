import React from "react";

export function Token(props) {
    let displayToken = "Null";
    let cssClass = "";
    if (props.displayToken === 0) {
        displayToken = "Empty";
        cssClass = "noToken";
    }
    if (props.displayToken === 1) {
        displayToken = "Red";
        cssClass = "redToken";
    }
    if (props.displayToken === 2) {
        displayToken = "Yello";
        cssClass = "yelloToken";
    }

    return <div className={cssClass}>{displayToken}</div>;
}