import React from 'react';

import {
  CssBaseline,
  Container,
  Typography,
  Avatar,
  makeStyles,
  Chip,
  Paper,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: '0 auto',
    border: '8px solid white',
  },
  chip: {
    margin: 10,
    boxShadow:
      '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)',
    backgroundColor: 'white',
  },
  container: {
    height: '94vh',
    textAlign: 'center',
  },
  greetings: {
    margin: '20px 0 10px 0',
  },
  header: {
    marginBottom: 10,
  },
  name: {
    margin: '10px 0 -5px 0',
  },
  root: {
    padding: 40,
    textAlign: 'center',
    backgroundColor: '#eeeeee',
  },
  signature: {
    position: 'absolute',
    bottom: 5,
    right: 0,
    left: 0,
  },
}));

const AboutMe = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <CssBaseline />
      <Grid
        className={classes.container}
        container
        direction="column"
        justify="center"
      >
        <Grid item>
          <Typography className={classes.header} variant="h5" gutterBottom>
            About me
          </Typography>

          <Avatar
            alt="Bikram Karki"
            elevation={5}
            className={classes.avatar}
            component={Paper}
            sizes
            src="https://avatars1.githubusercontent.com/u/39879795?s=460&u=5140993aeb82bd09c5cfaf295e14071dda4c4521&v=4"
            variant="round"
          />

          <Typography className={classes.name} variant="h5" component="div">
            Bikram Karki
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            Software Developer
          </Typography>

          <Typography className={classes.greetings} variant="body2">
            Say hi and connect with me
          </Typography>

          <ChipLink name="Email" className={classes.chip} />
          <ChipLink name="Linkedin" className={classes.chip} />
          <ChipLink name="Github" className={classes.chip} />
        </Grid>
        <Grid item className={classes.signature}>
          <Typography color="textSecondary" variant="subtitle2">
            @Bikram Karki 2020
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

const iconsUrl = {
  Github: 'https://img.icons8.com/material-sharp/24/000000/github.png',
  Email: 'https://img.icons8.com/material-sharp/24/000000/email.png',
  Linkedin: 'https://img.icons8.com/color/96/000000/linkedin-circled.png',
};

const links = {
  Github: 'https://github.com/bkrmadtya',
  Email: 'mailto:karki.bikram007@gmail.com',
  Linkedin: 'https://linkedin.com/in/bkrmadtya',
};

const ChipLink = ({ name, className }) => (
  <Chip
    avatar={<img alt={`${name}-link`} src={iconsUrl[name]} />}
    className={className}
    clickable
    component="a"
    href={links[name]}
    label={name}
    size="medium"
    target="_"
  />
);

export default AboutMe;
