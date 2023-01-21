import { Button, Stack, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material"
import AppleIcon from '@mui/icons-material/Apple';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { FormatBold, FormatBoldOutlined, FormatBoldRounded } from "@mui/icons-material";
import React, { useState } from "react";

function MuiButton() {
  const [formats, setFormats] = useState<string | null>(null);
  console.log({ formats });

  const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => (
    setFormats(updatedFormats)
  )
  return (
    <>
      <Stack spacing={10} display="contents">

        <Stack direction="row" spacing={10} display="block">
          <Button variant="text" href="https://tpverstak.ru/flex-cheatsheet/">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outline</Button>
        </Stack>

        <Stack spacing={10} direction="row" display="block">
          <Button variant="contained" color="primary">Contained</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="contained" color="error">Error</Button>
          <Button variant="contained" color="warning">Warning</Button>
          <Button variant="contained" color="info">Info</Button>
          <Button variant="contained" color="success">Success</Button>
        </Stack>

        <Stack direction="row" spacing={2} display="block">
          <Button size="small" variant="contained">Small</Button>
          <Button size="medium" variant="contained">Mediunm</Button>
          <Button size="large" variant="contained">Large</Button>
        </Stack>

        <Stack direction="row" display="block" spacing={2}>
          <Button size="small" variant="contained" startIcon={<AppleIcon />}>Apple</Button>
          <Button size="small" variant="contained" endIcon={<AppleIcon />}
            disableElevation
            disableRipple
            onClick={() => (
              alert("BTN clicked")
            )}>Apple</Button>
          <IconButton aria-label="Apple" color="primary" size="large">
            <AppleIcon />
          </IconButton>
        </Stack>

        <Stack direction="row" display="block">
          <ButtonGroup variant="contained" orientation="vertical" size="small" color="secondary">
            <Button variant="text" onClick={() => (alert("Left"))}>Left</Button>
            <Button variant="text" onClick={() => (alert("Center"))}>Center</Button>
            <Button variant="text" onClick={() => (alert("Right"))}>Right</Button>
          </ButtonGroup>
        </Stack>

        <Stack direction="row" display="block">
          <ToggleButtonGroup aria-label="text formating" value={formats} onChange={handleFormatChange}
            size="small" orientation="vertical" color="primary" exclusive>
            <ToggleButton value="bold" >
              <FormatBoldOutlined />
              <FormatBold />
              <FormatBoldRounded />
            </ToggleButton>
            <ToggleButton value="italic">
              < LunchDiningIcon />
              <AppleIcon />
            </ToggleButton>
            <ToggleButton value="underlined">
              < LunchDiningIcon />
              <AppleIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

      </Stack>
    </>
  )
}

export default MuiButton