import React from 'react' 
import Form from './Form'
import Summary from './Summary'
import Feature from './Feature';

export default class Main extends React.Component{
    render() {
        return (
            <div>
                <Form />
                <Summary selected={this.props.selected} />
                <Feature  features={feature}/>
            </div>
        )
    }
}