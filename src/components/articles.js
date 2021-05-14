import React from 'react'
import axios from 'axios';


export default class Articles extends React.Component {
    state = {
        articles: []
    }

    componentDidMount() {
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
                    {this.state.articles.map(article =>
                        <div className="oneArticle col s12">
                            <h3>{article.name}</h3>
                            <img src={article.image}></img>
                            <p>{article.descr}</p>
                            <div>{article.price} €</div>
                            <div className="row">
                                <div className="col s6">Create by : {article.user_id}</div>
                                <div className="col s6">Create : {article.creation_date}</div>
                            </div>
                        </div>)}
                </div>
            </div>
        )
    }
}