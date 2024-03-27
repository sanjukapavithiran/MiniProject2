import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    // Validate password
    if (password.length < 5) {
      alert('Password must be at least 5 characters long');
    } else if (password === email) {
      alert('Password must not match email address');
    } else if (!/[!*]/.test(password)) {
      alert('Password must include ! or *');
    } else {
      // Display welcome message on successful login
      const welcomeMessage = `Successful login. Welcome ${email} 😊`;
      alert(welcomeMessage);

      // Redirect to courses page after clicking OK on successful login message
      window.location.href = '/courses'; 
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container component="main" maxWidth={false} sx={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box
          sx={{
            padding: '10px', 
            maxWidth: '400px', // Limiting maximum width to ensure content doesn't spread too wide
            width: '100%', // Ensure the content takes up full available width
            textAlign: 'center', // Center the content horizontally
          }}
        >
          <Avatar sx={{ m: 'auto', bgcolor: 'secondary.main' }}> {/* Center the Avatar vertically */}
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mt: 2 }}> {/* Add margin-top to the Typography component */}
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="center" sx={{ mt: 2 }}>
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <Grid container justifyContent="center" sx={{ mt: 2 }}>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
