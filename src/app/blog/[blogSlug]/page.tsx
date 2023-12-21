import { getPostData, getSortedPostsData } from "../../../lib/blogPost";
import { notFound } from "next/navigation";
import getFormattedDate from "../../../lib/getFormattedDate";
import Image from "next/image";

const BlogContent = async ({ params }: { params: { blogSlug: String } }) => {
  const posts = getSortedPostsData();
  const { blogSlug } = params;

  if (!posts.find((post) => post.id == blogSlug)) {
    return notFound();
  }

  const data = await getPostData(blogSlug.toString());

  const pubDate = getFormattedDate(data.date);
  return (
    <main className="flex flex-col items-center p-6 mx-auto mb-12 max-w-3xl">
      <Image
        width={750}
        height={600}
        alt={data.title}
        className="rounded-md"
        src={data.coverImage}
      />
      <div>
      <h1 className="mt-6 text-4xl xl:text-5xl">{data.title}</h1>
      <p className="mt-3 font-semibold">{pubDate}</p>
      </div>
        <section
          className="prose lg:prose-lg prose-pre:w-[20rem] sm:prose-pre:w-auto prose-pre:mx-auto prose-p:leading-relaxed sm:prose-p:leading-loose prose-h1:text-gray-200 prose-invert prose-slate prose-p:text-lg"
          dangerouslySetInnerHTML={{ __html: data.contentHtml }}
        ></section>
    </main>
  );
};

export default BlogContent;
