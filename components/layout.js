import Head from "next/head";
import Navigation from "./navigation";
import styles from '../styles/layout.module.css'
const Layout = (props) => {
  return (
      <div>
        <Head>
          <title>Simple Next App Demo</title>
          <link rel="icon" href="./favicon.ico"/>
        </Head>
        <Navigation/>
        <div className={`container ${styles.container}` }>
          {props.children}
        </div>
      </div>
  )
}
export default Layout