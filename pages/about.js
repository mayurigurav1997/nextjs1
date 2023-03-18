import React from 'react'
import styles from '@/styles/About.module.css'

const about = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.center}>About Hunting Coeder</h1>
            <h2>Introduction</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam saepe totam animi obcaecati, illo dolor, laudantium quam quo voluptas pariatur et commodi exercitationem delectus voluptatem?</p>
            <h2>Service Offered</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex eos doloribus perspiciatis deserunt corporis.</p>
            <p>We offered following services</p>
            <ul>
                <li>Services 1</li>
                <li>Services 2</li>
                <li>Services 3</li>
                <li>Services 4</li>
                <li>Services 5</li>
                <li>Services 6</li>
            </ul>
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum laudantium earum temporibus tenetur! Maxime quas accusantium delectus facere.</p>
        </div>
    )
}

export default about