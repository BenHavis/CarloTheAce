import React from 'react'
import photos from '../data'
import styled from 'styled-components'

const Homepage = () => {
	const Wrapper = styled.div`

	margin-top: 5%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;




	@media (max-width: 825px) {
		flex-wrap: nowrap;
		flex-direction: column;
		justify-content: center;
		width: 22em;
		column-gap: 3em;
		align-content: center;
		margin: 0 auto;
		margin-top: 3em;
		
	}
	`

	const Image = styled.img`
	   max-width: 100%;
		 max-height: auto;
		 height: 100%;
		 width: 100%;
		 margin: 3%;
		 box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

		 @media (max-width: 825px) {
	      margin-top: 5%;
	}

		 
	`

	const ImageContainer = styled.div`
   
	  display: flex;
		flex-direction: column;
    margin: 2%;
	
		width: 19vw;
		text-align: center;

	

		@media (max-width: 825px) {
	
		 margin-bottom: 10%;
		 display: flex;
		 flex-direction: column;
		 width: 40vw;
		 justify-content: center;
		 align-items: center;
		 margin: 0 auto;
		 
	}
	
	`

	const ImageTitle = styled.p`
	font-weight: 500;
  
	color: orangered;
	
	`


	return (
		<Wrapper>
		{photos.map((photo) => 
			<ImageContainer>
			<Image src={photo.url} alt={photo.title} />
			<ImageTitle>{photo.title}</ImageTitle>
			</ImageContainer>
		)}
		</Wrapper>

	)
}

export default Homepage