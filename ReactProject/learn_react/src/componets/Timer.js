import React from 'react';
import Conditional from './Conditional';

class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
        }
    }

    // Life cycle methods
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false,
            })
        }, 3000)
    }

    render() {
        return(
            <div>
                <Conditional isLoading={this.state.isLoading}/>
            </div>
        )
    }
}

export default Timer; 