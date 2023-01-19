import { ExpandMoreRounded } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import { useState } from "react"



const MuiAccordion = () => {
    
    function handleChange(accordionExpanded : (string | false),panelName : string){
        if(accordionExpanded){
            if(accordionExpanded === panelName){
                setAccordionExpanded(false)
            }
            else{
                setAccordionExpanded(panelName)
            }
        }
        else{
            setAccordionExpanded(panelName)
        }
    }

    const [accordionExpanded, setAccordionExpanded] = useState<string | false>(false)
    return (
        <div>
        <Accordion expanded={accordionExpanded === "panel1"} onChange ={()=> handleChange(accordionExpanded, "panel1")}>   
        <AccordionSummary id="panel1-header" expandIcon={<ExpandMoreRounded />}>
            <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails id="panel1-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, alias consectetur! Porro vero consequuntur sapiente earum culpa, corporis libero unde eos eius quibusdam repudiandae id quos dolor, magni excepturi impedit perspiciatis modi sint. Consequatur, voluptate commodi? Vitae perspiciatis minima provident magni soluta facilis nisi, vero dolor eveniet saepe et omnis!</AccordionDetails>
        </Accordion>
        <Accordion expanded={accordionExpanded === "panel2"} onChange ={()=> handleChange(accordionExpanded, "panel2")}>
        <AccordionSummary id="panel2-header" expandIcon={<ExpandMoreRounded />}>
            <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails id="panel2-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, alias consectetur! Porro vero consequuntur sapiente earum culpa, corporis libero unde eos eius quibusdam repudiandae id quos dolor, magni excepturi impedit perspiciatis modi sint. Consequatur, voluptate commodi? Vitae perspiciatis minima provident magni soluta facilis nisi, vero dolor eveniet saepe et omnis!</AccordionDetails>
        </Accordion > 
        <Accordion expanded={accordionExpanded === "panel3"} onChange ={()=> handleChange(accordionExpanded, "panel3")}>
        <AccordionSummary id="panel3-header" expandIcon={<ExpandMoreRounded />}>
            <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails id="panel3-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, alias consectetur! Porro vero consequuntur sapiente earum culpa, corporis libero unde eos eius quibusdam repudiandae id quos dolor, magni excepturi impedit perspiciatis modi sint. Consequatur, voluptate commodi? Vitae perspiciatis minima provident magni soluta facilis nisi, vero dolor eveniet saepe et omnis!</AccordionDetails>
        </Accordion>
    </div>
    )
}

export default MuiAccordion