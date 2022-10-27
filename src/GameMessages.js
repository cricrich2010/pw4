export function GameMessages(props) {
    let partyMessage = props.partyMessage;

    return (
        <div>
            <p>{partyMessage}</p>
        </div>
    );
}