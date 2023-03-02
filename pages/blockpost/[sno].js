import React from 'react'
import { useRouter } from "next/router"
import styles from '@/styles/Home.module.css'

const Post = () => {
    const router = useRouter()
    console.log(router, "router")
    const { sno } = router.query
    return (
        <>
            <div className={styles.main} >Post: {sno}</div>
        </>
    )
}

export default Post