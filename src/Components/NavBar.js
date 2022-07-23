import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <nav>
            <h1>
            {/* nav bar is visible on all pages and can navigate to an index  and a form for a new log*/}
                <Link to="/logs">Captain's Logs</Link>
            </h1>
            <button>
                <Link to="/logs/new">New Log</Link>
            </button>
        </nav>
    );
}