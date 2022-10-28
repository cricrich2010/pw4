import { isVictory } from './computeVictory.js'

test('check grid player victory/lose', () => {
    let player = 0
    let gameGrid = ''

    gameGrid = [
        [2, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ];
    player = true
    expect(isVictory(player, gameGrid)).toBe(false);
    player = false
    expect(isVictory(player, gameGrid)).toBe(true);

    gameGrid = [
        [0, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ];
    player = true
    expect(isVictory(player, gameGrid)).toBe(false);
    player = false
    expect(isVictory(player, gameGrid)).toBe(true);

    gameGrid = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0],
        [0, 0, 2, 0, 0, 0],
        [0, 0, 2, 0, 0, 0],
        [0, 0, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ];
    player = true
    expect(isVictory(player, gameGrid)).toBe(false);
    player = false
    expect(isVictory(player, gameGrid)).toBe(true);

    gameGrid = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 0, 2, 0, 0]
    ];
    player = true
    expect(isVictory(player, gameGrid)).toBe(false);
    player = false
    expect(isVictory(player, gameGrid)).toBe(true);

    gameGrid = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0],
        [0, 0, 0, 0, 2, 0],
        [0, 0, 0, 0, 2, 0],
        [0, 0, 0, 0, 2, 0]
    ];
    player = true
    expect(isVictory(player, gameGrid)).toBe(false);
    player = false
    expect(isVictory(player, gameGrid)).toBe(true);

    gameGrid = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 0]
    ];
    player = true
    expect(isVictory(player, gameGrid)).toBe(false);
    player = false
    expect(isVictory(player, gameGrid)).toBe(true);

    gameGrid = [
        [1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 0]
    ];
    player = true
    expect(isVictory(player, gameGrid)).toBe(true);
    player = false
    expect(isVictory(player, gameGrid)).toBe(true);

    gameGrid = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ];
    player = true
    expect(isVictory(player, gameGrid)).toBe(true);
    player = false
    expect(isVictory(player, gameGrid)).toBe(false);

    gameGrid = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ];
    player = true
    expect(isVictory(player, gameGrid)).toBe(true);
    player = false
    expect(isVictory(player, gameGrid)).toBe(false);

    gameGrid = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ];
    player = true
    expect(isVictory(player, gameGrid)).toBe(true);
    player = false
    expect(isVictory(player, gameGrid)).toBe(false);

    gameGrid = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ];
    player = true
    expect(isVictory(player, gameGrid)).toBe(true);
    player = false
    expect(isVictory(player, gameGrid)).toBe(false);

    gameGrid = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ];
    player = true
    expect(isVictory(player, gameGrid)).toBe(true);
    player = false
    expect(isVictory(player, gameGrid)).toBe(false);

    gameGrid = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1],
    ];
    player = true
    expect(isVictory(player, gameGrid)).toBe(true);
    player = false
    expect(isVictory(player, gameGrid)).toBe(false);

    //diagonal right
    gameGrid = [
        [1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 2, 1, 0, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 0, 0, 2, 0],
        [0, 0, 0, 0, 0, 2]
    ];
    player = true
    expect(isVictory(player, gameGrid)).toBe(true);
    player = false
    expect(isVictory(player, gameGrid)).toBe(true);


    //diagonal left
    gameGrid = [
        [0, 0, 0, 2, 0, 0],
        [0, 0, 2, 0, 0, 0],
        [0, 2, 0, 0, 1, 0],
        [2, 0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ];
    player = true
    expect(isVictory(player, gameGrid)).toBe(true);
    player = false
    expect(isVictory(player, gameGrid)).toBe(true);

});



test('other numbers are like 0', () => {
    let player = 0
    let gameGrid = ''

    gameGrid = [
        [3, 6, 6, 1, 6, 6],
        [6, 3, 1, 6, 5, 7],
        [2, 1, 3, 4, 5, 7],
        [1, 2, 4, 3, 5, 7],
        [6, 4, 2, 6, 5, 6],
        [4, 7, 7, 2, 7, 7],
        [8, 8, 8, 9, 9, 9]
    ];
    player = true
    expect(isVictory(player, gameGrid)).toBe(true);
    player = false
    expect(isVictory(player, gameGrid)).toBe(true);

    gameGrid = [
        [3, 6, 6, 1, 6, 6],
        [6, 3, 1, 6, 5, 7],
        [2, 0, 3, 4, 5, 7],
        [1, 0, 4, 3, 5, 7],
        [6, 4, 2, 6, 5, 6],
        [4, 7, 7, 2, 7, 7],
        [8, 8, 8, 9, 9, 9]
    ];
    player = true
    expect(isVictory(player, gameGrid)).toBe(false);
    player = false
    expect(isVictory(player, gameGrid)).toBe(false);

});
