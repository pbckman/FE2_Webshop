import React, {useState} from 'react';
import emailjs from "@emailjs/browser"
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: auto;
`;

const StyledInput = styled.input`
  width: 400px;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid lightgrey;
  background-color: #f5f5f5;
`;

const StyledTextarea = styled.textarea`
  width: 400px;
  height: 200px;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid lightgrey;
  background-color: #f5f5f5;
`;

const StyledButton = styled.button`
  width: 415px;
  padding: 15px;
  background-color: #007BECFF;
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid lightgrey;

  &:hover {
    background-color: #005fa3;
`;


function EmailForm(props) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const serviceId = "service_lk33ppp"
        const templateId = "template_e0zgn2t"
        const publicKey = "KoU0hesj0xE--gOSM"


        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "AlpineStore",
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully!", response);
                alert(" Tack så mycket för ditt meddelande! Vi har mottagit din förfrågan och kommer att svara så snart som möjligt. Tills dess, njut av ditt åkande och håll dig uppdaterad med de senaste produkterna och erbjudandena hos AlpineStore.")
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch((error) => {
                console.error("Error sending email:", error)
            })

    }

    return (
        <StyledForm onSubmit={handleSubmit} className="emailForm">
            <StyledInput
                type="text"
                placeholder="Ditt namn"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <StyledInput
                type="email"
                placeholder="Din mailadress"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <StyledTextarea
                cols="30"
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></StyledTextarea>
            <StyledButton type="submit">Skicka Mail</StyledButton>
        </StyledForm>
    );
}

export default EmailForm;