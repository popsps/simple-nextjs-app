import Head from "next/head";

const Layout = (props) => {
  return (
      <div>
        <Head>
          <title>Simple Next App Demo</title>
          <link rel="icon" href="./favicon.ico"/>
        </Head>
        <div className='container'>
          {props.children}
        </div>
      </div>
  )
}
export default Layout