import { Component } from "react";
import React from "react";
//css
import "./style.css";
//component
import { PostCard } from "../post_card/index";
import { Button } from "../Button";
//js
import { loadPosts } from "../utils/load_post";
//Components de classe
export default class App extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 2,
  };

  timeoutUpdate = null;

  //Quando o component (o que estiver dentro do return) for montado, essa função irá disparar
  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postPerPage } = this.state;
    const postsPhotosComents = await loadPosts(); //chamando a função
    this.setState({
      posts: postsPhotosComents.slice(page, postPerPage),
      allPosts: postsPhotosComents,
    });
  };

  loadMorePost = ()=>{
      const {
        page,
        postPerPage,
        allPosts,
        posts,
      } = this.state;

      const nextPage = page + postPerPage
      const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage)
      posts.push(...nextPosts) //vai pegar todo o conteudo já existente (...) em posts e vai adicionar mais os NextPost
      this.setState({posts, page: nextPage})
  }

  render() {
    const { posts } = this.state;
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
          onClick={this.loadMorePost} //Isto aqui não é um evento, é uma props
        />
      </div>
    );
  }
}
