import React from 'react'

export default class Form extends React.Component {
    render() {
        return (
            <div>
                <form className="main__form">
                    <h2>Customize your laptop</h2>
                    {features}
                </form>
            </div>
        )
    }
}