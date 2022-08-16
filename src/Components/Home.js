import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const Home = () => {
  const apiURL = "https://api.spaceflightnewsapi.net/v3/articles";
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const fetched = await axios.get(apiURL).then((response) => {
        setPosts(response.data);
        console.log(response.data)
      });
    };
    fetchPosts();
  }, []);

  return (
    <div className="w-full flex justify-center ">
    <div className="flex flex-col max-w-[70%] py-20 items-center justify-center justify-self-center">
      <div className="py-1 pb-10 text-white font-astro text-7xl border-b border-purple-900">
        Explore.
      </div>
      <div className="grid gap-7 grid-cols-3 grid-flow-row py-5 px-5 justify-center">
        {posts.map((post) => {
          return <NewsCard id={post.id} post={post} />;
        })}
      </div>
    </div>
    </div>
  );
};

export default Home;
