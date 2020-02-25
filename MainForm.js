import React from 'react'
import Features from './Features'

export default class extends React.Component {
    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Features />
            </form>
        )
    }
}