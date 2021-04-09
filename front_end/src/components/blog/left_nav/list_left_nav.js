import React from 'react';
import { Link } from 'react-router-dom';


const ListLeftNav =(props) => {
    return ( <div className = 'left_nav'>
                <div className = "nav_title" >tags</div>
                <div className = 'tag_list'>
                {props.tags.map(tag =>{
                    return (<div key = {tag.id} className = 'tag_item'>
                        <Link to = "/blog/posts">{tag.name}</Link>
                    </div>)
                })}
            </div>
        </div> );
}
 
export default ListLeftNav;