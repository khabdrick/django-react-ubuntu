import React from "react";
import {Link} from "react-router-dom"

export const Card = ({ listOfContacts }) => {
  return (
    <>
      {listOfContacts.map(contact => {
          // console.log(todo)
        return (
            
          <ul key={contact.id}>
              

            <li className="links"><Link to={`${contact.id}`}>{contact.detail}</Link></li>
          </ul>
        );
      })}
    </>
  );
};
