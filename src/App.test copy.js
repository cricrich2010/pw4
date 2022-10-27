import { render, screen } from '@testing-library/react';
import App from './App';

test('test report victory/lose for each player', () => {
  let player = 0


  let gameGrid = [
    [2, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];
  player = 1
  expect(isVictory(player, gameGrid)).toBe(false);
  player = 2
  expect(isVictory(player, gameGrid)).toBe(true);


  gameGrid = [
    [2, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];
  player = 1
  expect(isVictory(player, gameGrid)).toBe(false);
  player = 2
  expect(isVictory(player, gameGrid)).toBe(true);


  gameGrid = [
    [2, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0],
    [0, 0, 2, 0, 0, 0],
    [0, 0, 2, 0, 0, 0],
    [0, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];
  player = 1
  expect(isVictory(player, gameGrid)).toBe(false);
  player = 2
  expect(isVictory(player, gameGrid)).toBe(true);


  gameGrid = [
    [2, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];
  player = 1
  expect(isVictory(player, gameGrid)).toBe(false);
  player = 2
  expect(isVictory(player, gameGrid)).toBe(true);


  gameGrid = [
    [2, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0],
    [0, 0, 0, 0, 2, 0],
    [0, 0, 0, 0, 2, 0],
    [0, 0, 0, 0, 2, 0],
  ];
  player = 1
  expect(isVictory(player, gameGrid)).toBe(false);
  player = 2
  expect(isVictory(player, gameGrid)).toBe(true);


  gameGrid = [
    [2, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 2, 0],
  ];
  player = 1
  expect(isVictory(player, gameGrid)).toBe(true);
  player = 2
  expect(isVictory(player, gameGrid)).toBe(false);


  gameGrid = [
    [1, 1, 1, 1, 0, 0],
    [2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];
  player = 1
  expect(isVictory(player, gameGrid)).toBe(true);
  player = 2
  expect(isVictory(player, gameGrid)).toBe(false);


  gameGrid = [
    [2, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 2, 0],
  ];
  player = 1
  expect(isVictory(player, gameGrid)).toBe(true);
  player = 2
  expect(isVictory(player, gameGrid)).toBe(false);


  gameGrid = [
    [2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0],
  ];
  player = 1
  expect(isVictory(player, gameGrid)).toBe(true);
  player = 2
  expect(isVictory(player, gameGrid)).toBe(false);


  gameGrid = [
    [2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0],
  ];
  player = 1
  expect(isVictory(player, gameGrid)).toBe(true);
  player = 2
  expect(isVictory(player, gameGrid)).toBe(false);


  gameGrid = [
    [2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0],
    [0, 1, 1, 1, 1, 0],
  ];
  player = 1
  expect(isVictory(player, gameGrid)).toBe(true);
  player = 2
  expect(isVictory(player, gameGrid)).toBe(false);



  player = 1
  gameGrid = [
    [2, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];
  player = 1
  expect(isVictory(player, gameGrid)).toBe(true);
  player = 2
  expect(isVictory(player, gameGrid)).toBe(false);


  player = 1
  gameGrid = [
    [2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];
  player = 1
  expect(isVictory(player, gameGrid)).toBe(true);
  player = 2
  expect(isVictory(player, gameGrid)).toBe(false);


  gameGrid = [
    [2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 2],
    [0, 0, 1, 0, 2, 0],
    [0, 1, 0, 2, 0, 0],
    [1, 0, 2, 0, 0, 0],
  ];
  player = 1
  expect(isVictory(player, gameGrid)).toBe(true);
  player = 2
  expect(isVictory(player, gameGrid)).toBe(true);

  gameGrid = [
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 0, 2, 0],
    [0, 0, 1, 2, 0, 0],
    [0, 0, 2, 1, 0, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
  ];
  player = 1
  expect(isVictory(player, gameGrid)).toBe(true);
  player = 2
  expect(isVictory(player, gameGrid)).toBe(true);

  gameGrid = [
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 0, 2, 0],
    [0, 0, 1, 1, 0, 0],
    [0, 0, 2, 2, 0, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
  ];
  player = 1
  expect(isVictory(player, gameGrid)).toBe(false);
  player = 2
  expect(isVictory(player, gameGrid)).toBe(false);



});

