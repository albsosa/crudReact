import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Navegacion from './Navegacion';
import Posts from './Posts';
import SinglePost from './SinglePost';
import Formulario from './Formulario';
import swal from 'sweetalert2';
import Editar from './Editar';

class Router extends Component {
    state = {
        posts : []
    }

    componentDidMount () {
        this.obtenerPost();
    }

    obtenerPost = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(respuesta => {
            this.setState({
                posts: respuesta.data
            })
        })
    }

    borrarPost = (id)  =>  {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            if(res.status === 200){
                const posts = [...this.state.posts];
                let resultado = posts.filter(post => (
                    post.id != id
                ));
                this.setState({
                    posts: resultado
                })
            }
        })
    }
    crearPost = (post) => {
        axios.post(`https://jsonplaceholder.typicode.com/posts`, {post})
        .then(res => {
            if(res.status === 201){
              
                swal.fire(
                  'Post Creado!',
                  'El Post se creo correctamente!',
                  'success'
                )
                let postId= {id: res.data.id};
                const nuevoPost = Object.assign({}, res.data.post, postId);
                this.setState(prevState=> ({
                    posts: [...prevState.posts, nuevoPost]
                }))
            }
        })

    }
    editarPost = (postActualizado) => {
        //  console.log(postActualizado);

         const {id} = postActualizado;

         axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {postActualizado})
            .then(res => {
                if(res.status === 200) {

                    // swal(
                    //     'Post Actualizado',
                    //     'Se guardó correctamente',
                    //     'success'
                    // )

                    // let postId = res.data.id;

                    // const posts = [...this.state.posts];

                    // const postEditar = posts.findIndex(post => postId === post.id );

                    // posts[postEditar] = postActualizado;

                    // this.setState({
                    //     posts
                    // })

                    this.obtenerPost();
                }
            })
     }
    render() { 
        return ( 
            <BrowserRouter>
                <div className="container">
                    <div className="row justify-content-center">
                        <Header />     
                        <Navegacion />   
                        <Switch>
                            <Route exact path="/" render={ () => {
                                return ( 
                                    <Posts 
                                        posts={this.state.posts}
                                        borrarPost= {this.borrarPost}
                                    />  
                                )
                            }                               
                            }
                            />
                            <Route exact path="/post/:postId" render={ (props) => {
                                //Del pathname se tiene que quitar el /post/  para que solo quede el ID
                                let idPost = props.location.pathname.replace('/post/', '');
                                const posts = this.state.posts;
                                let filtro;
                                filtro = posts.filter(post => (
                                    post.id === Number(idPost)
                                ))
                                return (
                                    <SinglePost
                                        post={filtro[0]}
                                    />
                                )
                                
                            }}
                            />
                            <Route exact path="/crear" render={ () => {
                                return ( 
                                    <Formulario 
                                        crearPost={this.crearPost}
                                    />  
                                )
                            }                               
                            }
                            />
                            <Route exact path="/editar/:postId" render={ (props) => {
                                //Del pathname se tiene que quitar el /editar/  para que solo quede el ID
                                let idPost = props.location.pathname.replace('/editar/', '');
                                const posts = this.state.posts;
                                let filtro;
                                filtro = posts.filter(post => (
                                    post.id === Number(idPost)
                                ))
                                return (
                                    <Editar
                                        post={filtro[0]}
                                        editarPost={this.editarPost}
                                    />
                                )
                                
                            }}
                            />
                        </Switch>       
                    </div>
                </div>
            </BrowserRouter>
         );
    }
}
 
export default Router;