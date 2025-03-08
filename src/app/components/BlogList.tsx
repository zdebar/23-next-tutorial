import { useState } from "react";
import ReactMarkdown from "react-markdown"; 
import { blogPosts } from "../data/blogPosts";

export default function BlogList() {
  const [openPostId, setOpenPostId] = useState<string | null>(null);

  const togglePost = (id: string) => {
    setOpenPostId(openPostId === id ? null : id);
  };

  return (
    <section className="blog-container" id="blog">
      {blogPosts.map((post) => (
        <article key={post.id} className="blog-post">
          <h3>{post.title}</h3>
          <time dateTime={post.date}>{post.date}</time> 
          <p>{post.description}</p>

          <button onClick={() => togglePost(post.id)} aria-expanded={openPostId === post.id}>
            {openPostId === post.id ? "Skrýt" : "Číst více"}
          </button>

          {openPostId === post.id && (
            <div>
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          )}
        </article>
      ))}
    </section>
  );
}
