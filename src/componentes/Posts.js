import React, { Component } from 'react';
import Listado from './Listado';
class Posts extends Component {
    state = {  }
    render() { 
        return (
            <div className="col-12 col-md-8">
                <h2 className="text-center">Posts</h2>
                <Listado 
                    posts={this.props.posts} 
                />
            </div>    
        );
    }
}
 
export default Posts;