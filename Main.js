import React from 'react'
import MainForm from './MainForm'
import MainSummary from './MainSummary'

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <MainForm selected = {this.props.selected}/>
                <MainSummary />
            </div>
        )
    }
}

