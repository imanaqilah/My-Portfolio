import styled from "styled-components";
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Accordion = withStyles({
    root: {
        width: '100%',
        border: '1px solid #202022',
        borderRadius: '2px',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: '#202022',
        color: "white",
        fontFamily: 'Gothic A1, sans- serif',
        // fontSize: "12px",
        // borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        // padding: theme.spacing(2),
        padding: "10px 40px",
        backgroundColor: '#3B3B40',
        color: "#DFDFE2",
    },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <h2 style={{ marginBottom: "30px", fontFamily: "Gothic A1, sans-serif" }}>Work Experience</h2>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "white" }} />} aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>
                        <Container>
                            <GridDateContainer>
                                <p>2017 - 2020</p>
                            </GridDateContainer>
                            <GridItemContainer>
                                <p>2 COOL PRODUCTIONS SDN BHD &nbsp;|&nbsp;  Event Executive (Sales)</p>
                            </GridItemContainer>
                        </Container>
                    </Typography>
                </AccordionSummary >
                <AccordionDetails>
                    <Typography style={{ fontSize: "14px", fontFamily: "Gothic A1, sans-serif", textAlign: "justify" }}>
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
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>
                        <Container>
                            <GridDateContainer>
                                <p>2015</p>
                            </GridDateContainer>
                            <GridItemContainer>
                                <p>APPS APPAREL &nbsp;|&nbsp;  Sales Associate &#38; Graphic Designer</p>
                            </GridItemContainer>
                        </Container>
                    </Typography>
                </AccordionSummary>
                <DetailContainer>
                    <AccordionDetails>
                        <Typography style={{ fontSize: "14px", fontFamily: "Gothic A1, sans-serif", textAlign: "justify" }}>
                            <ul>
                                <li>
                                    Delivered excellent customer service that ensured ongoing sales and high levels of customer satisfaction.
                        </li>
                                <li>
                                    Worked with customers to determine their needs and recommend the right product to solve customers' issues.
                        </li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </DetailContainer>
            </Accordion>
            <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>
                        <Container>
                            <GridDateContainer>
                                <p>2014</p>
                            </GridDateContainer>
                            <GridItemContainer>
                                <p>XPerienceMY &nbsp;|&nbsp;  Intern</p>
                            </GridItemContainer>
                        </Container>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{ fontSize: "14px", fontFamily: "Gothic A1, sans-serif", textAlign: "justify" }}>
                        <ul>
                            <li>
                                Managed event RSVP list
                        </li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>
                        <Container>
                            <GridDateContainer>
                                <p>2014</p>
                            </GridDateContainer>
                            <GridItemContainer>
                                <p>GET CRAFTY @ ONE UTAMA &nbsp;|&nbsp;  Art Teacher</p>
                            </GridItemContainer>
                        </Container>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{ fontSize: "14px", fontFamily: "Gothic A1, sans-serif", textAlign: "justify" }}>
                        <ul>
                            <li>
                                Demonstrated and assisted small groups of children aged between 3-12 to properly use and care for materials and tools to produce a finished art piece.
                        </li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

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

const DetailContainer = styled.div`
color: #b3b3b2;
text-align: justify;
font-family: 'Gothic A1, sans- serif';
font-size: "20px";
`