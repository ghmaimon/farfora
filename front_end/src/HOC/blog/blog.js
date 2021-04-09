import React, { Component } from 'react';
import Header from '../../components/blog/header/navBar';
import Footer from '../../components/blog/footer/footer';


class Blog extends Component {
    state = { 

     }
    render() { 
        return ( <div>
            <Header/>
            <div className = "layout">
                {this.props.children}
            </div>
            <Footer/>
        </div> );
    }
}
 
export default Blog;