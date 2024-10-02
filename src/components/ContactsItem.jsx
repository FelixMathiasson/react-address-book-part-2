import {Link} from 'react-router-dom'

export default function ContactsItem({contact, setContact}) {


    return (
        <li>
            <Link to={`/contacts/${contact.id}`} onClick={() =>  setContact(contact)}>
                {contact.firstName} {contact.lastName}
            </Link>
        </li>
    )
}