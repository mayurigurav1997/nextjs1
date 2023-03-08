import React from 'react'
import { useRouter } from "next/router"
import styles from '@/styles/Blockpost.module.css'

const Slug = () => {
    const router = useRouter()
    console.log(router, "router")
    const { slug } = router.query
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