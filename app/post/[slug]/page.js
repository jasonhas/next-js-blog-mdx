import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import Image from 'next/image'
import { DateTime } from 'luxon'
import Link  from 'next/link'

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

        <div className="flex flex-col max-w-7xl mx-auto px-5 pb-6">
            <div className="text-sm md:text-lg breadcrumbs pb-5">
            <ul>
                <li className='text-blue-600'><Link href="/">Home</Link></li> 
                <li className='text-blue-600'><Link href="/blog">Blog</Link></li> 
                <li>{post.data.title} - (You Are Here)</li>
            </ul>
            </div>
            <h1 className='text-3xl md:text-5xl font-bold'>{post.data.title}</h1>
            <p className='py-4 font-semibold'>{formatted}</p>
            <Image src={post.data.mainImage} height={1080} width={1920} alt="A picture" className='py-4'/>
            <div className='max-w-6xl mx-auto'>
                <Markdown className="prose lg:prose">{post.content}</Markdown>
            </div>

        </div>
    )
}

export default PostPage