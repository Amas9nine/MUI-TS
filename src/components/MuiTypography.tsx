import { Drawer, Typography } from "@mui/material"

function MuiTypography() {
  return (
    <div>
      <Typography variant="h1" gutterBottom >h1 text</Typography>
      <Typography variant="h2">h2 text</Typography>
      <Typography variant="h3">h3 text</Typography>
      <Typography variant="h4" >h4 text</Typography>
      <Typography variant="h5">h5 text</Typography>
      <Typography variant="h6" component="body" gutterBottom  >h6 text</Typography>

      <Typography variant="subtitle1">sub title 1</Typography>
      <Typography variant="subtitle2">sub title 1</Typography>

      <Typography variant="body1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, libero.</Typography>
      <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quidem?</Typography>
    </div>
  )
}

export default MuiTypography