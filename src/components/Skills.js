import { skillsSection } from "./Portfolio";
import React from "react";
import styled from "styled-components";

export default function Skills() {
    return (
        <Container>
            <TitleContainer>
                <h1>
                    {skillsSection.title}{" "}
                </h1>
            </TitleContainer>
            {/* <TextContainer>
                <p>{skillsSection.subTitle}</p>
            </TextContainer> */}
            <TextContainer>
                <p>{skillsSection.skills}</p>
            </TextContainer>
        </Container>
    );
}

const Container = styled.div`
font-family: 'Gothic A1', sans-serif;
`

const TitleContainer = styled.div`

`

const TextContainer = styled.div`
margin-top: 10px;
font-size: 14px;
color: #949495;
`
