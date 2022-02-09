import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { NavBar } from '../components/NavBar';
import { About } from '../components/About';
import { PasswordCheckerContainer } from '../components/PasswordCheckerContainer';

export const MainContainer = () => {
    
  return (
    <Container>
        <NavBar/>
          <Routes>
            <Route path="/about" element={<About/>} />
            <Route path="/" element={<PasswordCheckerContainer />} />
          </Routes>
    </Container>
  )
}

const Container = styled.div`
    margin: 1rem;
`;