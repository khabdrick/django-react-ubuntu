import React, { useState, useEffect } from "react";
import { Card } from "./card";
import { Form } from "./form";

export const ContactPage = () => {
  const [contact, setContact] = useState([]);
  const [name1, setName1] = useState(null)
  const [phone_number, setPhone_number] = useState(null) 
  
  let formField = new FormData()
  formField.append('name',name1)
  formField.append('phone_number',phone_number)

  useEffect(() => {
    fetch("/app/list")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        
      })
      .then((data) => setContact(data));
      
  }, []);

  

  const handleFormSubmit = () => {
    fetch("/app/create", {
      method: "POST",
      body:formField,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((message) => {
        console.log(message);
        getUpdate();
      });
  };

  const getUpdate = () => {
    fetch("/app/list")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setContact(data));
  };

  return (
    <>
      <Form/>

      <Card listOfContacts={contact} />
    </>
  );
};
