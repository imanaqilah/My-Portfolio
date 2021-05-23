import React from 'react'
import styled from 'styled-components';
import SoftwareSkills from './SoftwareSkills';
import Education from './Education';
import Projects from './Projects';
import WorkExperience from './WorkExperience';


function RightScrollable() {
    return (
        <Container>
            <ContentContainer>
                <a href="https://iman-aqilah-nextagram.netlify.app" target="_blank" rel="noreferrer">
                    <Projects />
                </a>
            </ContentContainer>


            <ContentContainer>
                <SoftwareSkills />
            </ContentContainer>

            <ContentContainer>
                <Education />
            </ContentContainer>

            <ContentContainer>
                <WorkExperience />
            </ContentContainer>

        </Container>
    )
}

export default RightScrollable

const Container = styled.div`
color: white;
grid-column: 2;
margin-left: 15px;

@media (max-width: 992px){
    grid-area: right;
    margin-left: 0;
}
`

const ContentContainer = styled.div`
height: auto;
width: 100%;
background-color: #202022;
padding: 32px;
margin-top: 20px; 
// margin-bottom: 30px;
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

@media (max-width: 992px){
    width: 100%;
}
`

