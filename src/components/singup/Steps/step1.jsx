import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step1 = ({ state, handleChange, handleNext }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Entrer vos informations",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "Nom",
            label: "Nom",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "Prenom",
            label: "Prénom",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12}>
          {renderSelect({
            state,
            name: "sexe",
            label: "sexe",
            options: [ 
              { key: "homme", value: "home" },
              { key: "femme", value: "femme" },
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        {/* <Grid item xs={12} sm={6}> */}
          {renderInputField({
            state,
            name: "Telephone",
            label: "Télèphone",
            onChange: handleChange,
          })}
        {/* </Grid> */}

      </Grid>
      {/* 
      
      here
      
    */}

    <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        {/* <Grid item xs={12} sm={6}> */}
          {renderInputField({
            state,
            name: "email",
            label: "Email",
            type: "email",
            onChange: handleChange,
          })}
        {/* </Grid> */}
        </Grid>


      {/* 
       */}

      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        {renderButton({ label: "Suivant", onClick: handleNext })}
      </Grid>
    </Paper>
  );
};

export default Step1;
