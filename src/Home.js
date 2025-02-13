// import React, { useState } from 'react';
// import { BrowserRouter,Link, Routes, Route } from 'react-router-dom';
// import { 
//   Container, 
//   Box, 
//   Paper, 
//   Typography, 
//   TextField, 
//   Button, 
//   Alert 
// } from '@mui/material';
// // import { signInWithEmailAndPassword } from 'firebase/auth';
// // import { auth } from './Config/firebase'; // Assuming you have this configuration

// function Home() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
  
//     const handleLogin = async (e) => {
//       e.preventDefault();
//       try {
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         console.log('Logged in:', userCredential.user);
//         // Add your navigation logic here
//       } catch (error) {
//         setError(error.message);
//       }
//     };
//     return (
//         <Container component="main" maxWidth="xs">
//           <Box
//             sx={{
//               minHeight: '100vh',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           >
//             <Paper
//               elevation={3}
//               sx={{
//                 padding: 4,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 width: '100%',
//               }}
//             >
//                 <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
//                   Sign in
//                 </Typography>
          
//                 {error && (
//                   <Alert severity="error" sx={{ mb: 2, width: '100%' }}>
//                     {error}
//                   </Alert>
//                 )}

//                 <Box component="form" onSubmit={handleLogin} sx={{ width: '100%' }}>
//                   <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     label="Email Address"
//                     autoComplete="email"
//                     autoFocus
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                   <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     label="Password"
//                     type="password"
//                     autoComplete="current-password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <Button
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     sx={{ mt: 3, mb: 2 }}
//                   >
//                     Sign In
//                   </Button>
//                 </Box>
//             </Paper>
//           </Box>
//         </Container>
//     );
// }

// export default Home;