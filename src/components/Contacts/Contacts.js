import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/slices/contactSlice';

const Contacts = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(state => state.contacts.items);
  const filterItems = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = contactList.filter(el =>
    el.name.toLowerCase().includes(filterItems.toLowerCase())
  );

  const component = visibleContacts.map(({ id, name, phone }) => {
    return (
      <li key={id}>
        <p>
          {name}: {phone}
        </p>
        <button
          type="button"
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <div>
      <ul>
        {contactList.length >= 1 ? (
          component
        ) : (
          <li>
            <p>Нет сохраненных контактов</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Contacts;
