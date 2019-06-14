import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card ({
    show,
    color,
    onClick,
}) {
    return (
        <div
            className="card"
            onClick={onClick}
            style={{
                backgroundColor: show ? color : 'grey',
            }}
        />
    )
}
Card.propTypes = {
    show: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};
Card.defaultProps = {
    onClick: () => {},
};
