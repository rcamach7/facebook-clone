import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "../features/posts/postsSlice";
import { getPosts } from "../data/api";

const useFetchPosts = () => {
  const posts = useSelector((state) => state.posts.value);
  const jwtToken = useSelector((state) => state.jwtToken.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getPosts();
        dispatch(setPosts(posts));
      } catch (error) {
        console.log(error);
      }
    };
    if (jwtToken && posts === null) {
      fetchPosts();
    }
  }, [posts, jwtToken, dispatch]);
};

export default useFetchPosts;
