import { Component } from 'react'


//Components de classe
export default class App extends Component {
        state = {
            posts: [
                {
                    id: 1,
                    image: 'https://www.fashionbubbles.com/wp-content/uploads/2020/12/ilhas-maldivas.png',
                    tittle: 'Título 1',
                    description: 'Esse título é o primeiro'
                },
                {
                    id: 2,
                    image: 'https://images03.brasildefato.com.br/69de07e1959cf5d981247714b6955440.jpeg',
                    tittle: 'Título 2',
                    description: 'Esse título é o segundo'
                },
                {
                    id: 3,
                    image: 'https://s4.static.brasilescola.uol.com.br/be/2021/07/torre-eiffel.jpg',
                    tittle: 'Título 3',
                    description: 'Esse título é o terceiro'
                },
            ]
        };
    

    render() {
        const {posts} = this.state


        return (
            <>
               {posts.map((posts)=>{
                return(
                    <div key={posts.id}>
                        <img src={posts.image} />
                        <h1>{posts.tittle}</h1>
                        <p>{posts.description}</p>
                    </div>
                )
               })}
            </>
        );
    }
}