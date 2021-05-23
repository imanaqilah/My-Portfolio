import React from 'react'
import styled from "styled-components";

function WorkExperience() {
    return (
        <div>
            <h2 style={{ marginBottom: "30px", fontFamily: "Gothic A1, sans-serif" }}>Work Experience</h2>
            <Container>
                <GridDateContainer>
                    <p>2017 - 2020</p>
                </GridDateContainer>
                <GridItemContainer>
                    <p>2 COOL PRODUCTIONS SDN BHD &nbsp;|&nbsp;  Event Executive (Sales)</p>
                </GridItemContainer>
                <GridItemRowContainer>
                    <ul>
                        <li>
                            Developed time-pressured pitch decks while managing time effectively to multi-task and meet deadlines.
                        </li>
                        <li>
                            Coordinated logistics, finances, venue preparation, planning and execution of events for a range of clients.
                        </li>
                        <li>
                            Worked closely and attent to start-to-finish details with clients; putting together floor plans, timelines and working agendas for each event as well as assisting with execution of client's marketing/promotional plans.
                        </li>
                        <li>
                            Coordinated with various vendors to ensure maximum costs for maximum profitability while adhering to high quality standards.
                        </li>
                    </ul>
                </GridItemRowContainer>
            </Container>

            <Container>
                <GridDateContainer>
                    <p>2015</p>
                </GridDateContainer>
                <GridItemContainer>
                    <p>APPS APPAREL &nbsp;|&nbsp;  Sales Associate &#38; Graphic Designer</p>
                </GridItemContainer>
                <GridItemRowContainer>
                    <ul>
                        <li>
                            Delivered excellent customer service that ensured ongoing sales and high levels of customer satisfaction.
                        </li>
                        <li>
                            Worked with customers to determine their needs and recommend the right product to solve customers' issues.
                        </li>
                    </ul>
                </GridItemRowContainer>
            </Container>

            <Container>
                <GridDateContainer>
                    <p>2014</p>
                </GridDateContainer>
                <GridItemContainer>
                    <p>XPerienceMY &nbsp;|&nbsp;  Intern</p>
                </GridItemContainer>
                <GridItemRowContainer>
                    <ul>
                        <li>
                            Managed event RSVP list
                        </li>
                    </ul>
                </GridItemRowContainer>
            </Container>

            <Container>
                <GridDateContainer>
                    <p>2014</p>
                </GridDateContainer>
                <GridItemContainer>
                    <p>GET CRAFTY @ ONE UTAMA &nbsp;|&nbsp;  Art Teacher</p>
                </GridItemContainer>
                <GridItemRowContainer>
                    <ul>
                        <li>
                            Demonstrated and assisted small groups of children aged between 3-12 to properly use and care for materials and tools to produce a finished art piece.
                        </li>
                    </ul>
                </GridItemRowContainer>
            </Container>
        </div>
    )
}

export default WorkExperience

const Container = styled.div`
display: grid;
grid-template-columns: 6em 1fr;
grid-template-rows: auto auto;
font-family: 'Gothic A1', sans-serif;
font-size: 12px;
margin-bottom: 20px;
grid-gap: 8px;
`

const GridDateContainer = styled.div`
font-weight: 700;
`

const GridItemContainer = styled.div`
margin-left: 2em;
font-weight: 600;
`

const GridItemRowContainer = styled.div`
grid-column: 2;
grid-row: 2;
margin-left: 2em;
color: #b3b3b2;
text-align: justify;
margin-bottom: 5px;
`
