import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Post extends Component {

    render() { 
        const {id, title} = this.props.info;
        return ( 
            <tr>
            <td>{id}</td>
                <td>{title}</td>
                <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <Link to={`/post/${id}`} className="btn btn-success"><i className="far fa-eye"></i></Link>
                        <button  type="button" className="btn btn-danger"><i className="fas fa-trash-alt"></i></button>
                    </div>
                </td>
            </tr>
         );
    }
}
 
export default Post;