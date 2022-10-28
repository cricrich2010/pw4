
import { render, screen } from '@testing-library/react';
import { fireEvent, within } from '@testing-library/dom'
import React from "react";
import { Power4 } from './Power4.js'
import { computeNextState } from "./computeNextState";
import { useState } from "react";
import { GameGrid } from './GameGrid.js'
import { DysplayPlayersStatus } from './DisplayPlayersStatus.js'
import { GameMessages } from './GameMessages.js'
import { ErrorBoundary } from './ErrorBoundary.js'
import "./Power4.css";


test('Rest Buton reinit victory game status', () => {

    render(<Power4 />);
    //doesn't work as event are asyn
    // fireEvent(screen.getByTestId('col0'), "click") //Y
    // fireEvent(screen.getByTestId('col0'), "click") //R
    // fireEvent(screen.getByTestId('col1'), "click") //Y
    // fireEvent(screen.getByTestId('col1'), "click") //R
    // fireEvent(screen.getByTestId('col2'), "click") //Y
    // fireEvent(screen.getByTestId('col2'), "click") //R
    // fireEvent(screen.getByTestId('col3'), "click") //Y
    // screen.getByText("Yellow player Win").should("exist")
    // screen.getByTestId("BT_Reset").click()


});