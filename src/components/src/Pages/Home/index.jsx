import { useContext } from "react";
import { GlobalContext } from "../../context";
import BlogContent from "../../Components/blog-content";

export default function Home() {
  const { blogs } = useContext(GlobalContext);
  console.log(blogs);

  return (
    <div className="flex items-center justify-center" >
      <BlogContent />
    </div>
  );
}
