import { getPostData, getSortedPostsData } from "../../../lib/blogPost"
import {notFound } from 'next/navigation'
import getFormattedDate from "../../../lib/getFormattedDate"

const BlogContent = async ({params}:{ params:{ blogSlug:String}}) => {

  const posts = getSortedPostsData()
  const { blogSlug } = params

  if(!posts.find(post => post.id == blogSlug)){
    return notFound()
  }

  const data = await getPostData(blogSlug.toString())

  const pubDate = getFormattedDate(data.date)
  return (
    <main className="flex flex-col max-w-3xl px-6 py-12 mx-auto sm:items-center">
    <h1 className="mb-6">{data.title}</h1>
    <p className="mb-3 font-semibold">{pubDate}</p>
    {
      <section className="prose prose-h1:text-gray-200 prose-invert prose-slate" dangerouslySetInnerHTML={{__html:data.contentHtml}}>

      </section>
    }
    
    </main>
  )
}

export default BlogContent