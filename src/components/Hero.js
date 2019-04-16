import React from 'react'

export class Hero extends React.Component {
    render() {
        const { title, subTitle } = this.props
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">{title}</h1>
                    {subTitle && <p className="lead">{subTitle}</p>}
                </div>
            </div>
        )
    }
}
