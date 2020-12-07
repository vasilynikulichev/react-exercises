import React, { Component } from 'react';
import './App.scss';

import Color from '../Color';
import Switcher from '../Switcher';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colorFrom: '#ffffff',
            colorTo: '#000000',
            type: 'linear',
            degrees: 0,
        };
    }

    changeColorFrom = (event) => {
        this.setState({
            colorFrom: event.target.value,
        });
    }

    changeColorTo = (event) => {
        this.setState({
            colorTo: event.target.value,
        });
    }

    toggleType = (type) => {
        this.setState({
            type: type,
        });
    }

    selectDegrees = (event) => {
        let value = parseInt(event.target.value);

        if (value > 360) {
            value = 360;
        }

        if (value < 0) {
            value = 0;
        }

        this.setState({
            degrees: value,
        });
    }

    render() {
        const {
            colorFrom,
            colorTo,
            type,
            degrees,
        } = this.state;
        const style = {
            background: `${type}-gradient(${type === 'linear' ? `${degrees}deg` : 'circle'}, ${colorFrom}, ${colorTo})`
        };

        return (
            <main className="main">
                <div className="form">
                    <div className="form__title">Make gradient</div>
                    <Color
                        title="Color form"
                        value={colorFrom}
                        onChange={this.changeColorFrom}
                    />
                    <Color
                        title="Color to"
                        value={colorTo}
                        onChange={this.changeColorTo}
                    />
                    <Switcher
                        title="Select type"
                        type={type}
                        degrees={degrees}
                        selectDegrees={this.selectDegrees}
                        toggleType={this.toggleType}
                    />
                </div>
                <div className="gradient" style={style}/>
            </main>
        );
    }
};
