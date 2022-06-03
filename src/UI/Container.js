import React from 'react'
import styled from 'styled-components'

const Container = (props) => {
  const Container = styled.div`
    
		 width: 85%;
		 max-width: 85%;
		 margin: 0 auto;
		 height: 100vh;

	`
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default Container
