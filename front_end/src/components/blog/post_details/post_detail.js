import React, { Component } from 'react';
const axios = require("axios").default;
const FA = require("react-fontawesome");

class PostDetails extends Component {
    state = { 
        post:[],
        author:[]
    }
    getDetails = () =>{
        axios.get(`${process.env.REACT_APP_BLOG_API}/api/posts/${this.props.match.params.id}/`)
        .then(resp => {
            let post = resp.data
            axios.get(`${process.env.REACT_APP_BLOG_API}/api/users/${post.author}/`)
            .then(resp => {
                this.setState({author:resp.data,post:post})
        })
        })
    }
    componentDidMount(){
        this.getDetails();
    }
    render() { 
        let author = this.state.author
        let post = this.state.post
        return ( <div className="post_details">
            <div className ="post_details__primary">
                <div className="post_details__info">
                    <div className = 'author_date'>
                        <h1>{author.username} </h1>
                        <div className = 'date'>
                            <FA name ="clock-o"/>
                            {post.publish}
                        </div>
                    </div>
                 <h3 className="email">email : {author.email}</h3>
                </div>
                <h1 className = 'post_details__title'>
                    {post.title}
                </h1>
                <div className="post_details__body">
                    {post.body}
                </div>
                <div className="post_details__tag-list">
                    
                </div>
                <div className ="post_details__comments">
                    
                </div>
            </div>
            
        </div> );
    }
}
 
export default PostDetails;