
export function DysplayPlayersStatus(props) {
    let activePlayer = props.activePlayer;

    return (
        <div className="players">
            <div className={activePlayer ? "player playerRed" : "player"}>
                <p className={activePlayer ? "player playerRed" : "player"}>
                    Player Red
                </p>
                <br></br>
                <p className="victories">Victory: {props.redVictories}</p>
            </div>
            <div className={!activePlayer ? "player playerYello" : "player"}>
                <p className={!activePlayer ? "player playerYello" : "player"}>
                    Player Yellow
                </p>
                <br></br>
                <p className="victories">Victory: {props.yellowVictories}</p>
            </div>
        </div>
    );
}
