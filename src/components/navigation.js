import React from "react";
import {Link} from 'react-router-dom';
import M from "materialize-css";

const inline = {
    display: 'inline-flex',
};

export default class Navigation extends React.Component {

    componentDidMount()
    {
        M.AutoInit();
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo right">Logo</a>
                        <ul id="nav-mobile" className="left hide-on-med-and-down" style={inline}>
                            <Link to="/">
                                <li>Home</li>
                            </Link>
                            <Link to="/articles">
                                <li>Articles</li>
                            </Link>
                            <Link to="/Users">
                                <li>Users</li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
