import React from 'react' 
import Form from './Form'
import Summary from './Summary'
import Features from './Features';

export default class Main extends React.Component{
    render() {
        return (
            <div>
                <Form />
                <Summary selected={this.props.selected} />
                <Features />
            </div>
        )
    }
}