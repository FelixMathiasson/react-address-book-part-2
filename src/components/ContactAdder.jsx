import { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function ContactAdder() {
    const [newContact, setNewContact] = useState({
        firstName: '',
        lastName: '',
        city: '',
        street: '',
        email: '',
        profileImage: 'https://www.gravatar.com/avatar'
    })

    const nav = useNavigate();

    function ManageSubmission(e) {
        e.preventDefault()
        fetch('https://boolean-uk-api-server.fly.dev/FelixMathiasson/contact', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newContact)
        }).then((response) => response.json()).then(() => {
            nav('/contacts')
        })
    }

    function ManageChange(e) {
        setNewContact({...newContact, [e.target.name]: e.target.value})
    }

    return(
        <>
            <h2>Add a contact</h2>

            <form onSubmit={ManageSubmission}>
                <label htmlFor='firstName'>First Name</label>
                <input
                    type='textbox'
                    name='firstName'
                    value={newContact.firstName}
                    onChange={ManageChange}
                />
                <label htmlFor='lastName'>Last Name</label>
                <input
                    type='textbox'
                    name='lastName'
                    value={newContact.lastName}
                    onChange={ManageChange}
                />
                <label htmlFor='city'>City</label>
                <input
                    type='textbox'
                    name='city'
                    value={newContact.city}
                    onChange={ManageChange}
                />
                <label htmlFor='street'>Street</label>
                <input
                    type='textbox'
                    name='street'
                    value={newContact.street}
                    onChange={ManageChange}
                />
                <label htmlFor='email'>Email</label>
                <input
                    type='textbox'
                    name='email'
                    value={newContact.email}
                    onChange={ManageChange}
                />
                <button type='submit'>Add Contact</button>
            </form>
        </>
    )
}