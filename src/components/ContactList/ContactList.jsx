// import { useSelector } from "react-redux";
import ContactElement from './ContactElement/ContactElement';
import css from "./ContactList.module.css"

const ContactList = ({ contacts }) => {
    return (
        <ul className={css.list}>
            {contacts.map(({ id, name, phone }) => {
                return (
                    <ContactElement 
                        contactItem={{ id, name, phone }}
                        key={id}
                    />
                )
            })}
        </ul>
    )
}

export default ContactList;