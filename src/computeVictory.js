import React from "react";


export function isVictory(player, gameGrid) {
    //receive boolean, convert to corresponding player number
    player = player ? 1 : 2
    //check collumn
    for (let col = 0; col < 7; col++) {
        for (let lin = 0; lin < 3; lin++) {
            if (gameGrid[col][lin] === player
                && gameGrid[col][lin + 1] === player
                && gameGrid[col][lin + 2] === player
                && gameGrid[col][lin + 3] === player) {
                console.log("victory collumn", col, "lin", lin)
                return true
            }
        }
    }
    //check for row
    for (let col = 0; col < 4; col++) {
        for (let lin = 0; lin < 6; lin++) {
            if (gameGrid[col][lin] === player
                && gameGrid[col + 1][lin] === player
                && gameGrid[col + 2][lin] === player
                && gameGrid[col + 3][lin] === player) {
                console.log("victory row", col, "lin", lin)
                return true
            }
        }
    }
    //check for diagonal right
    for (let col = 0; col < 4; col++) {
        for (let lin = 0; lin < 3; lin++) {
            if (gameGrid[col][lin] === player
                && gameGrid[col + 1][lin + 1] === player
                && gameGrid[col + 2][lin + 2] === player
                && gameGrid[col + 3][lin + 3] === player) {
                console.log("victory diagonal right", col, "lin", lin)
                return true
            }
        }
    }
    //check for diagonal left
    for (let col = 3; col < 7; col++) {
        for (let lin = 0; lin < 3; lin++) {
            if (gameGrid[col][lin] === player
                && gameGrid[col - 1][lin + 1] === player
                && gameGrid[col - 2][lin + 2] === player
                && gameGrid[col - 3][lin + 3] === player) {
                console.log("victory diagonal left", col, "lin", lin)
                return true
            }
        }
    }
    console.log("no victory")
    return false
}