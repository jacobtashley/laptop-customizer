import React from 'react' 
import Form from './Form'
import Summary from './Summary'

export default class Main extends React.Component{
    render() {
        return (
            <div>
                <Form />
                <Summary />
            </div>
        )
    }
}