import React,{Fragment} from "react";

import "../assets/css/User.css";

const User = (props) => {
    let template;
    const {user} = props;

    return(
        <Fragment>
            <div className="ctr-user">
                <a target="_blank" href={user.html_url}>
                    <img src={user.avatar_url} alt=""/>
                </a>
                <div id="user-info">
                    <span>Nombre: {
                        user.name!==null? user.name: "No suministrado"
                    }</span><br/>
                    <span> Biografia: {
                        user.bio!==null? user.bio: "No suministrado"
                    }</span><br/>
                    
                    <span> Seguidores: {
                        user.followers!==null? user.followers: "No suministrado"
                    }</span><br/>
                    
                    <span> Seguiendo: {
                        user.following!==null? user.following: "No suministrado"
                    }</span><br/>
                    
                    <span> Miembro desde: {
                        user.created_at!==null? user.created_at.substring(0,10): "No suministrado"
                    }</span><br/>
                </div>
            </div>
        </Fragment>
    );
};

export default User;