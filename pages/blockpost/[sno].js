import React from 'react'
import { useRouter } from "next/router"

const Post = () => {
    const router = useRouter()
    console.log(router, "router")
    const { sno } = router.query
    return (
        <div>Post: {sno}</div>
    )
}

export default Post