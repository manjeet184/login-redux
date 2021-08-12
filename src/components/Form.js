import React, { useState } from 'react'
import { Container, TextField, Button } from '@material-ui/core'
import Display from '../components/Display'
import { ADD } from '../Services/Action/action'
const Form = (props) => {
  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [mobile, setMobile] = useState([])

  const addObject = {
    userName: name,
    userEmail: email,
    userMobile: mobile,
  }

  // console.log('object', addObject)
  ADD(addObject)
  console.log('Form Props from controller ', props)
  return (
    <div>
      <Container maxWidth="sm">
        <h5>Login your details</h5>
        <form>
          <TextField
            name="name"
            label="Enter Your Name"
            variant="standard"
            type="TextField"
            onChange={(e) => setName(e.target.value)}
          ></TextField>
          <br />
          <TextField
            name="email"
            label="Email"
            variant="standard"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <br />
          <TextField
            name="mobile"
            label="Mobile"
            variant="standard"
            type="Number"
            onChange={(e) => setMobile(e.target.value)}
          ></TextField>
          <br /> <br />
          <Button
            variant="contained"
            color="secondary"
            onClick={() =>
              props.addHandler({
                userName: name,
                userEmail: email,
                userMobile: mobile,
              })
            }
          >
            Add Data
          </Button>
        </form>
        <hr />
        <hr />
      </Container>
      <Display item={props} />
    </div>
  )
}

export default Form
