import { Component } from 'react'
import React from 'react';
import './external_data.css'

//Components de classe
export default class App extends Component {
    state = {
        posts: []
    };

    timeoutUpdate = null

    //Quando o component (o que estiver dentro do return) for montado, essa função irá disparar
    componentDidMount() {
        this.loadPosts()
       
    }

    loadPosts = async ()=>{
      const postsResponse =  fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(json => this.setState({posts: json}))
      // .then(posts => this.setState({posts}))
      // .then(json => console.log(json))
      const photosReponse = fetch('https://jsonplaceholder.typicode.com/photos')
      const emailReponse = fetch('https://jsonplaceholder.typicode.com/comments')

    
      const [posts] = await Promise.all([postsResponse])
      const [photos] = await Promise.all([photosReponse])
      const [email] = await Promise.all([emailReponse])


      const postsJson = await posts.json()
      const photosJson = await photos.json()
      const emailJson = await email.json()

      const postsPhotosComents = postsJson.map( (posts, index) => {
         return {
            ...posts, email: emailJson[index].email,
            ...posts, cover: photosJson[index].url
         }
      })
    
      this.setState({posts: postsPhotosComents})
    }

    //Quando algum estado do component mudar, essa função irá disparar
    componentDidUpdate() {


    }

    //Se o component for desmontado, essa função irá disparar
    componentWillUnmount() {

    }




    render() {
        const { posts } = this.state

        return (
            <div className='container'>
                {posts.map((posts) => {
                    return (
                        <div key={posts.id} className='container__Card'>
                            <img src={posts.cover} />
                            <h1>{posts.title}</h1>
                            <p>{posts.body}</p>
                            <hr />
                            <strong>{posts.email}</strong>
                        </div>  
                    )
                })}

                <button></button>
            </div>
        );
    }
}