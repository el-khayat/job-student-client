import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step3 = ({
  state,
  handleChange,
  handleNext,
  handlePrev,
  handleSubmit,
  
}) => {
  
  let navigate = useNavigate();
  // const host = "192.168.43.146" ;
  const host = "localhost"
 const  {Nom ,Prenom, Adresse,email,Telephone,Password,NiveauEtudiant,ville} = state.data
  
 const submit = async ()=>{
     axios.post(`http://${host}:9999/singup`,{
      Nom,
      Prenom,
      Adresse,
      Password,
      email,
      Telephone,
      NiveauEtudiant,
      ville

    }).then((res)=>{
      console.log(state.data);
      console.log("singin ");
      navigate("/singin")
    })
    .catch((err)=>{
      console.log("err is",err.response);
    })

  }




  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Professional Details",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
      {/* skill: "",
      workExperence: "",
      expectedSalary: "", */}

<Grid container spacing={1} style={{ marginBottom: "16px" }}>

<Grid item style={{width:"80%",marginLeft:"auto",marginRight:"auto"}}>
  {renderInputField({
    state,
    name: "email",
    label: " Email",
    onChange: handleChange,
    width:"80%",
    value: state.data
  })}
</Grid>
</Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>

        <Grid item style={{width:"80%",marginLeft:"auto",marginRight:"auto"}}>
          {renderInputField({
            state,
            name: "Password",
            label: " Password",
            onChange: handleChange,
            width:"80%"
          })}
        </Grid>
      </Grid>

      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        <Box ml={2}>
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>
          {renderButton({ label: "Sing up", onClick: submit })}
        </Box>
      </Grid>
    </Paper>
  );
};

export default Step3;
