import Layout from "../components/layout";
import React from 'react'

const fetch = require("node-fetch")

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Layout>
          <main>
            <h1 className='my-3' >About</h1>
          </main>
        </Layout>
    )
  }
}

export default About
