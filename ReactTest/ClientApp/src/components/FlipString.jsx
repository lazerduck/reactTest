import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class FlipString extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        };

        this.ReverseString = this.ReverseString.bind(this);
    }

    UpdateText(event) {
        this.setState({
            text: event.target.value
        });
    }

    // Simplify this method
    ReverseString() {
        let text = this.state.text;
        let result = "";

        // todo - reverse text

        this.setState({
            text: result
        });
    }

    render() {
        return (
            <div>
                <label>Enter Text:</label>
                <input type="Text" value={this.state.text} onChange={event => this.UpdateText(event)} />
                <button onClick={this.ReverseString}>Flip</button>
            </div>
        );
    }
}

export default connect()(FlipString);
