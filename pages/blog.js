import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';

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
    const [count, setCount] = useState(4)

    const fetchMoreData = async () => {
        console.log(count, "count")
        let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`)
        setCount(count + 2)
        let data = await d.json()
        setBlogs(data)
    };

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <InfiniteScroll
                    dataLength={blogs.length} //This is important field to render the next data
                    next={fetchMoreData}
                    hasMore={props.allCount !== blogs.length}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {blogs.map((blogItem) => {
                        return <div className={styles.blogItemh3} key={blogItem.slug}>
                            <Link href={`/blockpost/${blogItem.slug}`}>
                                <h3 className={styles.blogItemh3}>{blogItem.title}</h3>
                                <p className={styles.blogItemp}>{blogItem.content.substr(0, 140)}...</p>
                            </Link>
                            <Link href={`/blockpost/${blogItem.slug}`}><button className={styles.btn}>Read More</button>
                            </Link>
                        </div>
                    })}
                </InfiniteScroll>


            </main >
        </div >
    )
}


export async function getStaticProps(context) {
    let data = await fs.promises.readdir("blogdata");
    let allCount = data.length;
    let myfile;
    let allBlogs = [];
    for (let index = 0; index < 4; index++) {
        const item = data[index];
        // console.log(item);
        myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
        // console.log(myfile);
        allBlogs.push(JSON.parse(myfile));
    }
    return {
        props: { allBlogs, allCount }, // will be passed to the page component as props
    }
}

// export async function getServerSideProps(context) {
//     let data = await fetch('http://localhost:3000/api/blogs')
//     let allBlogs = await data.json();
//     return {
//         props: { allBlogs }, // will be passed to the page component as props
//     }
// }

export default blog