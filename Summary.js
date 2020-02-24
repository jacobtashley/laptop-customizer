import React from 'react'

export default class Summary extends React.Component {
    render() {
        const total = Object.keys(this.state.selected).reduce(
            (acc, curr) => acc + this.state.selected[curr].cost,
            0
        );
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        return (
            <div>
                <section className="main__summary">
                    <h2>Your cart</h2>
                    {summary}
                    <div className="summary__total">
                        <div className="summary__total__label">Total</div>
                        <div className="summary__total__value">
                            {USCurrencyFormat.format(total)}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}