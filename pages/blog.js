import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'


const blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        console.log("useeffect is running")
        fetch('http://localhost:3000/api/blogs').then((a) => {
            return a.json();
        }).then((parsed) => {
            console.log(parsed)
            setBlogs(parsed)
        })
    }, [])
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {blogs.map((blogItem) => {
                    return <div className={styles.blogItemh3} key={blogItem.slug}>
                        <Link href={`/blockpost/${blogItem.slug}`}>
                            <h3 className={styles.blogItemh3}>{blogItem.title}</h3>
                            <p className={styles.blogItemp}>{blogItem.content.substr(0, 140)}...</p>
                        </Link>
                    </div>
                })}

            </main >
        </div >
    )
}

export default blog