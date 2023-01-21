import Apple from "@mui/icons-material/Apple"
import { Button, InputAdornment, Stack, TextField } from "@mui/material"
import { ReactElement, useState } from "react"
function MuiTextField() {
  const [red, setRed] = useState("")

  return (
    <Stack spacing={6} >

      <Stack direction={"row"} spacing={2} >
        <TextField label="MuiTextField" variant={"filled"} />
        <TextField label="MuiTextField" variant={"outlined"} />
        <TextField label="MuiTextField" variant={"standard"} />
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <TextField size="small" color={"error"} label="MuiTextField" variant={"filled"} />
        <TextField size="small" color={"secondary"} label="MuiTextField" variant={"outlined"} />
        <TextField size="small" color={"warning"} label="MuiTextField" variant={"standard"} />
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <TextField label={"Input From"}
          value={red} onChange={e => setRed(e.target.value)}
          required
          error={!red}
          helperText={!red ? "Required" : "do this do that"}
        />
        <TextField label={"Password L"} type={"password"} helperText={"do this do that"} disabled />
        <TextField label={"Password L"} type={"password"} helperText={"do this do that"} InputProps={{ readOnly: true }} />
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <TextField label={"one"} InputProps={{ startAdornment: <InputAdornment position="start">oNe<Apple /></InputAdornment> }} />
        <TextField label={"two"} InputProps={{ endAdornment: <InputAdornment position="end">tWo<Apple /></InputAdornment> }} />
      </Stack>

    </Stack >
  )
}

export default MuiTextField