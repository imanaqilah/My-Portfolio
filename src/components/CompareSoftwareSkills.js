import React from 'react'
import { skillsSection } from "./Portfolio";
import styled from 'styled-components';

function CompareSoftwareSkills() {
    return (
        <Container>
            <p>{skillsSection.softwareSkills.map((skills, i) => {
                return (
                    <li
                        key={i}
                    >
                        <SkillScope>
                            <p>{skills.skillScope}</p>
                        </SkillScope>

                        <SkillSets>
                            <p style={{ marginBottom: "20px" }}>{skills.skillSets}</p>
                        </SkillSets>
                    </li>
                )
            })}</p>
        </Container>
    )
}

export default CompareSoftwareSkills

const Container = styled.div`
font-family: 'Cutive Mono', monospace;
list-style: none;
`

const SkillScope = styled.div`
font-size: 14px;
color: #949495;
`

const SkillSets = styled.div`
font-size: 16px;
color: white;
`