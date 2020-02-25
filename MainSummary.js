import React from 'react'
import Summary from './Summary'
import SummaryTotal from './SummaryTotal'

export default class extends React.Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <Summary />
                <SummaryTotal />
            </section>
        )
    }
}
