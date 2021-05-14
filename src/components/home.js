import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import './home.css';
import M from "materialize-css";


export default class home extends React.Component {
    state = {
        articles: []
    }

    componentDidMount() {
        M.AutoInit();
        axios.get(`http://localhost:3000/articles`)
            .then(res => {
                const articles = res.data;
                this.setState({articles});
            })
    }

    render() {
        return (
            // Avec slice, je ne retourne que les 3 premiers items
            <div className="container">
                <h1>Welcome</h1>
                <div className="articleSection row">
                    {this.state.articles.slice(0, 3).map(article =>
                        <div className="oneArticle col s12">
                            <h3><Link to={"/article/" + article.id}>{article.name}</Link></h3>
                            <img src={article.image}></img>
                        </div>)}
                </div>
            </div>

        )
    }
}