import React, { useState } from 'react'
import styles from '@/styles/Contact.module.css'


const contact = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [desc, setdesc] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, phone, desc)
        const data = { name, email, phone, desc }
        fetch("http://localhost:3000/api/postcontact/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.text())
            .then((data) => {
                console.log("Success:", data);
                alert("Thanks for Contacting")
                setphone("")
                setname("")
                setemail("")
                setdesc("")
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    const handleChange = (e) => {
        if (e.target.name == "phone") {
            setphone(e.target.value)
        } else if (e.target.name == "email") {
            setemail(e.target.value)
        } else if (e.target.name == "name") {
            setname(e.target.value)
        } else if (e.target.name == "desc") {
            setdesc(e.target.value)
        }
    }
    return (
        <div className={styles.container}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.mb3}>
                    <label for="name" className={styles.formlabel}>Enter your Name</label>
                    <input required className={styles.input} type="text" id="name" aria-describedby="emailHelp" name="name" value={name} onChange={handleChange} />
                </div>
                <div className={styles.mb3}>
                    <label for="email" className={styles.formlabel}>Email address</label>
                    <input required className={styles.input} type="email" id="email" name="email" aria-describedby="emailHelp" value={email} onChange={handleChange} />
                    <div id="emailHelp" className={styles.formtext}>We'll never share your email with anyone else.</div>
                </div>
                <div className={styles.mb3}>
                    <label for="phone" className={styles.formlabel}>Phone</label>
                    <input required className={styles.input} type="phone" name="phone" id="phone" value={phone} onChange={handleChange} />
                </div>
                <div className={styles.mb3}>
                    <label className={styles.formlabel} for="desc">Elbroarate your concern</label>
                    <textarea className={styles.input} id="desc" onChange={handleChange} value={desc} name="desc" />
                </div>
                <button type="submit" className={styles.btn}>Submit</button>
            </form >

        </div >
    )
}

export default contact