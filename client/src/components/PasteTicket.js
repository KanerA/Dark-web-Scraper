import React from 'react';
import PasteContent from '../components/PasteContent';

function PasteTicket({ ticket }) {
    return (
        <div className = 'ticket pasteContainer'>
            <div className = "pasteAuthor">{ticket.author}</div>
            <div className="pasteTitle">{ticket.title}</div>        
            <PasteContent content = {ticket.content} />
            <div className = "pasteDate">{ticket.date}</div>
        </div>
    );
}

export default PasteTicket;