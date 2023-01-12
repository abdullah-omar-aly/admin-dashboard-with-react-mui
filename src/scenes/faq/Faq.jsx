import React, { useState } from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Box , useTheme} from "@mui/material"


export function Faq() {
  const [expanded , setExpenaded] = useState('')
  return (
    <Box m="20px">
      {/* <Header title="FAQ" subtitle="Frequently Asked Questions Page" /> */}

      <Accordion  sx={{bgcolor: 'primary_bg.main'}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="primary.main" variant="h7">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{bgcolor: 'primary_bg.main'}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="primary.main" variant="h7">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{bgcolor: 'primary_bg.main'}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="primary.main" variant="h7">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{bgcolor: 'primary_bg.main'}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="primary.main" variant="h7">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{bgcolor: 'primary_bg.main'}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="primary.main" variant="h7">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
