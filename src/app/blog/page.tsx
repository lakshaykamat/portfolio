import { getSortedPostsData } from "../../lib/blogPost"
import BlogCard from "./BlogCard"

const BlogPage = () => {
  const posts = getSortedPostsData()
  return (
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
       <h1 className="mb-8">
          Blogs
        </h1>
        <div className="grid gap-6 px-3 md:grid-cols-2 lg:grid-cols-3">
          {
            posts.map((post)=><BlogCard key={post.id} title={post.title} date={post.date} description={post.description} id={post.id}/>)
          }
        </div>
    </div>
  )
}

export default BlogPage