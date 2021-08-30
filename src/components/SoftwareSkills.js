import React from 'react'
import styled from 'styled-components';

function SoftwareSkills() {
    return (
        <Container>
            <h2 style={{ marginBottom: "30px", fontFamily: "Gothic A1, sans-serif" }}>Technical Skills</h2>
            <SkillScope>
                <p>&#47;&#47; Front-end Stack</p>
            </SkillScope>
            <SkillSets>
                <p><span style={{ color: "#ee2a62" }}>HTML5</span>, <span style={{ color: "#1b7eaf" }}>CSS3</span>, <span style={{ color: "#148277" }}>JavaScript ES6</span>, <span style={{ color: "#bf7c1c" }}>ReactJS</span></p>
            </SkillSets>

            <SkillScope>
                <p>&#47;&#47; Wireframe Tools</p>
            </SkillScope>
            <SkillSets>
                <p><span style={{ color: "#148277" }}>Adobe XD</span>, <span style={{ color: "#9885f5" }}>Figma</span>, <span style={{ color: "#ee2a62" }}>Sketch</span></p>
            </SkillSets>

            <SkillScope>
                <p>&#47;&#47; CSS Frameworks</p>
            </SkillScope>
            <SkillSets>
                <p><span style={{ color: "#9885f5" }}>Bootstrap</span>, <span style={{ color: "#2689dc" }}>Material Design</span>, <span style={{ color: "#57638f" }}>Semantic UI</span>, <span style={{ color: "#9a3a24" }}>Ant Design</span></p>
            </SkillSets>

            <SkillScope>
                <p>&#47;&#47; Package Manager</p>
            </SkillScope>
            <SkillSets>
                <p><span style={{ color: "#e4c217" }}>NPM</span></p>
            </SkillSets>

            <SkillScope>
                <p>&#47;&#47; Content Management System</p>
            </SkillScope>
            <SkillSets>
                <p><span style={{ color: "#2f62b7" }}>WordPress.org</span></p>
            </SkillSets>

            <SkillScope>
                <p>&#47;&#47; Text Editors</p>
            </SkillScope>
            <SkillSets>
                <p><span style={{ color: "#0c92aa" }}>Visual Studio Code</span>, <span style={{ color: "#bf7c1c" }}>Sublime Text</span>, <span style={{ color: "#148277" }}>Atom</span>, <span style={{ color: "#57638f" }}>Notepad++</span></p>
            </SkillSets>

            <SkillScope>
                <p>&#47;&#47; Version Control</p>
            </SkillScope>
            <SkillSets>
                <p><span style={{ color: "#af3e33" }}>Git</span></p>
            </SkillSets>


        </Container>
    )
}

export default SoftwareSkills

const Container = styled.div`
font-family: 'Cutive Mono', monospace;
list-style: none;
`

const SkillScope = styled.div`
font-size: 14px;
// color: #949495;
color: #5b9b4c;
margin-bottom: 4px; 
`

const SkillSets = styled.div`
font-size: 16px;
margin-bottom: 30px;
font-weight: 900; 
`
