import React from 'react'
import styled from "styled-components";

function Education() {
    return (
        <div>
            <h2 style={{ marginBottom: "30px", fontFamily: "Gothic A1, sans-serif" }}>Education</h2>
            <Container>
                <GridDateContainer>
                    <p style={{ textAlign: "right" }}>2021</p>
                </GridDateContainer>
                <GridLineContainer>
                    <VerticalLine></VerticalLine>
                </GridLineContainer>
                <GridItemContainer>
                    <p>42 KUALA LUMPUR (Sunway Education Group)</p>
                </GridItemContainer>
                <GridItemRowContainer>
                    <p>26-DAY COMPUTER PROGRAMMING BOOTCAMP</p>
                </GridItemRowContainer>
                <GridItemRow2Container>
                    <p>August Piscine (C Programming)</p>
                </GridItemRow2Container>
            </Container>

            <Container>
                <GridDateContainer>
                    <p>2020 - 2021</p>
                </GridDateContainer>
                <GridLineContainer>
                    <VerticalLine></VerticalLine>
                </GridLineContainer>
                <GridItemContainer>
                    <p>NEXT ACADEMY</p>
                </GridItemContainer>
                <GridItemRowContainer>
                    <p>10-WEEK INTENSIVE CODING BOOTCAMP</p>
                </GridItemRowContainer>
                <GridItemRow2Container>
                    <p>Full-Stack Web Development</p>
                </GridItemRow2Container>
            </Container>

            <Container>
                <GridDateContainer>
                    <p>2014 - 2017</p>
                </GridDateContainer>
                <GridLineContainer>
                    <VerticalLine></VerticalLine>
                </GridLineContainer>
                <GridItemContainer>
                    <p>TAYLOR'S UNIVERSITY, LAKESIDE CAMPUS</p>
                </GridItemContainer>
                <GridItemRowContainer>
                    <p>BACHELORS OF MASS COMMUNICATION (HONOURS)</p>
                </GridItemRowContainer>
                <GridItemRow2Container>
                    <p>Public Relations and Event Management</p>
                </GridItemRow2Container>
            </Container>

            <Container>
                <GridDateContainer>
                    <p>2012 - 2014</p>
                </GridDateContainer>
                <GridLineContainer>
                    <VerticalLine></VerticalLine>
                </GridLineContainer>
                <GridItemContainer>
                    <p>KDU UNIVERSITY COLLEGE, DJ CAMPUS</p>
                </GridItemContainer>
                <GridItemRowContainer>
                    <p>DIPLOMA IN MASS COMMUNICATION</p>
                </GridItemRowContainer>
            </Container>

        </div>

    )
}

export default Education

const Container = styled.div`
display: grid;
grid-template-columns: 70px auto 1fr;
grid-template-rows: auto auto auto;
font-family: 'Gothic A1', sans-serif;
font-size: 12px;
margin-bottom: 20px;
`

const GridDateContainer = styled.div`
`

const GridLineContainer = styled.div`
grid-row: 1/4;
grid-column: 2;
margin-left: 2em;
`

const GridItemContainer = styled.div`
margin-left: 2em;
margin-bottom: 5px;
font-weight: 600;
`

const GridItemRowContainer = styled.div`
grid-column: 3;
grid-row: 2;
margin-left: 2em;
margin-bottom: 5px;
color: #b3b3b2;
`

const GridItemRow2Container = styled.div`
grid-column: 3;
grid-row: 3;
margin-left: 2em;
color: #b3b3b2;
`

const VerticalLine = styled.div`
height: 100%;
width: 1px;
background-color: #949495;
`

// {
//     educationSection.schools.map((schools, i) => {
//         return (
//             <div
//                 key={i}
//             >

//             </div>
//         )
//     })
// }

                        //             <GridDateContainer>
                        //     <p>{schools.duration}</p>
                        // </GridDateContainer>
                        // <GridLineContainer>
                        //     <VerticalLine></VerticalLine>
                        // </GridLineContainer>
                        // <GridItemContainer>
                        //     {schools.schoolName}
                        // </GridItemContainer>
                        // <GridItemRowContainer>
                        //     {schools.subHeader}
                        // </GridItemRowContainer>
                        // <GridItemRow2Container>
                        //     {schools.desc}
                        // </GridItemRow2Container>