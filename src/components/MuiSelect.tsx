import { MenuItem, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
function MuiSelect() {
  const [countries, setCountries] = useState<string[]>([])
  console.log({ countries });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCountries(typeof value === "string" ? value.split(",") : value)
  }
  return (
    <>
      <Box width={"200px"} sx={{ border: "1px solid blue" }}>
        mui box
        <TextField
          label="Select countries"
          select
          value={countries}
          onChange={handleChange}
          fullWidth
          SelectProps={{
            multiple: true
          }}
          helperText={"Select country BRO"}
          size={"small"}
          error
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
    </>
  )
}

export default MuiSelect