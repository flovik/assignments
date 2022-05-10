import authService, { PatientRegisterData } from '../services/auth-service';
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Box, Button, Container, createTheme, CssBaseline, Grid, TextField, ThemeProvider, Typography } from '@mui/material';
import { ErrorMessage } from '@hookform/error-message';

const PatientRegister = () => {

  const navigate = useNavigate();
  const theme = createTheme();

  const submitRegister: SubmitHandler<PatientRegisterData> = data => {
    // authService.patientRegister(data)
    //   .then((response) => {
    //     navigate("../login", { replace: true })
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       alert(error);
    //     }
    //   })



  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PatientRegisterData>();

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
          <Box component="form" noValidate onSubmit={handleSubmit(submitRegister)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  {...register("firstName", {
                    required: "Fill in that field, please!",
                  })}
                />
                <ErrorMessage errors={errors} name='firstName' render={({ message }) => <p style={{color: "red"}}>{message}</p> }/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  autoComplete="family-name"
                  {...register("lastName", {
                    required: "Fill in that field, please!",
                  })}
                />
                <ErrorMessage errors={errors} name='lastName' render={({ message }) => <p style={{color: "red"}}>{message}</p> }/>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address"
                    }
                  })}
                />
                <ErrorMessage errors={errors} name='email' render={({ message }) => <p style={{color: "red"}}>{message}</p> }/>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register("password", {
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
                {errors.password && <p style={{color: 'red'}}>{errors.password.message}</p>}

              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  label="City"
                  autoComplete="city-name"
                  {...register("city", {
                    required: "Fill in that field, please!",
                  })}
                />
                <ErrorMessage errors={errors} name='city' render={({ message }) => <p style={{ color: "red" }}>{message}</p>} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="idnp"
                  label="Idnp"
                  autoComplete="idnp"
                  {...register("idnp", {
                    required: "IDNP is required!",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "IDNP must be only digits!"
                    },
                    minLength: {
                      value: 13,
                      message: "IDNP must have 13 digits!",
                    },
                  })}
                />
                <ErrorMessage errors={errors} name='idnp' render={({ message }) => <p style={{color: "red"}}>{message}</p> }/>
              
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default PatientRegister