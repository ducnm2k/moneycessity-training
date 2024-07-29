import { useState, useEffect } from "react";

export default function Posts() {
  const [user, setUser] = useState(1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user}`)
      .then((res) => {
        return res.json();
      })
      .then((posts) => {
        return setPosts(posts);
      });

    return () => {};
  }, [user]);

  return (
    <div style={{ margin: 15 }}>
      <h1>Posts</h1>
      <button
        onClick={() => {
          setUser(1);
        }}
        style={user == 1 ? { color: "#fff", background: "#333" } : {}}
      >
        User 1
      </button>
      <button
        onClick={() => {
          setUser(2);
        }}
        style={user == 2 ? { color: "#fff", background: "#333" } : {}}
      >
        User 2
      </button>
      <button
        onClick={() => {
          setUser(3);
        }}
        style={user == 3 ? { color: "#fff", background: "#333" } : {}}
      >
        User 3
      </button>

      <ul>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <li>{post.title}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
