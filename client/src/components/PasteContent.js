import React from 'react';

function PasteContent({content}) {
    return (
        <div className = 'pasteContent'>
            {content && content.map(str => {
                return <div>{str}</div>
            })}
        </div>
    );
}

export default PasteContent;