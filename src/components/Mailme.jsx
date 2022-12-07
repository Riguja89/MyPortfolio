import React, { useState,useRef } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import emailjs from '@emailjs/browser';


const Mailme=()=>{
    
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_2y6crrs', 'template_ykgkm3y', form.current, 'vVh07og247qHCNLeh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  

    return(
        <>
        <div className="mailme" onClick={handleShow}>
            Escribeme 
        </div>

        <Offcanvas show={show} onHide={handleClose} placement="end"  scroll={true} backdrop={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
        </Offcanvas.Body>
      </Offcanvas>

        </>
    )
}

export default Mailme;