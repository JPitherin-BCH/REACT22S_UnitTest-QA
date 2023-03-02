import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return(
        <div>
            <header className="App-header">
                <h1>Functional Unit Tests</h1>
                <nav>
                    <Link to="/">Home</Link>
                </nav>
            </header>

            <Outlet />
        </div>
    )
};

export default Layout;