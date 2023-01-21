import { Box, Checkbox, FormControlLabel, FormControl, FormLabel, FormGroup } from "@mui/material"
import React, { useState } from "react"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function MuiCheckBox() {
  const [acceptTnC, setAcceptTnc] = useState(false)
  const [skills, setSkills] = useState<string[]>([])
  console.log({ acceptTnC });
  console.log({ skills });

  const handleSkill = (e: React.ChangeEvent<HTMLInputElement>) => {

  }


  return (
    <>
      <Box>
        <Box>
          <FormControlLabel label={"I accept terms and conditions"}
            control={<Checkbox checked={acceptTnC} onChange={(_e: React.ChangeEvent<HTMLInputElement>) => {
              setAcceptTnc(_e.target.checked)
            }} />} />
        </Box>
        <Box>
          <Checkbox
            icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />}
            checked={acceptTnC} onChange={(_e: React.ChangeEvent<HTMLInputElement>) => {
              setAcceptTnc(_e.target.checked)
            }}
          />
        </Box>
        <Box>
          <FormControl>
            <FormLabel>Skills</FormLabel>
            <FormGroup>
              <FormControlLabel label={"HTML"}
                value={"html"}
                control={<Checkbox checked={skills.includes("html")} onChange={ } />} />
              <FormControlLabel label={"CSS"}
                value={"css"}
                control={<Checkbox checked={skills.includes("css")} onChange={ } />} />
              <FormControlLabel label={"JavaScript"}
                value={"JS"}
                control={<Checkbox checked={skills.includes("JS")} onChange={ } />} />
            </FormGroup>
          </FormControl>
        </Box>
      </Box>
    </>
  )
}

export default MuiCheckBox