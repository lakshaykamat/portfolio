import Link from "next/link"
import { BlogPost } from "../../types"
import getFormattedDate from "../../lib/getFormattedDate"

const BlogCard = (props: BlogPost) => {
  return (
    <div className="px-5 py-3 rounded bg-slate-800 drop-shadow-lg">
        <h2 className="my-2 text-2xl font-semibold">{props.title}</h2>
        <span className="text-gray-400">{getFormattedDate(props.date)}</span>
        <p className="my-2 mb-6">{props.description}</p>
        <Link href={`/blog/${props.id}`} className="mb-6 btn-blue-500">Read more
        </Link>
    </div>
  )
}

export default BlogCard