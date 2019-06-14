import React from 'react';
import './Card.css';

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
                backgroundColor: (cardState === 0) ? 'grey' : color,
            }}
        />
    )
}
