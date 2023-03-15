import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import styles from '@/styles/Blockpost.module.css'
import * as fs from 'fs';

const Slug = (props) => {
    const [blog, setBlog] = useState(props.myBlog)
    // const router = useRouter()
    // console.log(router, "router")
    // useEffect(() => {
    //     if (!router.isReady) return;
    //     const { slug } = router.query
    //     fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
    //         return a.json();
    //     }).then((parsed) => {
    //         // console.log(parsed)
    //         setBlog(parsed)
    //     })
    // }, [router.isReady])

    return (
        <>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1>{blog && blog.title}</h1>
                    <hr />
                    <div>{blog && blog.content}</div>
                </main>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { slug: 'how-to-learn-flask' } }, { params: { slug: 'how-to-learn-javascript' } }, { params: { slug: 'how-to-learn-react' } }],
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context) {
    console.log(context)
    const { slug } = context.params;
    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

    return {
        props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
    }
}
// export async function getServerSideProps(context) {
//     // console.log(context.query.slug)
//     const { slug } = context.query
//     let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//     let myBlog = await data.json();
//     return {
//         props: { myBlog }, // will be passed to the page component as props
//     }
// }

export default Slug