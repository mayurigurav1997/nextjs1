import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import styles from '@/styles/Blockpost.module.css'

const Slug = () => {
    const [blog, setBlog] = useState([])
    useEffect(() => {
        const router = useRouter()
        // console.log(router, "router")
        const { slug } = router.query
        fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
            return a.json();
        }).then((parsed) => {
            // console.log(parsed)
            setBlog(parsed)
        })
    }, [])

    return (
        <>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1>Title of the page {slug}</h1>
                    <hr />
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas reprehenderit ea illo nobis deleniti excepturi rem, odio quia culpa ipsum quam maiores, obcaecati odit quasi?</div>
                </main>
            </div>
        </>
    )
}

export default Slug