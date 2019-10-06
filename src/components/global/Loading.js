import React,{Fragment} from "react";

import "../../assets/css/Loading.css";
import iconLoading from "../../assets/images/loading.gif";

const Loading = (props) => (
    <Fragment>
        <div id="ctr-loading">
            <img src={iconLoading} alt="loading-icon"/>
        </div>
    </Fragment>
);

export default Loading;