import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'

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
    return (
        <div className="flex flex-col max-w-7xl mx-auto px-5">
            <h1>{post.data.title}</h1>
            <span>On:{post.data.date}</span>
            <span>{post.data.description}</span>
            <Markdown className="prose lg:prose">{post.content}</Markdown>
        </div>
    )
}

export default PostPage