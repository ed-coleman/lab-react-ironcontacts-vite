import "./App.css";
import contacts from "./contacts.json";
import Contact from "./Contact";
import { useState } from "react";

function App() {
  // setFive = method to change the state of five
  const [five, setFive] = useState(contacts.slice(0, 5));
  const [remContacts, setRemContacts] = useState(contacts.slice(6));
  // let randomContact = contacts.filter((contact, i) => i > 4)

  function getRandomContact() {
    let randomIndex = Math.floor(Math.random() * remContacts.length);
    let randomContact = remContacts[randomIndex];
    setFive([...five, randomContact])
    let filteredArr = remContacts.filter((oneContact) => {
      if (oneContact.name !== randomContact.name) {
        return oneContact
      }
    })
    setRemContacts(filteredArr)

  }



  return (
    <div className="App">
      <button onClick={getRandomContact}>Add Random Contact</button>
      <h1>Iron Contacts</h1>
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </thead>
        <tbody>
          {five.map((contact) => (
            <Contact contact={contact} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
