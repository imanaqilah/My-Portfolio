import React from 'react'
import styled from 'styled-components';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

function LeftMain() {
    return (
        <Container>
            <ElementTag>
                <p>&lt;html&gt;</p>
            </ElementTag>

            <ElementTag style={{ marginLeft: "2px" }}>
                <p>&lt;body&gt;</p>
            </ElementTag>

            <TextContainer>
                <ElementTag style={{ marginBottom: "-1rem", marginTop: "-2rem" }}>
                    <p>&lt;h1&gt;</p>
                </ElementTag>

                <HelloText>
                    <h1>Hello, I'm Iman Aqilah.</h1>
                </HelloText>

                <ElementTag>
                    <p>&lt;/h1&gt;</p>
                </ElementTag>

                <ElementTag style={{ marginBottom: "-1rem" }}>
                    <p>&lt;p&gt;</p>
                </ElementTag>

                <DescriptionText>
                    <p>A web designer and front-end developer who is passionate about creating clear, efficient and beautiful user interfaces. My coding journey began with a dream to build JARVIS from Iron Man (ambitious, I know :P). I'm currently interested in the entire front-end spectrum and would love to work on projects with positive people.</p>
                </DescriptionText>

                <ContactContainer>
                    <ContactLinksSM>
                        <EmailIcon style={{ marginRight: "5px" }} /><a href="mailto:imanaqilahh@hotmail.com">Email me!</a>
                        {/* <ul>
                    <li> <GitHubIcon style={{ color: "white", fontSize: "large" }} />GitHub</li></ul> */}
                    </ContactLinksSM>
                    <ContactLinksSM>
                        <GitHubIcon style={{ marginRight: "5px" }} /><a href="https://github.com/imanaqilah" target="_blank" rel="noreferrer">GitHub</a>
                    </ContactLinksSM>
                </ContactContainer>

                <ElementTag>
                    <p>&lt;/p&gt;</p>
                </ElementTag>

                <Breadcrumbs>
                    <li>
                        01 ------ PROJECTS
                    </li>
                    <li>
                        02 ------ SKILLS
                    </li>
                    <li>
                        03 ------ EDUCATION
                    </li>
                    {/* <li>
                        04 ------ WORK EXPERIENCE
                    </li> */}
                </Breadcrumbs>
            </TextContainer>


            <ContactContainer style={{ marginTop: "-1em" }}>
                <ContactLinks>
                    <EmailIcon style={{ marginRight: "5px" }} /><a href="mailto:imanaqilahh@hotmail.com">Email me!</a>
                    {/* <ul>
                    <li> <GitHubIcon style={{ color: "white", fontSize: "large" }} />GitHub</li></ul> */}
                </ContactLinks>
                <ContactLinks>
                    <GitHubIcon style={{ marginRight: "5px" }} /><a href="https://github.com/imanaqilah" target="_blank" rel="noreferrer">GitHub</a>
                </ContactLinks>
            </ContactContainer>

            <ElementTag style={{ marginLeft: "2px", marginTop: "0.5em" }}>
                <p>&lt;/body&gt;</p>
            </ElementTag>

            <ElementTag>
                <p>&lt;/html&gt;</p>
            </ElementTag>
        </Container>
    )
}

export default LeftMain

const Container = styled.div`
height: 100%;
// width: 50%;

@media (max-width: 992px){
    grid-area:left;
}

@media (min-width: 993px){
    position: fixed;
    // padding: 20px;
}
`

const ElementTag = styled.div`
color: #515152;
font-size 18px;
font-family: 'La Belle Aurore', cursive;
margin-left: -1rem;
margin-top: -1rem;

@media (max-width: 992px){
    display: none;
}
`

const TextContainer = styled.div`
max-width: 470px;
padding: 20px 50px;
font-family: 'Gothic A1', sans-serif;

@media (max-width: 992px){
    max-width: 100%;
    padding: 10px;
}
`

const HelloText = styled.div`
font-size: 2em;
color: #ffffff;
line-height: 1.15;

@media (max-width: 992px){
    font-size: 1.5em;
}
`

const DescriptionText = styled.div`
font-size: 14px;
color: #949495;
line-height: 2;

@media (max-width: 992px){
    margin-top: 2em;
}
`

const Breadcrumbs = styled.div`
display: flex;
flex-direction: column;
color: #949495;
list-style: none;
font-size: 10px;
line-height: 3;
letter-spacing: 2.5px;
margin-top: 10px;
margin-bottom: 10px;

@media (max-width: 992px){
    display: none;
}
`

const ContactContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
color: #fff;
font-family: 'Gothic A1', sans-serif;
font-size: 14px;

a:link, a:visited {
    text-decoration: none;
    color: #fff;
}

a:hover {
    text-decoration: underline;
}

a:active {
    text-decoration: underline;
}
`

const ContactLinksSM = styled.div`
    @media (min-width: 992px){
    display: none;
}

display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin-top: 20px;
`

const ContactLinks = styled.div`
    @media (max-width: 992px){
    display: none;
}

display: flex;
align-items: center;
padding-left: 50px;
width: 100%;
`