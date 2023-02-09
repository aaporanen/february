import './App.css';
import NavBar from './components/NavBar';
import Content from './components/Content';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Paper } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const queryClient = new QueryClient();

function App() {
  return (
  <ThemeProvider theme={darkTheme}>
    <Paper square sx={{ minHeight: "100vh" }}>
      <NavBar />
      <QueryClientProvider client={queryClient}>
        <Content />
      </QueryClientProvider>
    </Paper> 
  </ThemeProvider>
  );
}

export default App;
