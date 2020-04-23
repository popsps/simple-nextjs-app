import Link from "next/link";

const Navigation = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"
              aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link href='/'><a className="nav-link">Home <span className="sr-only">(current)</span></a></Link>
          </li>
          <li className="nav-item active">
            <Link href='/about'><a className="nav-link">About <span className="sr-only">(current)</span></a></Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
)
export default Navigation