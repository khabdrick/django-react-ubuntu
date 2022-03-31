import React from "react";
import {Link} from "react-router-dom"

export const Card = ({ listOfContacts }) => {
  return (
    <>
      {listOfContacts.map(contact => {
          console.log(contact.id)
        return (
            
          <ul key={contact.id}>
              

            <li className="links"><Link to={`${contact.id}`}>{contact.name}: {contact.phone_number}</Link></li>
          </ul>
        );
      })}
    </>
  );
};
