import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { DateTime } from 'luxon'

const getPostByDate = () => {
    const folder = "content"
    const fileNames = fs.readdirSync(folder)
    const markdownPosts = fileNames.filter((file) => file.endsWith(".mdx"))

    const content = markdownPosts.map((fileName) => {
        const fullpath = path.join(folder,fileName)
        const fileContents = fs.readFileSync(fullpath, "utf8")
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            image: matterResult.data.mainImage,
            description: matterResult.data.description,
            excerpt: matterResult.data.excerpt,
            slug: fileName.replace(".mdx", "")
        }
    })

    const sortBlogPostByDate = content.sort((a,b) => {
        const beforeDate = DateTime.fromFormat(a.date, 'yyyy-MM-dd')
        const afterDate = DateTime.fromFormat(b.date, 'yyyy-MM-dd')
        return afterDate - beforeDate
    })

    return sortBlogPostByDate
    // return content
}
// const getAllPosts = () => {
//     const folder = "content"
//     const fileNames = fs.readdirSync(folder)
//     const markdownPosts = fileNames.filter((file) => file.endsWith(".mdx"))

//     const content = markdownPosts.map((fileName) => {
//         const fullpath = path.join(folder,fileName)
//         const fileContents = fs.readFileSync(fullpath, "utf8")
//         const matterResult = matter(fileContents)
//         return {
//             title: matterResult.data.title,
//             date: matterResult.data.date,
//             description: matterResult.data.description,
//             image: matterResult.data.mainImage,
//             slug: fileName.replace(".mdx", "")
//         }
//     })

//     return content
// }

// export default getAllPosts
export default getPostByDate