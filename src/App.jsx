import { ThemeProvider } from 'styled-components';
import Container from './components/styles/Container.styled';
import Header from './components/Header';

const theme = {
  colors: {
    body: '#fff',
    footer: '#003333',
    header: '#ebfbff',
  },
  mobile: '48rem',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Container>
          <h1>hello world</h1>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
