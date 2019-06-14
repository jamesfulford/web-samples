import React from 'react';

export default function Card ({
    cardState,
    color,
    onClick,
}) {
    return (
        <div
            className="card"
            onClick={onClick}
            style={{
                width: 40,
                height: 40,
                marginTop: 1,
                backgroundColor: (cardState === 0) ? 'grey' : color,
            }}
        />
    )
}
