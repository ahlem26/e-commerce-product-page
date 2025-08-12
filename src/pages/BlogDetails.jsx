// src/pages/BlogDetails.jsx
import { useParams } from "react-router-dom";
import { blogPosts } from "../data/BlogData.jsx";
import { EnTete } from "../components/EnTete";

export default function BlogDetails() {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) {
    return <p className="text-center py-10">Article introuvable</p>;
  }

  return (
    <div>
      <EnTete
        image={post.image}
        texte1={post.title}
        texte2={`Home / Blog / ${post.title}`}
      />

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        <h1 className="text-3xl font-bold text-black">{post.title}</h1>
        <div className="text-gray-500 text-sm">
          {post.date} • {post.comments} Comments
        </div>
        <p className="text-gray-700 leading-relaxed">{post.content}</p>
      </div>
    </div>
  );
}
