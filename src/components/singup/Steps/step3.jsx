import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

import {Button, CircularProgress, Box, Grid, Paper } from "@material-ui/core";
// import {  } from "@material-ui/core";


import { styles } from "../common/styles";
import {
  renderInputField,
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

  const [isLoading,setLoading] = useState(false)
 const  {Nom ,Prenom, Adresse,email,Telephone,Password,NiveauEtudiant,ville} = state.data
  
 const submit = async ()=>{
   setLoading(true)
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
      setLoading(false)
      console.log(state.data);
      console.log("singin ");
      
      navigate("/singin")
    })
    .catch((err)=>{
      setLoading(false)
      console.log("err is",err.response);
    })

  }




  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Compte",
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
            label: " Mot de passe",
            type:"password",
            onChange: handleChange,
            width:"80%"
          })}











        </Grid>
      </Grid>

      <Grid container component={Box} justify='flex-end' mt={2} p={2}>

        <Box ml={2}>
          {/* {renderButton({ label: "Sing up", onClick: submit })} */}
          
          <Button
  variant= "outlined"
  color="primary"
  onClick={handlePrev}>
 Retour
</Button>
&nbsp;&nbsp;&nbsp;
          <Button
  variant= "outlined"
  color="primary"
  onClick={submit}>

          {!isLoading ? (
            "S'inscrire "
            ) : 
            (              <CircularProgress size={30} style={{ color: "#96d0d98c" }} />
            )
          }
</Button>


        </Box>
      </Grid>
    </Paper>
  );
};

export default Step3;
