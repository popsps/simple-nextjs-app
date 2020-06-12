import Layout from "../components/layout";
import React from 'react'
import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

const fetch = require("node-fetch")


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ""}
  }

  const
  getRequest = (endpoint) => {
    fetch(`/api/${endpoint}`)
        .then(res => {
          return res.json()
        })
        .then(data => {
          this.setState({name: data.name})
          console.log("data:", data)
        })
  }
  const
  getRequestSimple = (endpoint) => {
    return fetch(`/api/${endpoint}`)
        .then(res => res.json())
  }

  componentDidMount() {
    this.getRequest('user')
    this.getRequestSimple('user')
        .then(user => console.log("name:", user.name))

  }

  render() {
    const allPostsData = this.props.allPostsData;
    return (
        <Layout>
          <main>
            <div className="jumbotron">
              <h1 className="title">
                Welcome to Simple Next.js app
              </h1>
              <p className='m-5 text-center'>Hello {this.state.name}</p>
            </div>
          </main>
          <div className="jumbotron">
            <section>
              {allPostsData.map(({id, date, title}) => {
                console.log('id:', id);
                return (
                    <ul>
                      <li key={id}>
                        <Link href='/posts/[id]' as={`/posts/${id}`}>
                          <a className='text-warning btn-link'>{title}</a>
                        </Link>
                        <br/>
                        <p>
                          <Date dateString={date}/>
                        </p>
                      </li>
                    </ul>)
              })}
            </section>
          </div>

          <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>
          <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
        </Layout>
    )
  }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}



export default Home
