import { render, screen } from '@testing-library/react';
import App from './App';
import { isVictory } from './computeVictory.js'

test('check player victory/lose', () => {
    let player = 0
    let gameGrid = ''
    gameGrid = [
        [2, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ];
    player = 1
    expect(isVictory(player, gameGrid)).toBeInTheDocument(false);
    player = 2
    expect(isVictory(player, gameGrid)).toBeInTheDocument(true);


    gameGrid = [
        [0, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ];
    player = 1
    expect(isVictory(player, gameGrid)).toBeInTheDocument(false);
    player = 2
    expect(isVictory(player, gameGrid)).toBeInTheDocument(true);


    gameGrid = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0],
        [0, 0, 2, 0, 0, 0],
        [0, 0, 2, 0, 0, 0],
        [0, 0, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ];
    player = 1
    expect(isVictory(player, gameGrid)).toBeInTheDocument(false);
    player = 2
    expect(isVictory(player, gameGrid)).toBeInTheDocument(true);


    gameGrid = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 0, 2, 0, 0],
    ];
    player = 1
    expect(isVictory(player, gameGrid)).toBeInTheDocument(false);
    player = 2
    expect(isVictory(player, gameGrid)).toBeInTheDocument(true);


    gameGrid = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0],
        [0, 0, 0, 0, 2, 0],
        [0, 0, 0, 0, 2, 0],
        [0, 0, 0, 0, 2, 0],
    ];
    player = 1
    expect(isVictory(player, gameGrid)).toBeInTheDocument(false);
    player = 2
    expect(isVictory(player, gameGrid)).toBeInTheDocument(true);


    gameGrid = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 0],
    ];
    player = 1
    expect(isVictory(player, gameGrid)).toBeInTheDocument(false);
    player = 2
    expect(isVictory(player, gameGrid)).toBeInTheDocument(true);
    gameGrid = [
        [1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 0],
    ];
    player = 1
    expect(isVictory(player, gameGrid)).toBeInTheDocument(true);
    player = 2
    expect(isVictory(player, gameGrid)).toBeInTheDocument(true);

    gameGrid = [
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ];
    player = 1
    expect(isVictory(player, gameGrid)).toBeInTheDocument(true);
    player = 2
    expect(isVictory(player, gameGrid)).toBeInTheDocument(false);


    gameGrid = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ];
    player = 1
    expect(isVictory(player, gameGrid)).toBeInTheDocument(true);
    player = 2
    expect(isVictory(player, gameGrid)).toBeInTheDocument(false);

    gameGrid = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ];
    player = 1
    expect(isVictory(player, gameGrid)).toBeInTheDocument(true);
    player = 2
    expect(isVictory(player, gameGrid)).toBeInTheDocument(false);

    gameGrid = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ];
    player = 1
    expect(isVictory(player, gameGrid)).toBeInTheDocument(true);
    player = 2
    expect(isVictory(player, gameGrid)).toBeInTheDocument(false);

    gameGrid = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ];
    player = 1
    expect(isVictory(player, gameGrid)).toBeInTheDocument(true);
    player = 2
    expect(isVictory(player, gameGrid)).toBeInTheDocument(false);

    gameGrid = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1],
    ];
    player = 1
    expect(isVictory(player, gameGrid)).toBeInTheDocument(true);
    player = 2
    expect(isVictory(player, gameGrid)).toBeInTheDocument(false);


    gameGrid = [
        [1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 2, 1, 0, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 0, 0, 2, 0],
        [0, 0, 0, 0, 0, 2]
    ];
    player = 1
    expect(isVictory(player, gameGrid)).toBeInTheDocument(true);
    player = 2
    expect(isVictory(player, gameGrid)).toBeInTheDocument(true);


    gameGrid = [
        [3, 6, 6, 1, 6, 6],
        [6, 3, 1, 6, 5, 7],
        [2, 1, 3, 4, 5, 7],
        [1, 2, 4, 3, 5, 7],
        [6, 4, 2, 6, 5, 6],
        [4, 7, 7, 2, 7, 7],
        [8, 8, 8, 9, 9, 9]
    ];
    player = 1
    expect(isVictory(player, gameGrid)).toBeInTheDocument(true);
    player = 2
    expect(isVictory(player, gameGrid)).toBeInTheDocument(true);
    player = 3
    expect(isVictory(player, gameGrid)).toBeInTheDocument(true);
    player = 4
    expect(isVictory(player, gameGrid)).toBeInTheDocument(true);
    player = 5
    expect(isVictory(player, gameGrid)).toBeInTheDocument(true);
    player = 6
    expect(isVictory(player, gameGrid)).toBeInTheDocument(false);
    player = 7
    expect(isVictory(player, gameGrid)).toBeInTheDocument(false);
    player = 8
    expect(isVictory(player, gameGrid)).toBeInTheDocument(false);
    player = 9
    expect(isVictory(player, gameGrid)).toBeInTheDocument(false);


});
