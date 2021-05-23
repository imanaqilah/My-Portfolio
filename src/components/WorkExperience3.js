import React from 'react'
import styled from "styled-components";

var acc = document.getElementsByClassName("ExpandAccordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        var PanelAccordion = this.nextElementSibling;
        if (PanelAccordion.style.maxHeight) {
            PanelAccordion.style.maxHeight = null;
        } else {
            PanelAccordion.style.maxHeight = PanelAccordion.scrollHeight + "px";
        }
    });
}

function WorkExperience3() {
    return (
        <div>
            <ExpandAccordion>
                <Container>
                    <GridDateContainer>
                        <p>2017 - 2020</p>
                    </GridDateContainer>
                    <GridItemContainer>
                        <p>2 COOL PRODUCTIONS SDN BHD &nbsp;|&nbsp;  Event Executive (Sales)</p>
                    </GridItemContainer>
                </Container>
            </ExpandAccordion>
            <ExpandAccordion>
                Accordion 2
            </ExpandAccordion>
        </div>
    )
}

export default WorkExperience3

const ExpandAccordion = styled.div`
    background-color: #202022;
    color: #fff;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;

:hover {
    background-color: #3B3B40;
}
`

const PanelAccordion = styled.div`
padding: 0 18px;
background-color: white;
max-height: 0;
overflow: hidden;
transition: max-height 0.2s ease-out;
`

const Container = styled.div`
display: grid;
grid-template-columns: 6em 1fr;
font-family: 'Gothic A1', sans-serif;
font-size: 12px;
grid-gap: 8px;
`

const GridDateContainer = styled.div`
font-weight: 700;
`

const GridItemContainer = styled.div`
margin-left: 2em;
font-weight: 600;
`