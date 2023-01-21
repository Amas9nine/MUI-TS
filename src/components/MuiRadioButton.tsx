import { Box, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, FormHelperText } from "@mui/material"
import Apple from "@mui/icons-material/Apple"


function MuiRadioButton() {
  return (
    <>
      <Box>
        <FormControl>
          <FormLabel id={"job-experience-group-label"}>
            Years of experience
          </FormLabel>
          <RadioGroup name={"job-experience-group"} row aria-labelledby={"job-experience-group-label"}>
            <FormControlLabel control={<Radio />} label={"0-2"} value={"0-2"} />
            <FormControlLabel control={<Radio />} label={"3-5"} value={"3-5"} />
            <FormControlLabel control={<Radio color="secondary" />} label={"6-10"} value={"6-10"} />
            <FormControlLabel control={<Apple color="secondary" />} label={"6-10"} value={"6-10"} />
          </RadioGroup>
          <FormHelperText>Choose</FormHelperText>
        </FormControl>
      </Box>
    </>
  )
}

export default MuiRadioButton