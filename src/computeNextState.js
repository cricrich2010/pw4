import { isVictory } from './computeVictory'

export function computeNextState(column, state) {

    let stateToUpdate = {}
    stateToUpdate['activePlayer'] = state.activePlayer
    let playedColumn = column
    let playedRow = state.gameGrid[playedColumn].indexOf(0)
    console.log(playedRow)
    //power 4 has 6 row, and token can't be added when column is full  
    if (playedRow < 6 && playedRow > -1) {
        let newgameGrid = [...state.gameGrid]
        newgameGrid[playedColumn][playedRow] = state.activePlayer ? 1 : 2
        stateToUpdate['gameGrid'] = newgameGrid
        stateToUpdate['isVictory'] = isVictory(stateToUpdate['activePlayer'], newgameGrid)
        console.log('state.isVictory', stateToUpdate['isVictory'])
        if (stateToUpdate['isVictory']) {
            if (stateToUpdate['activePlayer']) {
                stateToUpdate['redVictories'] = state.redVictories + 1
                stateToUpdate['partyMessage'] = "Red player Win"
            } else {
                stateToUpdate['yellowVictories'] = state.yellowVictories + 1
                stateToUpdate['partyMessage'] = "Yellow player Win"
            }
        } else {
            //party continue
            stateToUpdate['activePlayer'] = !state.activePlayer
            stateToUpdate['activePlayer'] ?
                stateToUpdate['partyMessage'] = "Red player turn" :
                stateToUpdate['partyMessage'] = "Yello player turn"
        }
    } else {
        stateToUpdate['partyMessage'] = "Move not valid. you can't play here"
    }
    return stateToUpdate
}