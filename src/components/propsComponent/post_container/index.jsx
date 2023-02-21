import {useEffect, useState } from "react";
import React from "react";
//css
import "./style.css";
//component
import { PostCard } from "../post_card/index";
import { Button } from "../Button";
//js
import { loadPosts } from "../../../utils/load_post";
//Components de classe
export function AllPosts () {
 
  const [posts, setPosts] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [page, setPage] = useState(10)
  const [postPerPage] = useState(17)

  const disabledButton = page + postPerPage >= allPosts

  const handleLoadPosts = async () => {
    const postsPhotosComents = await loadPosts(); //chamando a função
    setPosts(postsPhotosComents.slice(page, postPerPage))
    setAllPosts(postsPhotosComents)
  };

  function loadMorePost(){
      const nextPage = page + postPerPage
      const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage)
      posts.push(...nextPosts) //vai pegar todo o conteudo já existente (...) em posts e vai adicionar mais os NextPost
      setPosts(posts)
      setPage(nextPage)
  }

  useEffect(()=>{
    handleLoadPosts()
  }, [])

 

    return (
      <div className="container">
        <div className="container-posts">
          {posts.map((posts) => {
            return (
              <PostCard
                key={posts.id}
                cover={posts.cover}
                title={posts.title}
                email={posts.email}
              />
            );
          })}
        </div>
        <Button
          text="Load More Posts"
          onClick={loadMorePost}
          disabled={disabledButton}
        />
      </div>
    );
  
}
