title: Abolition. Feminism. Now.

author: Angela Y. Davis, Gina Dent, Erica R. Meiners, Beth E. Richie

stars: 4.35

category: Social-Justice

img_url: https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1590836554i/53657256.jpg

content: An urgent, vital manifesto of intersectional, internationalist, abolitionist feminism, from leading scholar-activists Angela Y. Davis, Gina Dent, Erica Meiners, and Beth E. Richie.

As a politic and a practice, abolition increasingly shapes our political moment—halting the construction of new jails and propelling movements to divest from policing. Yet erased from this landscape are the central histories of feminist organizing—usually queer, anti-capitalist, grassroots, and women of color—that continue to cultivate abolition. Also erased is a recognition of the stark reality: abolition is our best response to endemic forms of state and interpersonal gender and sexual violence.

Amplifying the analysis and the theories of change generated from vibrant community based organizing, Abolition. Feminism. Now. surfaces necessary historical genealogies, key internationalist learnings, and everyday practices to grow our collective and flourishing present and futures.

comment: This was an excellent read!

// set up so any user can comment on any other book
// front end update, only add the book to the list if it doesn't already exist when a comment is added to books outside of user book list

Fugiat laborum irure magna eu culpa. Esse est eiusmod eu veniam minim. Occaecat Lorem laboris ex id occaecat quis dolor. Sit quis qui id anim ad incididunt laborum culpa est laboris aliquip esse. Ad laboris nisi irure nostrud sit elit. Amet proident ex cupidatat veniam eu culpa enim consequat proident est fugiat.Ut reprehenderit non eiusmod qui cupidatat commodo. Laboris pariatur do quis magna. Reprehenderit esse ut ea culpa sit nisi pariatur. Nisi aliquip sint minim excepteur mollit incididunt eu laborum adipisicing dolore laboris velit eu enim.

import { useState } from 'react';

export const App = () => {

  interface person {
    name: string
    age: string
    address:{
      street: string, 
      city: string, 
      stateZip:{
        state: string, 
        zip: string
      }
    }
    contact: {email: string}[]
  }

  let initialState: person = {
    name: "Lance",
    age: "36",
    address: {street: "100 Some street", city: "Edmond", stateZip:{state: "Oklahoma", zip: "73034"}},
    contact: [{email: "abc@learnbestcoding.com"}, {email: "aab@learnbestcoding.com"}]
  }

    const inputStyle = {border: "1px solid black", height: 75, "padding": 10, "text-align": "center"}
    const displayStyle = {border: "1px solid black", height: 250, "padding": 10}
    const [person, setPerson] = useState<person>(initialState)

    const updatePerson = (event: HTMLInputElement) => {
 
        const {name, value} = event
        if(name === "name" || name === "age")
        {
          setPerson((prevPerson) => {
              return {...prevPerson, [name]: value}
          })
        }
        if(name === "street" || name === "city")
        {
          setPerson((prevPerson) => {
            const newPerson = {...prevPerson}
            newPerson.address[name] = value
            return newPerson
          })
        }
        if(name === "state" || name === "zip")
        {
          setPerson((prevPerson) => {
            const newPerson = {...prevPerson}
            newPerson.address.stateZip[name] = value
            return newPerson
          })
        }
    }
    const addEmail = () => {
      setPerson((prev) => {
        return {...prev, contact: [...prev.contact, {email: Math.random()+"@learnbestcoding.com"}]}
      })
    }
    
     return(
       <>
       <table>
         <tr>
           <td>
         <table style={inputStyle}>
           <tbody>
             <tr><td>Name:</td><td><input type="text" name="name" value={person.name} onChange={(e) => updatePerson(e.target)}/></td></tr>
             <tr><td>Age:</td><td><input type="number" name="age" value={person.age} onChange={(e) => updatePerson(e.target)}/></td></tr>
             <tr><td>Street:</td><td><input type="text" name="street" value={person.address.street} onChange={(e) => updatePerson(e.target)}/></td></tr>
             <tr><td>City:</td><td><input type="text" name="city" value={person.address.city} onChange={(e) => updatePerson(e.target)}/></td></tr>
             <tr><td>State:</td><td><input type="text" name="state" value={person.address.stateZip.state} onChange={(e) => updatePerson(e.target)}/></td></tr>
             <tr><td>Zip:</td><td><input type="number" name="zip" value={person.address.stateZip.zip} onChange={(e) => updatePerson(e.target)}/></td></tr>
             {person.contact.map((email, index) => {
             return <tr key={index}><td>Email:</td><td><input type="text" name="email" value={email.email} disabled/></td></tr>
             })}
             <tr><td colSpan={2}><button onClick={addEmail}>Add email</button></td></tr>
           </tbody>
         </table>
         </td>
         <td>
         <table style={displayStyle}>
           <tbody>
             <tr><td>Name:</td><td>{person.name}</td></tr>
             <tr><td>Age:</td><td>{person.age}</td></tr>
             <tr><td>Street:</td><td>{person.address.street}</td></tr>
             <tr><td>City:</td><td>{person.address.city}</td></tr>
             <tr><td>State:</td><td>{person.address.stateZip.state}</td></tr>
             <tr><td>Zip:</td><td>{person.address.stateZip.zip}</td></tr>
             {person.contact.map((email, index) => {
                return <tr key={index}><td>Email:</td><td>{email.email}</td></tr>
             })}
           </tbody>
         </table>
         </td>
         </tr>
      </table>
       </>
     )
     
   }
export default App;