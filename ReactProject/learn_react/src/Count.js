import React from 'react';

class Count extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            character: {},
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })

    }

    handleMouseover() {
        console.log("This is being hovered ")
    }

        // Work with an api
    componentDidMount() {
        this.setState({loading:true})
        fetch('https://swapi.dev/api/people/1')
        .then(response => response.json())
        .then(data => {
            this.setState({
            character: data,
            loading:false
            })
        })
    }

    render() {
        const text = this.state.loading ? "Loading...": this.state.character.name
        return (
            <div className="text-center mt-5 mb-5">
                <h1 onMouseOver={this.handleMouseover}>{this.state.count}</h1>
                <button className="btn-info" onClick={this.handleClick}>CHANGE</button>
                <h2>{text}</h2>
            </div>
        )
    }
}

export default Count;