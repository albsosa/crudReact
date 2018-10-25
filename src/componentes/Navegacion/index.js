import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

const Navegacion = () => {
    return ( 
        <nav className="col-12 col-md-8">
            <Link to={'/'}>Todos los post</Link>
            <Link to={'/crear'}>Nuevo Post</Link>
        </nav>

     );
}
 
export default Navegacion;