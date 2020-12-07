import React from 'react';
import './switcher.scss';

const Switcher = (props) => {
    const { title, type, degrees, selectDegrees, toggleType } = props;

    return (
        <div className="switcher">
            <div className="switcher__title">{title}</div>
            <button
                className={`switcher__btn ${type === 'linear' ? 'linear' : ''}`}
                onClick={() => toggleType( 'linear')}
                type="button"
            >
                linear
            </button>
            <button
                className={`switcher__btn switcher__btn_radial ${type === 'radial' ? 'radial' : ''}`}
                onClick={() => toggleType('radial')}
                type="button"
            >
                radial
            </button>
            {type === 'linear' &&
                <label className="switcher__degrees">
                    <span className="switcher__title">degrees</span>
                    <input
                        onInput={selectDegrees}
                        className="switcher__degrees-input"
                        type="number"
                        value={degrees}
                    />
                </label>
            }
        </div>
    );
}

export default Switcher;