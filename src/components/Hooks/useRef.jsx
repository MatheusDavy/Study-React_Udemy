import { useEffect, useMemo, useRef, useState } from 'react';

const Post = ({ post, handleClick }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id} className="post">
      <h1 onClick={()=> handleClick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export function UseRefComponent() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null)

  console.log('Pai renderizou!');

  // Component did mount
  useEffect(() => {

      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
   
  }, []);

  useEffect(()=>{
    input.current.focus()
  }, [value])

  function handleClick(value){
    setValue(value)
  }

  return (
    <div className="App">
      <p>
        <input
          ref={input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} handleClick={handleClick}/>;
          })
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda não existem posts.</p>}
    </div>
  );
}