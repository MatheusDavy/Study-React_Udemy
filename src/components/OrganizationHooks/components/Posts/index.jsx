import { useContext, useEffect, useRef, useState } from "react";
import { incrementCounter, decrementCounter } from "../../contexts/CounterProvider/actions";
import { CounterContext } from "../../contexts/CounterProvider/context";
import { loadPost } from "../../contexts/PostsProvider/actions";
import { PostsContext } from "../../contexts/PostsProvider/context";

export function Posts() {
  const [isMounted, setIsMounted] = useState(true);

  const {counterState, counterDispatch} = useContext(CounterContext);
  const { postsState, postsDispatch } = useContext(PostsContext);

  useEffect(() => {
    loadPost(postsDispatch).then((dispatch) => {
      if (isMounted) {
        console.log(postsState.loading)
        dispatch();
      }
    });

    return () => setIsMounted(false);
  }, [postsDispatch]);


  return (
    <div>
      <div style={{display: 'flex', gap: '30px'}}>
      <button onClick={()=>{ decrementCounter(counterDispatch) }}>Increment</button>
        <span>{counterState.counter}</span>
        <button onClick={()=>{ incrementCounter(counterDispatch) }}>Increment</button>
      </div>

      <h1>Hello</h1>

      {postsState.loading && <h3>loading posts...</h3>}

      {postsState.posts.map((post) => {
        return <h3 key={post.id}>{post.title}</h3>;
      })}
    </div>
  );
}
