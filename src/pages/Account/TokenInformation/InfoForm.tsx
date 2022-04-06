import React from "react";
import AppGridContainer from "../../../@crema/core/AppGridContainer";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import IntlMessages from "../../../@crema/utility/IntlMessages";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Form } from "formik";
import AppTextField from "../../../@crema/core/AppFormComponents/AppTextField";
import DatePicker from "@mui/lab/DatePicker";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
// import countries from "../../../@crema/services/db/countries";

interface InfoFormProps {
  setFieldValue: (field: string, data: any) => void;
  values: any;
}

const InfoForm: React.FC<InfoFormProps> = ({ values, setFieldValue }) => {
  return (
    <Form autoComplete="off">
      <AppGridContainer spacing={4}>
        <Grid item xs={12} md={12}>
          <Typography>Balance: <span style={{
             color:'blue',
             fontWeight: 'bold'
              }}>7$BAT</span></Typography>
         
        </Grid>
       
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                position: "relative",
                minWidth: 100,
              }}
              color="primary"
              variant="contained"
              type="submit"
            >
              <IntlMessages id="common.deposit" />
            </Button>
            <Button
              sx={{
                position: "relative",
                minWidth: 100,
                ml: 2.5,
              }}
              color="primary"
              variant="outlined"
            >
              <IntlMessages id="common.withdraw" />
            </Button>
          </Box>
        </Grid>
      </AppGridContainer>
    </Form>
  );
};

export default InfoForm;
