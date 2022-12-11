import React, { useState,useRef } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Mailme=()=>{
    
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_2y6crrs', 'template_ykgkm3y', form.current, 'vVh07og247qHCNLeh')
      .then((result) => {
          alert("El mensaje fue enviado exitosamente, te respondere tan pronto como sea posible")
          form.current.user_name="";
      }, (error) => {
          console.log(error.text);
      });
  };
  

    return(
        <>
        <div className="mailme" onClick={handleShow}>
            Escribeme 
        </div>

        <Offcanvas variant="dark" show={show} onHide={handleClose} placement="end"  scroll={true} backdrop={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Envíame un Mensaje</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form ref={form} onSubmit={sendEmail}>
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" name="user_name" placeholder="Ingresa tu nombre" />
      <Form.Label>Email</Form.Label>
      <Form.Control type="email"  name="user_email" placeholder="Ingresa tu email" />
      <Form.Text className="text-muted">
          Este email no será compartido a nadie mas.
        </Form.Text> <br /> <br />
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows="5" type="text" placeholder="Mensaje ..." name="message" /> <br />
      <Button variant="secondary" type="submit" value="Send" >Enviar</Button>
    </Form>
        </Offcanvas.Body>
      </Offcanvas>

        </>
    )
}

export default Mailme;