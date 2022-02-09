import React from "react";

import '../form.styles.scss';

class FormContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            first: ''
            list: ''
        }
    }

    render() {
        return (
            <div className="form-container">
                <div>
                    <span>First Name:</span>
                    <input
                        type={'text'}
                        value={this.state.first}
                        onChange={(e) => this.setState({fisrt: e.target.value})}
                    />
                </div>

                <div>
                    <span>Last Name:</span>
                    <input
                        type={'text'}
                        value={this.state.last}
                        onChange={(e) => this.setState({last: e.target.value})}
                    />
                </div>

            </div>
        );
    }
}

export default FormContainer;
