import React from 'react'
import styled from 'styled-components'
import image from '../assets/profile-picture.png'
import { SocialIcon } from 'react-social-icons'

const About = () => {
  const ImageContainer = styled.div`
     margin-top: 5%;
     display: flex;
     justify-content: space-between;

  `
  const Image = styled.img`
  border-radius: 40%;
  width: 30%;
  height: 100%;


`
  const QuoteContainer = styled.blockquote`
  width: 55%;
  margin-top: 5%;
  text-align: center;
  
  display: flex;
  flex-direction: column;
  `
  const AboutBio = styled.p`
  margin-top: 8%;
  height: 75%;
  font-size: 1.5vw;
  line-height: 1.75em;
  display: flex;
  flex-direction: column;
  `
  const AboutHeader = styled.h2`
  height: 15%;
  `
  const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 9%;
  `

  return (
    <ImageContainer>
      <Image src={image} alt='Profile photo' />
      <QuoteContainer>
        <AboutHeader className='about-me-header'>About Me</AboutHeader>
        <AboutBio className='about-bio'>
          <p>I am CarloTheAce. I'm a San Diego based community leader with a passion for AR photography.
            Ever since I was young, playing Pokemon games, and watching the series, I've dreamt of someday seeing these creatures in our world. With the advent of Pokemon GO
            and then introducing AR photo mode, I was inspired to start taking my own photos and sharing them with the world. I play Pokemon GO for the love of the game, and the lasting friendships I've made along the way.
          </p>
          <SocialIconsContainer className='social-icons-container'>
            <SocialIcon target='_blank' url='https://twitter.com/carlotheace' />
            <SocialIcon target='_blank' url='https://www.instagram.com/carlo_theacephotos' />
            <SocialIcon target='_blank' url='https://discord.gg/GDd3RebntP' />
          </SocialIconsContainer>
        </AboutBio>

      </QuoteContainer>
    </ImageContainer>
  )
}

export default About
