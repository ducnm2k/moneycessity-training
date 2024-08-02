import axios, { PUBLICATION_ID } from "../../Utils/axios";
import { useEffect, useState } from "react";

//  function Post() {
//   const [post, setPost] = useState();

//   let subtitle = "";

// useEffect(() => {
//   async function fetchData() {
//     const res = await axios.get(`/publications/${PUBLICATION_ID}/posts`);
//     return res;
//   }
//   setPost(fetchData());
// }, []);

//   console.log("post: ", post);

//   return (
//     <div>
//       Hello World!!
//       {/* {(post)? post.data.data[0].subtitle: <></>} */}
//     </div>
//   );
// }

function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/publications/${PUBLICATION_ID}/posts`
        );
        setPosts(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log("POSTS:", posts);
  return (
    <div>
      <h1>Data from API</h1>
      {posts[0].authors}
      {/* <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul> */}
      {posts.map((post) => {
        return (
          <div key={post.id} style={{ width: "60%", outline: "thick solid #000", margin: "auto" }}>
            <h2>{post.title}</h2>
            <img src={post.thumbnail_url} style={{ width: "20%" }}/>
            <br/>
            <a>{post.preview_text}</a>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
