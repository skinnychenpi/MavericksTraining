import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Employee from "../../models/Employee";
import Grid from "@mui/material/Grid";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const EmployeeCard: React.FC<{ item: Employee, employeeUpdater : any}> = (props) => {

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
            <Typography variant="h5" component="div" align="left">
              {props.item.name}
            </Typography>
            <Typography
              sx={{ mb: 2 }}
              component="div"
              color="text.secondary"
              align="left"
            >
              {props.item.department}
            </Typography>
            <Typography
              sx={{ mb: 2 }}
              component="div"
              color="text.secondary"
              align="left"
            >
              ${props.item.salary}
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={3} md={3} lg={3} direction="column">
          <CardActions>
            <EditButton employeeUpdater = {props.employeeUpdater} employee = {props.item}/>
            <DeleteButton employeeUpdater = {props.employeeUpdater} empID = {props.item.id}/>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default EmployeeCard;
