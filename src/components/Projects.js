import React from 'react'
import styled from 'styled-components';

function Projects() {
    return (
        <Container>
            <Category>
                <p>REACTJS</p>
            </Category>
            <Title>
                <p>Instagram Clone &#38; Redesign</p>
            </Title>
            <Desc>
                <p>Learned and implemented most of the React fundamentals with this basic version of Instagram clone where you get to see media uploaded by other users.</p>
            </Desc>

        </Container>
    )
}

export default Projects

const Container = styled.div`
font-family: 'Gothic A1', sans-serif;
padding: 10px;
`

const Category = styled.div`
letter-spacing: 2px; 
font-size: 12px;
font-weight: 500;
margin-bottom: 10px;
`

const Title = styled.div`
font-weight: bold; 
font-size: 20px;
`

const Desc = styled.div`
color: #b3b3b2;
font-size: 14px;
margin-top:10px;
line-height: 1.5;
`
