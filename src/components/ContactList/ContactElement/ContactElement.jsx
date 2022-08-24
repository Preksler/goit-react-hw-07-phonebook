import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../../redux/mokeApi'
import Photo from '../../../images/No-photo.png'
import css from "./ContactElement.module.css"

const ContactElement = ({ contactItem }) => {
    const { id, name, phone } = contactItem;
    const [deleteContact] = useDeleteContactMutation();
    
    return (
        <li
            key={id}
            className={css.list__item}>
            <img className={css.liat__avatar} src={Photo} alt="avatar" />
            <div>
                
                <div className={css.list__name}>{name}</div>
                <div className={css.list__number}>{phone}</div>
            </div>
            <button
                className={css.list__btn}
                type="button"
                id={id}
                onClick={(e) => deleteContact(e.target.id)}>
                Delete
            </button>
        </li>
    )
}

ContactElement.propTypes = {
    contactItem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    })
}

export default ContactElement;