import React, { useState, useEffect } from "react";
import { Card } from "./card";
import { Form } from "./form";

export const ContactPage = () => {
  const [contact, setContact] = useState([]);
  const [addContact, setAddContact] = useState("");

  useEffect(() => {
    fetch("/app/list")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setContact(data));
  }, []);

  const handleFormChange = (inputValue) => {
    setAddContact(inputValue);
  };

  const handleFormSubmit = () => {
    fetch("/app/create", {
      method: "POST",
      body: JSON.stringify({
        detail: addContact,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((message) => {
        console.log(message);
        setAddContact("");
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
      <Form
        input={addContact}
        onFormChange={handleFormChange}
        onFormSubmit={handleFormSubmit}
      />
      <Card listOfContacts={contact} />
    </>
  );
};
