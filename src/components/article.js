import React from 'react'
import axios from 'axios';
import {Link, useHistory, useParams} from 'react-router-dom'
import M from "materialize-css";

export default function Article() {

    let [responseData, setResponseData] = React.useState('')

    const { id } = useParams()

    M.AutoInit();
    axios.get(`http://localhost:3000/articles/` + id).then(resp => {
        /* setResponseData(resp.data) #### IT WORKS BUT WARNING ! INFINITE LOOP HERE #### */
        console.log(resp.data);
    });

    return (
        <div className="container">
            <h1>Article</h1>
            <div className="articleSection row">
                    <div className="oneArticle col s12">
                        <h3>{responseData.name}</h3>
                        <img src={responseData.image}></img>
                        <p>{responseData.descr}</p>
                        <div>{responseData.price} €</div>
                        <div className="row">
                            <div className="col s6">Create by : {responseData.user_id}</div>
                            <div className="col s6">Create : {responseData.creation_date}</div>
                        </div>
                    </div>
            </div>
        </div>
    )
}