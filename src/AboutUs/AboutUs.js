import {React, useState} from "react";
import {Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import './AboutUs.css'

function AboutUs() {

    const [expanded, setExpanded] = useState(false)

    const handleChange = (isExpanded, panel) =>{
        setExpanded(isExpanded ? panel : false)
    }

    return(
        <div className="About_us">
            <div className="About_us_inner_left">
            <Accordion disableGutters={true} expanded={expanded === "panel1"} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}>
                <AccordionSummary
                    id="panel1-header"
                    aria-controls="panel1-content"
                    expandIcon={<ExpandMoreIcon />}
                    >
                    <Typography className="fontfix">ჩვენ შესახებ</Typography>
                </AccordionSummary>
                <Typography className="fontfix">lorem ipusm</Typography>
            </Accordion>

            <Accordion disableGutters={true} expanded={expanded === "panel2"} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}>
                <AccordionSummary
                    id="panel2-header"
                    aria-controls="panel2-content"
                    expandIcon={<ExpandMoreIcon />}
                    >
                    <Typography className="fontfix">ჩვენ შესახებ</Typography>
                </AccordionSummary>
                <Typography className="fontfix">lorem ipusm</Typography>
            </Accordion>

            <Accordion disableGutters={true} expanded={expanded === "panel3"} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}>
                <AccordionSummary
                    id="panel3-header"
                    aria-controls="panel3-content"
                    expandIcon={<ExpandMoreIcon />}
                    >
                    <Typography className="fontfix">ჩვენ შესახებ</Typography>
                </AccordionSummary>
                <Typography className="fontfix">lorem ipusm</Typography>
            </Accordion>

            <Accordion disableGutters={true} expanded={expanded === "panel4"} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel4')}>
                <AccordionSummary
                    id="panel4-header"
                    aria-controls="panel4-content"
                    expandIcon={<ExpandMoreIcon />}
                    >
                    <Typography className="fontfix">ჩვენ შესახებ</Typography>
                </AccordionSummary>
                <Typography className="fontfix">lorem ipusm</Typography>
            </Accordion>
            </div>
        </div>
    )
}

export default AboutUs;


