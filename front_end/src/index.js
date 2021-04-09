import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/css/styles.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BlogHome from './components/blog/blogHome/blog_home';

const router = (
  <BrowserRouter>
    <Switch>
        <Route path='/blog' component = {BlogHome}/>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(router,document.getElementById('root')
);

