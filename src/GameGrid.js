import React from "react";
import { Token } from './Token.js'


export class GameGrid extends React.Component {
    // constructor(props) {
    //   super(props)

    render() {
        const gameGrid = this.props.gameGrid;
        const gameColumns = [0, 1, 2, 3, 4, 5, 6];
        //console.log("print gameGrid", gameGrid, gameGrid[0])
        //console.log("print gameGrid1", gameGrid[1])
        //console.log("print columns", gameColumns)
        return (
            <table className="board">
                <thead>
                    <tr>
                        {gameColumns.map((columnNumber) => (
                            <th
                                onClick={() => {
                                    this.props.addTokenInColumn(columnNumber);
                                }}
                                data-playecolumn={columnNumber}
                            >
                                play here
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {gameColumns.map((columnNumber) => (
                            <th>
                                <Token displayToken={gameGrid[columnNumber][5]} />
                            </th>
                        ))}
                    </tr>
                    <tr>
                        {gameColumns.map((columnNumber) => (
                            <th>
                                <Token displayToken={gameGrid[columnNumber][4]} />
                            </th>
                        ))}
                    </tr>
                    <tr>
                        {gameColumns.map((columnNumber) => (
                            <th>
                                <Token displayToken={gameGrid[columnNumber][3]} />
                            </th>
                        ))}
                    </tr>
                    <tr>
                        {gameColumns.map((columnNumber) => (
                            <th>
                                <Token displayToken={gameGrid[columnNumber][2]} />
                            </th>
                        ))}
                    </tr>
                    <tr>
                        {gameColumns.map((columnNumber) => (
                            <th>
                                <Token displayToken={gameGrid[columnNumber][1]} />
                            </th>
                        ))}
                    </tr>
                    <tr>
                        {gameColumns.map((columnNumber) => (
                            <th>
                                <Token displayToken={gameGrid[columnNumber][0]} />
                            </th>
                        ))}
                    </tr>
                </tbody>
            </table>
        );
    }
}

