import React from 'react';
import './color.scss';

const Color = (props) => {
    const { title, value, onChange } = props;

    return (
        <label className="color">
            <span className="color__title">{title}</span>
            <input
                className="color__input"
                onChange={onChange}
                type="color"
                value={value}
            />
        </label>
    );
}

export default Color;