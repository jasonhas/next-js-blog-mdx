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
            description: matterResult.data.description,
            slug: fileName.replace(".mdx", "")
        }
    })

    const sortBlogPostByDate = content.sort((a,b) => {
        const beforeDate = DateTime.fromFormat(a.date, 'yyyy-m-d')
        const afterDate = DateTime.fromFormat(b.date, 'yyyy-m-d')
        // return afterDate - beforeDate
        return beforeDate - afterDate
    })

    return sortBlogPostByDate
    // return content
}
const getAllPosts = () => {
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
            description: matterResult.data.description,
            slug: fileName.replace(".mdx", "")
        }
    })

    return content
}

// export default getAllPosts
export default getPostByDate