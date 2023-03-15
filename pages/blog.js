import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'fs';

const blog = (props) => {
    console.log(props)
    const [blogs, setBlogs] = useState(props.allBlogs)
    // useEffect(() => {
    //     // console.log("useeffect is running")
    //     fetch('http://localhost:3000/api/blogs').then((a) => {
    //         return a.json();
    //     }).then((parsed) => {
    //         // console.log(parsed)
    //         setBlogs(parsed)
    //     })
    // }, [])
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


export async function getStaticProps(context) {
    let data = await fs.promises.readdir("blogdata");
    let myfile;
    let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        // console.log(item);
        myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
        // console.log(myfile);
        allBlogs.push(JSON.parse(myfile));
    }
    return {
        props: { allBlogs }, // will be passed to the page component as props
    }
}

export default blog