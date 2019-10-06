import React,{Component, Fragment} from "react";

import "../assets/css/SearchInput.css";
import Loading from "../components/global/Loading";
class SearchInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:"",
            data:null,
            clicked:false,
            loading:false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleFetch = this.handleFetch.bind(this);
    }

    async handleFetch(userName){
        try{
            let res = await fetch(`https://api.github.com/users/${userName}`);
            let data = await res.json();
            if(!res.ok){
                throw Error(res.statusText);
            }else{
                this.setState({
                    data:data,
                    loading:false
                });
            }
        }catch(error){
            console.log(error);
        }


    }

    handleChange(e){
        this.setState({
            value: e.target.value,
            clicked:false,
            data:null
        });
    }

    handleClick(){
        
        const {value} = this.state;
        if(value.trim()!==""){
            this.setState({
                clicked:true,
                loading:true
            });
            this.handleFetch(value);
        }else{
            alert("Empty fields are not allowed");
        }
    }
    render(){

        let cont;
        const{data,clicked,loading} = this.state;
        if(data!==null && clicked){
            console.table(data);
        }

        if(loading){
            cont = <Loading/>;
       }else{
            cont = <div id="ctr-search_input">
                        <form id="search_input-form" action="">
                            <input type="text" name="search-input" id="search-input" onChange={this.handleChange}/>
                            <input type="button" id="search-btn" value="Search" onClick={this.handleClick}/>
                        </form>
                    </div>;
       }

        return(
            <Fragment>
                {cont}
            </Fragment>
        );
    }
}

export default SearchInput;