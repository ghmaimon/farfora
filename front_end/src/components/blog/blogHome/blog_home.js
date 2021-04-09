import React, { Component } from 'react';
import Blog from '../../../HOC/blog/blog';
import {Route, Switch} from 'react-router-dom';
import PostDetails from '../post_details/post_detail';
import PostList from '../post_list/post_list';




class BlogHome extends Component {
    state = { 

    }
    render() { 
        return ( <div>
            <Blog>
                <Switch>
                    <Route path='/blog/posts/details/:id/:slug/' component = {PostDetails}/> 
                    <Route path = '/blog/posts' component = {PostList}/>  
                </Switch>
            </Blog>
        </div> );
    }
}
 
export default BlogHome;