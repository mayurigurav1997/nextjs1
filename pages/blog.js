import React, { useEffect } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'


const blog = () => {
    useEffect(() => {
        console.log("useeffect is running")
        fetch('http://localhost:3000/api/blogs').then((a) => {
            return a.json();
        }).then((parsed) => {
            console.log(parsed)
        })
    })
    return (
        <div className={styles.container}>
            <main className={styles.main}>

                <div className="blogs">
                    <div className={styles.blogItemh3}>
                        <Link href={'/blockpost/learn-javascript'}>
                            <h3>How to learn Javascript in 2023?</h3></Link>
                        <p>Javascript is the language used to design logic for web.</p>
                    </div>
                    <div className="blogItem">
                        <h3>How to learn Javascript in 2023?</h3>
                        <p>Javascript is the language used to design logic for web.</p>
                    </div>
                    <div className="blogItem">
                        <h3>How to learn Javascript in 2023?</h3>
                        <p>Javascript is the language used to design logic for web.</p>
                    </div>
                    <div className="blogItem">
                        <h3>How to learn Javascript in 2023?</h3>
                        <p>Javascript is the language used to design logic for web.</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default blog