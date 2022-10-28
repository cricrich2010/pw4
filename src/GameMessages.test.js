import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom'
import { GameMessages } from './GameMessages.js'

test('Render messages send via props', () => {

    render(<GameMessages partyMessage="test message 1" />);
    expect(screen.getByTestId("gameMessages")).toBeInTheDocument();
    const messageComp = screen.getByTestId("gameMessages")
    const message = within(messageComp).getByText(/test message 1/i);
    expect(message).toBeInTheDocument();

});