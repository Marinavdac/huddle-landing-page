import Container from './components/styled/Container.styled';
import Header from './components/Header';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
}


function App() {
  return (
    <div>
      <Header />
      <Container>
        <h1>hello world</h1>
      </Container>
    </div>
  );
}

export default App;
