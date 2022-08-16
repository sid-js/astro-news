import React from "react";

const NewsCard = (props) => {
  return (
    
    <a href={props.post.url} class="font-astro block overflow-hidden rounded-2xl  bg-gray-900 h-[30rem] max-h-[30rem] hover:scale-105 hover:-translate-y-1 duration-500">
      <img
        class="object-cover w-full h-56"
        src={props.post.imageUrl}
        alt=""
      />

      <div class="p-4">
        <p class="text-xs text-gray-500">{props.post.newsSite}</p>

        <h5 class="text-xl text-white hover:text-blue-500">
          {props.post.title}
        </h5>

        <p class="mt-1 text-sm text-ellipsis overflow-hidden text-gray-500 max-h-full pb-5">
          {props.post.summary}...
        </p>
      </div>
    </a>
  );
};

export default NewsCard;
