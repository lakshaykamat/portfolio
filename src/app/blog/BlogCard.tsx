import Link from "next/link"
import { BlogPost } from "../../types"
import getFormattedDate from "../../lib/getFormattedDate"
import Image from "next/image"

const BlogCard = (props: BlogPost) => {
  return (
    <div className="flex flex-col items-start px-4 py-5 rounded drop-shadow-lg bg-slate-800">
      <Image src={props.coverImage} alt={props.title} className="mb-3 rounded-md" width={5000} height={500}/>
        <h2 className="my-2 text-2xl font-semibold">{props.title}</h2>
        <span className="text-gray-400">{getFormattedDate(props.date)}</span>
        <p className="flex-1 my-2 mb-6 text-gray-300">{props.description}</p>
        <Link href={`/blog/${props.id}`} className="btn-indigo">Read more
        </Link>
    </div>
  )
}

export default BlogCard