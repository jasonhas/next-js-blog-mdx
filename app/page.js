import Image from 'next/image'
import Link from 'next/link'
import Post from '@/components/getPosts'

export default function Home() {

  const post = Post()
  const displayDate = post[0].date;
  const d = new Date(displayDate)
  const date = d.toDateString()
  const image = post[0].image;
  console.log(image)

  return (
    <div className='max-w-7xl mx-auto flex flex-col'>
      <div className='mx-auto'>
        <h2 className='text-2xl font-bold'>{post[0].title}</h2>
        <span>{date}</span>
        <Image src={image} width={1920} height={1080} alt="NFL Pic" className='p-4 lg:p-0'/>
        <p className='py-5'>Click <Link href={`/post/${post[0].slug}`}>Here</Link></p>
      </div>
      <p>Click <Link href={'/blog'}>Here</Link> to get to the blog page</p>
    </div>
  )
}
