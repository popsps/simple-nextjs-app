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
            <div className="jumbotron">
              <h1 className='my-3'>About</h1>
              <p className='m-5 text-center'>{this.props.serverName}</p>
            </div>
          </main>
        </Layout>
    )
  }
}

export async function getServerSideProps(context) {
  return {
    props: {
      serverName: "Br Goo"
    }
  }
}

export default About
