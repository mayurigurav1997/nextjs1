import React, { useState } from 'react'
import styles from '@/styles/Contact.module.css'

const handleSubmit = (e) => {
    e.preventDefault()
}
const handleChange = (e) => {

}
const contact = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [desc, setdesc] = useState("")
    return (
        <div className={styles.container}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.mb3}>
                    <label for="name" className={styles.formlabel}>Enter your Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name="name" value={name} onChange={handleChange} />
                </div>
                <div className={styles.mb3}>
                    <label for="email" className={styles.formlabel}>Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={email} onChange={handleChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className={styles.mb3}>
                    <label for="phone" className={styles.formlabel}>Phone</label>
                    <input type="phone" className="form-control" name="phone" id="phone" value={phone} onChange={handleChange} />
                </div>
                <div className={styles.mb3}>
                    <label for="desc">Elbroarate your concern</label>
                    <textarea className="form-control" placeholder="Write your concern here" id="desc" value={desc} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default contact