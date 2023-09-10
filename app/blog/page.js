import PostsMeta from '@/components/getPosts'
import Link from 'next/link'

const Posts = () => {
    const blogs = PostsMeta()

    return (
        <div className="posts mx-auto flex flex-col max-w-7xl">

            <div>
            {blogs.map((post) => (
                <div key={post.slug}>
                    <Link href={`post/${post.slug}`} className='hover:text-blue-400'><h2 className='text-2xl'>{post.title}</h2></Link>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Posts