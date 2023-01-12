import React, { useState } from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material"
import { mockFaqData } from '../../data/mockData';
import Header from '../../components/Header'

export function Faq() {
  const [expanded, setExpenaded] = useState("")

  const handleChange = (isExpanded, item) => {
    setExpenaded(isExpanded ? item : false)
  }

  
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />


      {
        mockFaqData.map(item => (
          <Accordion
            key={item.id}
            onChange={(event , isExpanded) => handleChange(isExpanded, item.id)}
            expanded={expanded === item.id}
            sx={{ bgcolor: 'primary_bg.main' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color="primary.main" variant="h7">
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))
      }
    </Box>
  )
}
