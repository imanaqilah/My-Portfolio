import React from 'react';
import styled from "styled-components";
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Menu } from '@material-ui/core';


function Interest() {
    return (
        <div>
            <h2 style={{ marginBottom: "30px", fontFamily: "Gothic A1, sans-serif" }}>Interests</h2>
            <Container>
                <FitnessCenterIcon />
                <MenuBookIcon />
            </Container>
        </div>
    )
}

export default Interest

const Container = styled.div`
margin-right: 30px;
`
