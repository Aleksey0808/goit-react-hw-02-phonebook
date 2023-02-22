export function ContactList({ filter, onDeleteContacts }) {
  return (
    <ul>
      {filter.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name} - {number}
            <button onClick={() => onDeleteContacts(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
