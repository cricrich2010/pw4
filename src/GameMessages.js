export function GameMessages(props) {
    let partyMessage = props.partyMessage;

    return (
        <div id="gameMessages" data-testid="gameMessages">
            <p>{partyMessage}</p>
        </div>
    );
}