import { computeNextState } from './computeNextState.js'
import { isVictory } from './computeVictory.js'

jest.mock('./computeVictory.js')

test("change player for next turn", () => {
    isVictory.mockReturnValue(false)
    let column = 0
    let newState = {}

    let state = {
        redVictories: 0,
        yellowVictories: 0,
        activePlayer: false,
        isVictory: false,
        partyMessage: "New Game",
        gameGrid: new Array(7).fill(0).map((it) => new Array(6).fill(0)),
    };

    newState = computeNextState(column, state)
    expect(newState.activePlayer).toBe(true)
    newState = computeNextState(column, newState)
    expect(newState.activePlayer).toBe(false)
})

test("increment victory counter", () => {
    isVictory.mockReturnValue(true)
    let column = 0
    let newState = {}

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
    newState = computeNextState(column, state)
    expect(newState.yellowVictories).toBe(1)
    newState.activePlayer = false
    newState = computeNextState(column, newState)
    expect(newState.yellowVictories).toBe(2)

    state.activePlayer = true
    newState = computeNextState(column, state)
    expect(newState.redVictories).toBe(1)
    newState.activePlayer = true
    newState = computeNextState(column, newState)
    expect(newState.redVictories).toBe(2)
});


test("update victory gamestatus", () => {
    isVictory.mockReturnValue(true)
    let column = 0
    let newState = {}

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
    newState = computeNextState(column, state)
    expect(newState.isVictory).toBe(true)
});


test("prevent add extra token in full collumn", () => {
})
