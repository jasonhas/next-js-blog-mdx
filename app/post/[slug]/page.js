import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import Image from 'next/image'
import { DateTime } from 'luxon'

const getPostContent = (slug) => {
    const folder = "content/"
    const file = `${folder}${slug}.mdx`
    const content = fs.readFileSync(file, "utf8")
    const matterResult = matter(content)

    return matterResult
}


const PostPage = ({params}) => {
    const slug = params.slug;
    const post = getPostContent(slug)
    const dt = DateTime.fromFormat(post.data.date, 'yyyy-MM-dd')
    const formatted = dt.toFormat('MMMM dd, yyyy')
    return (
        <div className="flex flex-col max-w-7xl mx-auto px-5">
            <h1>{post.data.title}</h1>
            <span>{formatted}</span>
            <Image src={post.data.mainImage} height={1080} width={1920} alt="A picture"/>
            <span>{post.data.description}</span>
            <Markdown className="prose lg:prose">{post.content}</Markdown>
        </div>
    )
}

export default PostPage