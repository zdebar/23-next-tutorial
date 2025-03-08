"use client";

import { useState } from "react";
import { blogPosts } from "../data/blogPosts";
import BlogPost from "./BlogPost";

export default function BlogList() {
  const [openPostId, setOpenPostId] = useState<string | null>(null);

  const togglePost = (id: string) => {
    setOpenPostId((prevId) => (prevId === id ? null : id));
  };

  return (
    <main>
      {[...blogPosts].reverse().map((post) => (
        <BlogPost
        key={post.id}
        post={post}
        isOpen={openPostId === post.id}
        togglePost={togglePost}
      />
      ))}
    </main>
  );
}
