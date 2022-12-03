export const loadPosts = async () => {
  
  const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
  //   .then(response => response.json())
  //   .then(json => this.setState({posts: json}))
  // .then(posts => this.setState({posts}))
  // .then(json => console.log(json))
  const photosReponse = fetch("https://jsonplaceholder.typicode.com/photos");
  const emailReponse = fetch("https://jsonplaceholder.typicode.com/comments");

  const [posts] = await Promise.all([postsResponse]);
  const [photos] = await Promise.all([photosReponse]);
  const [email] = await Promise.all([emailReponse]);

  const postsJson = await posts.json();
  const photosJson = await photos.json();
  const emailJson = await email.json();

  const postsPhotosComents = postsJson.map((posts, index) => {
    return {
      ...posts,
      email: emailJson[index].email,
      ...posts,
      cover: photosJson[index].url,
    };
  });

  return postsPhotosComents
};