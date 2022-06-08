import React from 'react'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'

const Container = styled.div`
 
	margin-top: 5%;
	display: flex;


	@media (max-width: 825px) {
    flex-direction: column;
		justify-content: center;
		align-items: center;
		
  }

`


const TimeLineContainer = styled.div`
  
	  
		 height: 100%;
		 width: 17%;
		 box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

		 @media (max-width: 825px) {
			 width: 25%;
			 margin-right: 70%;
			 margin-top: 10%;
		 }
		 
	`

const Form = styled.form`
  width: 100%;
  margin-top: 2%;
  input, textarea {
	  	width: 100%;
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

const FormContainer = styled.div`

margin-right: 22%;
display: flex;
flex-direction: column;
`

const Header = styled.header`
  width: 100%;
  display: flex;
	flex-direction: column;

	h3 {
		margin-bottom: 1%;
	}
	p {
    margin-bottom: 2%;
		width: 100%;
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
    window.fetch('/contact/', {
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
      <FormContainer>
        <Header>
          <h3>Get in Touch</h3>
          <p>If you have any questions about my work or anything in general, please fill out the form below.</p>
        </Header>
        <Form name='contact' method='POST' data-netlify='true' onSubmit={handleSubmit}>
          <p>
            <label htmlFor='name'><input type='text' name='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} /></label>
          </p>
          <p>
            <label htmlFor='email'><input type='email' name='email' placeholder='Your email address' value={email} onChange={(e) => setEmail(e.target.value)} /></label>
          </p>
          <p>
            <label htmlFor='message'><textarea name='message' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} /></label>
          </p>
          <p>
            <button type='submit'>Send</button>
          </p>
        </Form>
      </FormContainer>
      <TimeLineContainer>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'carlotheace'
          }}
          options={{
            height: '600'
          }}
        />
      </TimeLineContainer>
    </Container>
  )
}

export default Contact
