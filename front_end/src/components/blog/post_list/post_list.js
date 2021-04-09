import React, { Component } from 'react';
import {truncate} from '../../../config'
import { Link } from 'react-router-dom';
import ListLeftNav from '../left_nav/list_left_nav';
const axios = require('axios').default;
const FA = require('react-fontawesome');


class PostList extends Component {
    state = { 
        posts: [],
        tags:[],
    }
    taglist = (post) => {
        return post.tags.map((tag,i)=>(<div key={i} className="post__tags__item">
            <Link to="/blog/posts/tags">{tag}</Link>
        </div>))
        }
    postBox = (post) =>{
        if(post.status === 'published'){
            return(<div className = 'post'>
                <div className = 'post__title'><Link to = {`/blog/posts/details/${post.id}/${post.slug}/`}>{post.title}</Link></div>
                <div className="post__info">
                     <span className = "post__info--author">{post.autherName}</span> 
                     <span className="post__info--date">
                        <FA name ="clock-o"/>
                         {post.publishDate}
                         </span>
                </div>
                <div className ="post__body">
                    {truncate(post.body)}
                </div>
                <div className="post__tags">
                    <h3>tags :</h3>
                    {this.taglist(post)}
                </div>
            </div>)
        }
        
    }
    getTags = () =>{
        axios.get(`${process.env.REACT_APP_BLOG_API}/api/tags/`)
        .then(res => this.setState({tags:res.data}))
    }
    getPosts = () =>{
        axios.get(`${process.env.REACT_APP_BLOG_API}/api/posts/`)
        .then(res => this.setState({posts:res.data}))
    }
    componentDidMount(){
        this.getPosts();
        this.getTags();
    }

    render() { 
        return (
            <div className ='home_layout'>
                 <div className="post_list">
                    {this.state.posts.map((post,index)=>
                    (<div key = {index}>
                            {this.postBox(post)}
                    </div>)
                    )}
                </div>
                <ListLeftNav tags = {this.state.tags}/>
            </div>
           
         );
    }
}
 
export default PostList;