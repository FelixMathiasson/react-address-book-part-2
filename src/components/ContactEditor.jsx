import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"

export default function ContactEditor() {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        city: '',
        street: '',
        email: '',
        profileImage: 'https://www.gravatar.com/avatar'
    })

    const params = useParams()

    const nav = useNavigate()

    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/FelixMathiasson/contact/${params.id}`)
            .then((response) => response.json())
            .then((data) => {
                setContact(data)
            })
    }, [params.id])
        
    function ManageSubmission(e) {
        e.preventDefault()
        fetch(`https://boolean-uk-api-server.fly.dev/FelixMathiasson/contact/${params.id}`, {
            method: 'PUT', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contact),
        })
            .then((response) => response.json())
            .then(() => {
                nav('/contacts'); 
            })
    }

    function ManageChange(e) {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }

    return(
        <>
            <h2>Edit Contact</h2>

            <form onSubmit={ManageSubmission}>
                <label htmlFor='firstName'>First Name</label>
                <input
                    type='text'
                    name='firstName'
                    value={contact.firstName}
                    onChange={ManageChange}
                />
                <label htmlFor='lastName'>Last Name</label>
                <input
                    type='text'
                    name='lastName'
                    value={contact.lastName}
                    onChange={ManageChange}
                />
                <label htmlFor='city'>City</label>
                <input
                    type='text'
                    name='city'
                    value={contact.city}
                    onChange={ManageChange}
                />
                <label htmlFor='street'>Street</label>
                <input
                    type='text'
                    name='street'
                    value={contact.street}
                    onChange={ManageChange}
                />
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    name='email'
                    value={contact.email}
                    onChange={ManageChange}
                />
                <button type='submit'>Save Changes</button>
            </form>
        </>
    )
}