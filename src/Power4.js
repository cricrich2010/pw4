import React from "react";
import { computeNextState } from "./computeNextState";
import { useState } from "react";
import { GameGrid } from './GameGrid.js'
import { DysplayPlayersStatus } from './DisplayPlayersStatus.js'
import { GameMessages } from './GameMessages.js'
import { ErrorBoundary } from './ErrorBoundary.js'
import "./Power4.css";

export class Power4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redVictories: 0,
      yellowVictories: 0,
      activePlayer: false,
      isVictory: false,
      partyMessage: "New Game",
      gameGrid: new Array(7).fill(0).map((it) => new Array(6).fill(0)),
    };
  }

  addTokenInColumn = (column) => {
    if (this.state.isVictory) return;
    this.setState(computeNextState(column, this.state));
  }

  reinitParty() {
    console.log("reinitParty fired");
    let newgameGrid = new Array(7).fill(0).map((it) => new Array(6).fill(0));
    this.setState({ isVictory: false, gameGrid: newgameGrid });
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    //console.log("i was there!!!", this.state.activePlayer, !this.state.activePlayer)

    return (
      <div>
        <h1>Power 4</h1>
        <ErrorBoundary>
          <DysplayPlayersStatus activePlayer={this.state.activePlayer} redVictories={this.state.redVictories} yellowVictories={this.state.yellowVictories} />
        </ErrorBoundary>
        <ErrorBoundary>
          <GameMessages partyMessage={this.state.partyMessage} />
          <button onClick={this.reinitParty.bind(this)}>reinit</button>
        </ErrorBoundary>
        <ErrorBoundary>
          <GameGrid addTokenInColumn={this.addTokenInColumn} gameGrid={this.state.gameGrid} />
        </ErrorBoundary>
      </div>
    );
  }
}
