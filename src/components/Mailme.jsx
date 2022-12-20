import React, { useState,useRef } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Mailme=({lengua})=>{
    
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    if(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(form.current.user_email.value)&&form.current.user_name.value&&form.current.message.value){
          emailjs.sendForm('service_2y6crrs', 'template_ykgkm3y', form.current, 'vVh07og247qHCNLeh')
      .then((result) => {
          alert( lengua==="eng"?"The message was sent successfully!!, I will answer you as soon as possible": "El mensaje fue enviado exitosamente!!, te responderé tan pronto como sea posible")
          form.current.user_name.value="";
          form.current.user_email.value="";
          form.current.message.value="";
      }, (error) => {
          alert(error.text);
      });
    }else{
      alert( lengua==="eng"?"Make sure that all the fields are filled in correctly and the email is valid": "Asegurate que todos los campos están llenos correctamente y el correo sea valido")
    }
  };
  

    return(
        <>
        <div className="mailme" onClick={handleShow}>
        {lengua==="eng"?<>Message Me</>:<>Escríbeme</>}
        <img src="https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/media/email-ico.svg" alt="email" className='iconflag' />
        </div>

        <Offcanvas variant="dark" show={show} onHide={handleClose} placement="end"  scroll={true} backdrop={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{lengua==="eng"?<>Send me a Message</>:<>Envíame un Mensaje</>}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form ref={form} onSubmit={sendEmail}>
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" name="user_name" placeholder={lengua==="eng"?"Your name":"Ingresa tu nombre"} />
      <Form.Label>Email</Form.Label>
      <Form.Control type="email"  name="user_email" placeholder={lengua==="eng"?"Your email":"Ingresa tu email"} />
      <Form.Text className="text-muted">
           {lengua==="eng"?<>This email will not be shared with anyone else.</>:<>Este email no será compartido a nadie mas.</>}
        </Form.Text> <br /> <br />
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows="5" type="text" placeholder={lengua==="eng"?"Message...":"Mensaje ..."} name="message" /> <br />
      <Button variant="secondary" type="submit" value="Send" >{lengua==="eng"?<>Send</>:<>Enviar</>}</Button>
    </Form>
        </Offcanvas.Body>
      </Offcanvas>

        </>
    )
}

export default Mailme;