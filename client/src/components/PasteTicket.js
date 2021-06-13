import React from 'react';
import PasteContent from '../components/PasteContent';
import HideButton from '../components/HideButton';

function PasteTicket({ ticket, hideOnClick }) {
    return (
        <div className = 'ticket pasteContainer'>
            <div className = "pasteAuthor">{ticket.author}</div>
            <div className="pasteTitle">{ticket.title}</div>        
            <PasteContent content = {ticket.content} />
            <div className = "pasteDate">{ticket.date}</div>
            <HideButton hideOnClick = {hideOnClick}/>
        </div>
    );
}

export default PasteTicket;