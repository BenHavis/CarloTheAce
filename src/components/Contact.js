import React from 'react'
import styled from 'styled-components'

const Form = styled.form`

  margin-top: 2%;
  input, textarea {
	  	width: 45%;
			padding-top: 1em;
			padding-bottom: .5em;
			margin-bottom: .5em;
			font-size: 1vw;

			&::placeholder {
				padding-left: 2em;
			}
	}
	button {
		background: darkgray;
		font-weight: 900;
		border-radius: 20%/50%;
	  
		padding: .625em 2.25em .625em 2.25em;
	
	
	}
`

const Container = styled.div`
width: 80%;

margin: 0 auto;
margin-top: 5%;
display: flex;
flex-direction: column;
`

const Header = styled.header`
  display: flex;
	flex-direction: column;

	h3 {
		margin-bottom: 1%;
	}
`

const Contact = () => {
  return (
    <Container>
      <Header>
        <h3>Get in Touch</h3>
        <p>If you have any questions about my work or anything in general, please fill out the form below.</p>
      </Header>
      <Form name='contact' method='POST' data-netlify='true'>
        <p>
          <label><input type='text' name='name' placeholder='Name' /></label>
        </p>
        <p>
          <label><input type='email' name='email' placeholder='Your email address' /></label>
        </p>
        <p>
          <label><textarea name='message' placeholder='Message' /></label>
        </p>
        <p>
          <button type='submit'>Send</button>
        </p>
      </Form>
    </Container>
  )
}

export default Contact
