import styled from 'styled-components'
import Navbar from './components/Navbar1/Navbar'

const Div = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: #1e8bc3;
`

function App() {
  return (
    <Div className="App">
      <Navbar/>
    </Div>
  );
}

export default App;
