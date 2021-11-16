import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Container from "./components/Container";
import Filter from "./components/Filter";


function App() {
  
  return (
    <>
      <Container title={"Phonebook"}>
        <ContactForm />
      </Container>

      <Container title={"Contacts"}>
        <Filter />
        <ContactList />
      </Container>
    </>
  );
};


export default App;



//===================REDUX_WITHOUT_TOOLKIT=================//

// import "./App.css";
// import ContactForm from "./components/ContactForm";
// import ContactList from "./components/ContactList";
// import Container from "./components/Container";
// import Filter from "./components/Filter";
// import {addContact, changeContact} from './redux/contacts/contacts-actions'
// import { connect } from "react-redux";


// function App({contacts,filter,changeContact,addContact}) {
//   const formSubmitHandler = item => {
  
//     const normalizedName = item.name.toLowerCase();
//     contacts.find(el =>
//       {return el.name.toLowerCase() === normalizedName }
//       )
//       ? alert(`${item.name} is already in contacts`)
//         : contacts.find(
//           el=> {return el.number.toLowerCase() === item.number},
//           )
//           ? alert(`${item.number} is already in contacts`)
//           : addNewContact(item);
//           console.log(item);
    
//   };

//   const addNewContact = item => {
//     addContact(item);
//     console.log('item:',item);
//   };

//   const filterContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     )
//       .sort((a, b) => a.name.localeCompare(b.name))
//   };

//   const changeFilter = ({target}) => {
//     console.log(target.value);
//     changeContact(target.value);
//   };

//   return (
//       <>
//         <Container title={"Phonebook"}>
//         <ContactForm onSubmit={formSubmitHandler} />
//         </Container>

//         <Container title={"Contacts"}>
//           <Filter value={filter} onChange={changeFilter} />
//           <ContactList contacts={filterContacts()}
           
//           />
//         </Container>
//       </>
//     );
// }

// const mapStateToProps = state => {
//   console.log(state.contacts);
//   return {
//     contacts: state.contacts,
//     filter: state.filter,
//   };
// };
// const mapDispatchToProps = { changeContact, addContact };

// export default connect(mapStateToProps,mapDispatchToProps)(App);