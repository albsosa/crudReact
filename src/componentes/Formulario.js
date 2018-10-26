import React, { Component } from 'react';

class Formulario extends Component {
    tituloRef= React.createRef();
    contenidoRef= React.createRef();

    crearPost = (e) => {
        e.preventDefault();

        //leer el ref
        const post = {
            title: this.tituloRef.current.value,
            body: this.contenidoRef.current.value,
            userId: 1
        }
        this.props.crearPost(post);

    }
    
    render() { 
        return ( 
            <form onSubmit={this.crearPost} className="col-8">
                <legend className="text-center">Crear nuevo post</legend>
                <div className="form-group">
                    <label>Titulo del Post:</label>
                    <input type="text" ref={this.tituloRef} className="form-control" placeholder="Titulo del post" />
                </div>
                <div className="form-group">
                    <label>Contenido:</label>
                    <textarea className="form-control" ref={this.contenidoRef}></textarea>
                </div>
                <button className="btn btn-success" type="submit">Crear </button>
            </form>
         );
    }
}
 
export default Formulario;