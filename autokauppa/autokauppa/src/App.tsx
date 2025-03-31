import './App.css'
import Carlist from './components/Carlist'
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function App() {

  return (
    <>
      <Container maxWidth="xl">
        <AppBar position='relative'>
          <Toolbar>
            <Typography variant='h6'>My cars</Typography>
          </Toolbar>
        </AppBar>
        <Carlist />
      </Container>
    </>
  )
}

export default App
