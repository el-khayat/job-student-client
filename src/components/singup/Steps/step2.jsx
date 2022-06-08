import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step2 = ({ state, handleChange, handleNext, handlePrev }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "A Bit About Education",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "NiveauEtudiant",
            label: "Niveau d'étude",
            options: [
              { key: "premaire", value: "premaire" },
              { key: "collége", value: "college" },
              { key: "lycée", value: "lycee" },
              { key: "étude supperieus", value: "superieurs" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "ville",
            label: "ville",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container xs={12} spacing={1} style={{ marginBottom: "16px",width:"100%" }}>
        {/* <Grid item xs={12} sm={6} style={{width:"100%"}}> */}
          {renderInputField({
            state,
            name: "Adresse",
            label: "Adresse",
            onChange: handleChange,
            fullWidth:"fullWidth"  
          })}
        {/* </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "jobApplyFor",
            label: "JobApplyFor",
            options: [
              { key: "Manager", value: "Manager" },
              { key: "Project Designer", value: "Project Designer" },
              { key: "Clerk", value: "Clerk" },
              { key: "Helper", value: "Helper" },
            ],
            onChange: handleChange,
          })}
        </Grid> */}
      </Grid>

      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        <Box ml={2}>
          {renderButton({
            label: "retour",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>{renderButton({ label: "suivant", onClick: handleNext })}</Box>
      </Grid>
    </Paper>
  );
};

export default Step2;
