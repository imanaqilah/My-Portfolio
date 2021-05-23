import './App.css';
import styled from 'styled-components';
import LeftMain from './components/LeftMain';
import RightScrollable from './components/RightScrollable';

function App() {
  return (
    <GridContainer>
      <LeftMain>
      </LeftMain>
      <RightScrollable>
      </RightScrollable>
    </GridContainer>
  );
}

export default App;

const GridContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
// height: 100vh;
padding: 35px;
justify-items: stretch;
align-items: stretch;

@media (max-width: 992px) {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
  "left"
  "right";
  }
`
