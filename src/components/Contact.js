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
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  function encode (data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  function handleSubmit (e) {
    e.preventDefault()
    window.fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message })
    })
      .then(() => window.alert('Message sent!'))
      .catch((error) => window.alert(error))
		
			setEmail('')
			setMessage('')
			setName('')
  }

  return (
    <Container>
      <Header>
        <h3>Get in Touch</h3>
        <p>If you have any questions about my work or anything in general, please fill out the form below.</p>
      </Header>
      <Form name='contact' method='POST' data-netlify='true' onSubmit={handleSubmit}>
        <p>
          <label><input type='text' name='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} /></label>
        </p>
        <p>
          <label><input type='email' name='email' placeholder='Your email address' value={email} onChange={(e) => setEmail(e.target.value)} /></label>
        </p>
        <p>
          <label><textarea name='message' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} /></label>
        </p>
        <p>
          <button type='submit'>Send</button>
        </p>
      </Form>
    </Container>
  )
}

export default Contact
