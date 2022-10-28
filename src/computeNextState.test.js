import { computeNextState } from './computeNextState.js'
import { isVictory } from './computeVictory.js'

jest.mock('./computeVictory.js')

test("change player for next turn", () => {
    isVictory.mockReturnValue(false)
    let column = 0
    let NewState = {}

    let state = {
        redVictories: 0,
        yellowVictories: 0,
        activePlayer: false,
        isVictory: false,
        partyMessage: "New Game",
        gameGrid: new Array(7).fill(0).map((it) => new Array(6).fill(0)),
    };

    NewState = computeNextState(column, state)
    expect(NewState.activePlayer).toBe(true)
    NewState = computeNextState(column, NewState)
    expect(NewState.activePlayer).toBe(false)

})

test("increment victory counter", () => {
    isVictory.mockReturnValue(true)
    let column = 0
    let NewState = {}

    let state = {
        redVictories: 0,
        yellowVictories: 0,
        activePlayer: false,
        isVictory: false,
        partyMessage: "New Game",
        gameGrid: new Array(7).fill(0).map((it) => new Array(6).fill(0)),
    };
    column = 3
    state.activePlayer = false
    NewState = computeNextState(column, state)
    expect(NewState.yellowVictories).toBe(1)
    state.activePlayer = false
    NewState = computeNextState(column, state)
    expect(NewState.yellowVictories).toBe(2)

    state.activePlayer = true
    NewState = computeNextState(column, state)
    expect(NewState.redVictories).toBe(1)
    state.activePlayer = true
    NewState = computeNextState(column, state)
    expect(NewState.redVictories).toBe(2)

});


test("update victory gamestatus", () => {
    isVictory.mockReturnValue(true)
    let column = 0
    let NewState = {}

    let state = {
        redVictories: 0,
        yellowVictories: 0,
        activePlayer: false,
        isVictory: false,
        partyMessage: "New Game",
        gameGrid: new Array(7).fill(0).map((it) => new Array(6).fill(0)),
    };

    column = 3
    state.activePlayer = false
    NewState = computeNextState(column, state)
    expect(NewState.isVictory).toBe(true)

});


test("prevent add extra token in full collumn", () => {


})
