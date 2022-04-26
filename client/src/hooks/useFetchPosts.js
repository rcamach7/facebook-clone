import { useState, useEffect } from "react";
import { getPosts } from "../assets/api";

export default function useFetchPosts(storedJwt) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getPosts();
        setPosts(posts);
      } catch (error) {
        console.log(error);
      }
    };
    if (storedJwt && posts === null) {
      fetchPosts();
    }
  }, [posts, storedJwt]);

  return [posts, setPosts];
}
