import React, {useEffect, useState} from 'react';
import emailjs from "@emailjs/browser"
import styled, {keyframes} from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: auto;
`;

const StyledInput = styled.input`
  font-family: Montserrat, sans-serif;
  width: 400px;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid lightgrey;
  background-color: #f5f5f5;
`;

const StyledTextarea = styled.textarea`
  font-family: Montserrat, sans-serif;
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
  background-color: ${(props) => (props.disabled ? '#003b6b' : '#007BECFF')};
  color: ${(props) => (props.disabled ? '#b9b9b9' : '#ffffff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: 10px;
  border: 1px solid lightgrey;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#007BECFF' : '#005fa3')};
  }
`;

const StyledLoading = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat, sans-serif;
  color: #007bec;
  margin-top: 20px;
`;


function EmailForm(props) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [isSent, setIsSent] = useState(localStorage.getItem('isEmailSent') === 'true');
    const [disableButton, setDisableButton] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!message.trim() || !email.trim() || !name.trim()){
            alert("Var vänlig fyll i namn, email och meddelande.")
            return;
        }

        if (disableButton) {
            alert("Var god vänta innan du skickar ett till meddelande.")
        }

        setLoading(true)

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
                setIsSent(true);
                setDisableButton(true);

                // Disable the button for 10 seconds (adjust the time as needed)
                setTimeout(() => {
                    setDisableButton(false);
                }, 10000); // 10 seconds in milliseconds
            })
            .catch((error) => {
                console.error("Error sending email:", error)
            })
            .finally(() => {
                setLoading(false);
            });

    };

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
                placeholder="Meddelande"
                cols="30"
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></StyledTextarea>
            <StyledButton type="submit" disabled={loading || disableButton}>
                {loading ? 'Skickar...' : disableButton ? 'Skickat' : 'Skicka Mail'}
            </StyledButton>
            {loading && <StyledLoading>Laddar...</StyledLoading>}
        </StyledForm>
    );
}

export default EmailForm;