import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import { renderText } from "../common/DisplayComponent";

const FinalStep = ({ data }) => {
  let navigate = useNavigate();
  const submit = ()=>{

    navigate("/singin")
  }
  submit()
  return (
    <Paper style={styles.steps}>

    

      <Box mt={2} mb={2}>
        {renderText({
          label: "Your Submitted Data",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      {JSON.stringify(data, null, 4)}
    </Paper>
  );
};

export default FinalStep;
