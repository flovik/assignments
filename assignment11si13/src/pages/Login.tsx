import authService from '../services/auth-service';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Box, Button, Container, createTheme, CssBaseline, Grid, TextField, ThemeProvider, Typography } from '@mui/material';
import { ErrorMessage } from '@hookform/error-message';

const Login = () => {

  const navigate = useNavigate();
  const theme = createTheme();

  const submit = async (data: any) => {
    // authService.login(data)
    // .then(() => {
    //   var role = authService.getRole()
    //   role[0] === 'Doctor' ? 
    //   navigate("/console") :
    //   navigate("/profile");
      
    // }).catch((error) => {
    //   if(error.response){
    //     alert(error);
    //   }
    // })
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all"
  });

  return (
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              height: 90,
              width: 310,
            }}
            component="img"
            src="https://cartelamedicala.blob.core.windows.net/profile-images/logo.png"
          />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Box component="form" onSubmit={handleSubmit(submit)} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                autoFocus
                {...register("email", { required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address"
                }
              })}
            />
            <ErrorMessage errors={errors} name='email' render={({ message }) => <p style={{color: "red"}}>{message}</p> }/>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password", { // {...register} -> email = {user.email}, password = {user.password} ... combina obiectele
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
                  message: "Password must have a capital letter, numbers and symbols!"
                },
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p style={{color: "red"}} key={type}>{message}</p>
                ))
              }
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/">
                  {"Back to homepage"}
                </Link>
              </Grid>
              <Grid item>
                <Link to="/patientRegister">
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

export default Login;