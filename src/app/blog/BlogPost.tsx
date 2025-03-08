import ReactMarkdown from "react-markdown";
import styles from "./BlogPost.module.css";

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    date: string;
    description: string;
    content: string;
  };
  isOpen: boolean;
  togglePost: (id: string) => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, isOpen, togglePost }) => {
  return (
    <article key={post.id} className="blog-post">
      <h3>{post.title}</h3>
      <time dateTime={post.date}>{post.date}</time>
      <p>{post.description}</p>

      <button
        className={styles.expand}
        onClick={() => togglePost(post.id)}
        aria-expanded={isOpen}
      >
        {isOpen ? "Skrýt" : "Číst více"}
      </button>

      {isOpen && (
        <div>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      )}
    </article>
  );
};

export default BlogPost;
