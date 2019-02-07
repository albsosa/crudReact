import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert2';

class Post extends Component {

    confirmarEliminacion = () => {

            const {id} = this.props.info;

            swal({
                title: 'Estas seguro??',
                text: "Esta acción no se puede deshacer!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, borrar!',
                cancelButtonText : 'Cancelar'
            }).then((result) => {
                if (result.value) {
                    this.props.borrarPost(id)
                    swal(
                        'Eliminado!',
                        'El post ha sido eliminado.',
                        'success'
                    )
                }
            })

        
    }

    render() { 
        const {id, title} = this.props.info;
        return ( 
            <tr>
            <td>{id}</td>
                <td>{title}</td>
                <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <Link to={`/post/${id}`} className="btn btn-success"><i className="far fa-eye"></i></Link>
                        <Link to={`/editar/${id}`} className="btn btn-warning"><i className="far fa-edit"></i></Link>
                        <button onClick={this.confirmarEliminacion}  type="button" className="btn btn-danger"><i className="fas fa-trash-alt"></i></button>
                    </div>
                </td>
            </tr>
         );
    }
}
 
export default Post;