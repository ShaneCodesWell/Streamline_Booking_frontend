// components/SignupPopup.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, useTheme, Box } from '@mui/material';
import Image from 'next/image';

function Signup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const theme = useTheme();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Signup successful!");
      } else {
        const errorData = await response.json();
        alert(`Signup failed: ${errorData.message}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(`Error: ${error.message}`);
      } else {
        alert('An unknown error occurred');
      }
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} 
        sx={{ textTransform: 'none' }} className="bg-blue-500 text-white py-1 px-4 rounded">
            Sign Up
      </Button>
      <Dialog open={open} onClose={handleClose}
        sx={{
          '& .MuiDialog-paper': {
            padding: theme.spacing(0),
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            boxShadow: '0 3px 15px rgba(0,0,0,0.15)',
            maxWidth: '800px',
            display: 'flex',
            flexDirection: 'row',
            overflow: 'hidden',
          },
        }}
      >
        <Box sx={{ width: '40%', backgroundImage: 'url(/assets/images/popup-banner.png)', backgroundSize: 'cover', position: 'relative' }}>
          <Box sx={{ position: 'absolute', top: 15, left: 30 }}>
            <Image src="/assets/images/logo-icon.png" alt="Logo" width={60} height={60} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', color: '#fff', padding: 4 }}>
          <h2 className="font-semibold text-2xl">Welcome, Expert Researcher!</h2>
          <p className ="text-sm pt-2">Join our community of seasoned researchers and educators. As a tutor, you’ll have the opportunity to share your knowledge, mentor aspiring researchers, and contribute to the growth of the next generation of scholars.</p>
          </Box>
        </Box>

        <Box sx={{ width: '60%', padding: theme.spacing(1), position: 'relative' }}>
          <Button onClick={handleClose} sx={{ position: 'absolute', top: 16, right: 16, color: '#888' }}>&times;</Button>
          <DialogTitle sx={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: theme.spacing(2), color: 'var(--text-color)' }}>Create an account</DialogTitle>
          <DialogContent>
            <Box component="form">
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                        marginBottom: 1,
                        '& input': {
                        fontSize: '0.875rem', // Set the font size (default is usually 1rem)
                        },
                        '& label': {
                        fontSize: '0.75rem', // Optionally adjust the label font size as well
                        },
                    }}
                />
                <TextField
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{
                        marginBottom: 1,
                        '& input': {
                        fontSize: '0.875rem', // Set the font size (default is usually 1rem)
                        },
                        '& label': {
                        fontSize: '0.75rem', // Optionally adjust the label font size as well
                        },
                    }}
                />
                <TextField
                    margin="dense"
                    id="confirm-password"
                    label="Confirm Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    sx={{
                        marginBottom: 4,
                        '& input': {
                        fontSize: '0.875rem', // Set the font size (default is usually 1rem)
                        },
                        '& label': {
                        fontSize: '0.75rem', // Optionally adjust the label font size as well
                        },
                    }}
                />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#1e90ff',
                  color: '#fff',
                  padding: theme.spacing(1.5),
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#1c7ed6',
                  },
                }}
              >
                <Link href="/auth/user-selection/">Sign Up</Link>
              </Button>
            </Box>
          </DialogContent>
          <Box sx={{ textAlign: 'center', marginTop: theme.spacing(2), color: '#888' }}>
            <p>Already have an Account? <a href="#" className="text-blue-500 hover:underline">Log In</a></p>
            <Box sx={{ display: 'flex', alignItems: 'center', marginY: theme.spacing(2) }}>
              <hr className="flex-grow border-gray-300" />
              <span className="px-3">Or Sign up with</span>
              <hr className="flex-grow border-gray-300" />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button className="p-2 border rounded-full">
                <Image src="/assets/images/cl-4.png" alt="Icon 1" width={40} height={40} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}

export default Signup;
