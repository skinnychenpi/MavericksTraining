import * as React from 'react';
import Button from './Button';
import Typography from './Typography';
import ProductHeroLayout from './WelcomeBodyLayout';

const backgroundImage =
  'https://unsplash.com/photos/5E5N49RWtbA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Nzh8fGJsdWV8ZW58MHx8fHwxNjUzOTE5Nzg0&force=true';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Manage Employee Now
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Start By Signing Up Free Account
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/sign-up"
        sx={{ minWidth: 200 }}
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}