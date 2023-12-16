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
    <main className="flex flex-col px-6 py-12 mx-auto sm:items-center sm:mx-48">
    <h1 className="mb-6">{data.title}</h1>
    <p className="mb-3 font-semibold">{pubDate}</p>
    {
      <section className="prose prose-p:leading-relaxed sm:prose-p:leading-loose prose-h1:text-gray-200 prose-invert prose-slate prose-p:text-lg" dangerouslySetInnerHTML={{__html:data.contentHtml}}>

      </section>
    }
    
    </main>
  )
}

export default BlogContent