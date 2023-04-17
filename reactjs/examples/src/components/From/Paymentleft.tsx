import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { toast } from 'react-toastify';
import { useState } from 'react'


export const Playmentleft = () =>{

  const [email, setemail] =  useState("")
  const [numbers, setnumbers] = useState("")
  const [cvv, setcvv] = useState("")
  const [date, setdate] = useState("")
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
    const handleSumit = (event) =>{
        event.preventDefault();
        const isvalidateEmail = validateEmail(email)
        if(!isvalidateEmail){
          toast.error("Cu phap email");
          return ;
        }

        if(!numbers){
          toast.error("Theu Number")
          return;
        }
        if(!cvv){
          toast.error("Theu cvv")
          return;
        }
        if(!date){
          toast.error("Theu date")
          return;
        }

        let data = {
          email:email,
          numbers:numbers,
          cvv:cvv,
          date:date,
        }
        console.log(data)
        toast.success("You payment was successfull!")
    }
    return(
        
     <div> 
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email" 
        value={email}
       onChange={(event) => setemail(event?.target.value )}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Credit Card Number</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="xxxx xxxx xxxx xxxx" 
        value={numbers}
        onChange={(event) => setnumbers(event?.target.value)}
        
        />
      </Form.Group>
      <Row>
        <Col>
        <Form.Label>Expiry Date</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="mm  / yy" 
          value={date}
        onChange={(event) => setdate(event?.target.value)}
          
          />
        </Col>
        <Col>
        <Form.Label>CVV</Form.Label>
          <Form.Control 
          type="text"  
          placeholder="xxx" 
          value={cvv}
          onChange={(event) => setcvv(event?.target.value)}
            
          />
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        type="checkbox" 
        label="I've a prome code" 
        />
      </Form.Group>
      <div>
            <div className='Paymentleft-title'>
           <p>Subtotal</p>
           <p>$96</p>
            </div>
            <div className='Paymentleft-title'>
            <p>Platform Fee</p>
            <p>$4</p>
            </div>
            <div className='Paymentleft-title'>
            Total Amount
            <p>$100</p>
            </div>
      </div>
      <Button variant="primary" type="submit" onClick={(event) => handleSumit(event)}>
       Make payment
      </Button>
    </Form>
        
        </div>
    )
}

