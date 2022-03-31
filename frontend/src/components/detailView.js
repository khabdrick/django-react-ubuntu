import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Delete } from "./deleteButton";
import { Form } from "../components/form";
import { useHistory } from "react-router-dom";

export const Detail = () => {
    const history = useHistory();
    const [contact, setContact] = useState([]);
    const [updateContact, setUpadteContact] = useState('');
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`/app/${id}`)
          .then((response) => response.json())
          .then(data => setContact(data));
      },[id]);   
    const handleFormChange = (inputValue) => {
        setUpadteContact(inputValue);
      };
    
      const handleFormSubmit = () => {
        fetch(`${id}`, {
          method: "PUT",
          body: JSON.stringify({
            detail: updateContact,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((message) => {
            history.push("/");
    
          })
      
      };


      return (
        <div>
          <Form
            input={updateContact}
            onFormChange={handleFormChange}
            onFormSubmit={handleFormSubmit}
          />
           <br/>
           {/* {contact.map((json) => (
        <div key="id">Detail: </div>
      ))} */}
      <div>{contact.name}: {contact.phone_number}</div>
          <br />
          <Delete id={id} /><p>Fill the above to update</p>
          &nbsp;&nbsp;
          <Link to="/">Go Back to Contact List</Link>
        </div>

    );
};