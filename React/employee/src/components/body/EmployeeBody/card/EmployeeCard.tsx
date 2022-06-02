import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Employee from "../../../../models/Employee";
import Grid from "@mui/material/Grid";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const EmployeeCard: React.FC<{ item: Employee}> = (props) => {

  // const style = {{"font-family": 'Roboto', font-style: "normal", display: "flex", align-items: "center", color: "#365271"}};

  const theme = createTheme({
    typography: {
      // Tell MUI what the font-size on the html element is.
      h5: {
          position: "absolute",
          width: "242px",
          height: "26px",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "28px",
          display: "flex",
          alignItems: "center",
          color: '#365271'
      }
    }
  });


  return (
    <Card sx={{ minWidth: 275, background: "#EAEAEA",
    borderRadius: "3px" }} variant="outlined">
      <Grid
        container
        wrap="nowrap"
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={8} md={8} lg={8} direction="column">
          <CardContent>
            <ThemeProvider theme = {theme}>
            <Typography variant="h5" component="div" align="left">
              {props.item.name}
            </Typography>
            </ThemeProvider>
            <br></br>
            <br></br>
            <Typography
              sx={{ mb: 2 }}
              component="div"
              align="left"
              color = '#365271'
            >
              {props.item.department}
            </Typography>
            <Typography
              sx={{ mb: 2 }}
              component="div"
              align="left"
              color = '#365271'
            >
              ${props.item.salary}
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={3} md={3} lg={3} direction="column">
          <CardActions>
            <EditButton employee = {props.item}/>
            <DeleteButton empID = {props.item.id}/>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default EmployeeCard;
