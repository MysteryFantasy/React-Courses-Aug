import React from 'react';

export default function Button({title, btnOnClickAction}) {
    return (
        <button onClick={btnOnClickAction}>{title}</button>
    )
}