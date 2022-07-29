import React from 'react'
import { withRouter } from 'next/router';

export class getRoute extends React.Component {

  static async getInitialProps(context) {
    // Using context prop to get asPath, query, context
    const { asPath, query, pathname } = context
    return { asPath, query, pathname }
  }

  render() {
    // Consoling the values
    console.log(this.props.pathname)
    console.log(this.props.query)
    console.log(this.props.asPath)
    return (
      <div>
        <h1>GeeksforGeeks</h1>
        <h2>Using Context prop in getInitialProps</h2>
      </div>
    )
  }
}

export default getRoute
