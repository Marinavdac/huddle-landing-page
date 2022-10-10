import { ThemeProvider } from 'styled-components';
import Container from './components/styles/Container.styled';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import content from './content';

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
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))
          }
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
