import React from 'react'

export class Spinner extends React.Component {
  render() {
    return (
      <div className="col-12">
        <div className="d-flex justify-content-center">
          <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    )
  }
}
