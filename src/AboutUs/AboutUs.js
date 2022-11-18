import {React, useState} from "react";
import {Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Fade from 'react-reveal/Fade';

import './AboutUs.css'

const textArr = [
    {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },

    {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },

    {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }
]

function AboutUs() {

    const [img1, setIMG1] = useState('img-right1')
    const [img2, setIMG2] = useState('img-right1')
    const [img3, setIMG3] = useState('img-right1')
    const [img4, setIMG4] = useState('img-right1')

    function onImg1Click(){
        setIMG1('img_opacity_1')
        setIMG2('img_opacity_0')
        setIMG3('img_opacity_0')
        setIMG4('img_opacity_0')
    }

    function onImg2Click(){
        setIMG1('img_opacity_0')
        setIMG2('img_opacity_1')
        setIMG3('img_opacity_0')
        setIMG4('img_opacity_0')
    }

    function onImg3Click(){
        setIMG1('img_opacity_0')
        setIMG2('img_opacity_0')
        setIMG3('img_opacity_1')
        setIMG4('img_opacity_0')
    }

    function onImg4Click(){
        setIMG1('img_opacity_0')
        setIMG2('img_opacity_0')
        setIMG3('img_opacity_0')
        setIMG4('img_opacity_1')
    }

    const [expanded, setExpanded] = useState(false)

    const handleChange = (isExpanded, panel) =>{
        setExpanded(isExpanded ? panel : false)
    }

    return(
        <div className="About_us ">

            <Fade><p className="About_us_header" >ჩვენ შესახებ</p></Fade>

            <div className="About_us_inner responsive_hidden">
            <div className="About_us_inner_left">

             <Fade left>  
            <Accordion disableGutters={true} expanded={expanded === "panel1"} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')} onClick={onImg1Click}>
                <AccordionSummary
                    id="panel1-header"
                    aria-controls="panel1-content"
                    expandIcon={<ExpandMoreIcon />}
                    >
                    <Typography className="fontfix">ჩვენ შესახებ</Typography>
                </AccordionSummary>
                <Typography className="textfix">lorem ipusm</Typography>
            </Accordion></Fade> 

            <Fade left delay={110}>  
            <Accordion disableGutters={true} expanded={expanded === "panel2"} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')} onClick={onImg2Click}>
                <AccordionSummary
                    id="panel2-header"
                    aria-controls="panel2-content"
                    expandIcon={<ExpandMoreIcon />}
                    >
                    <Typography className="fontfix">ჩვენ შესახებ</Typography>
                </AccordionSummary>
                <Typography className="textfix">lorem ipusm</Typography>
            </Accordion></Fade>

            <Fade left delay={120}>  
            <Accordion disableGutters={true} expanded={expanded === "panel3"} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')} onClick={onImg3Click}>
                <AccordionSummary
                    id="panel3-header"
                    aria-controls="panel3-content"
                    expandIcon={<ExpandMoreIcon />}
                    >
                    <Typography className="fontfix">ჩვენ შესახებ</Typography>
                </AccordionSummary>
                <Typography className="textfix">lorem ipusm</Typography>
            </Accordion></Fade>

            <Fade left delay={130}>  
            <Accordion disableGutters={true} expanded={expanded === "panel4"} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel4')} onClick={onImg4Click}>
                <AccordionSummary
                    id="panel4-header"
                    aria-controls="panel4-content"
                    expandIcon={<ExpandMoreIcon />}
                    >
                    <Typography className="fontfix">ჩვენ შესახებ</Typography>
                </AccordionSummary>
                <Typography className="textfix">lorem ipusm</Typography>
            </Accordion></Fade>
            </div>

            <Fade right><div className="About_us_inner_right">
                <img className={img2} src="https://images.ctfassets.net/0idy6cfc9e2j/4XFwUPXLN2ergs7nnB2vmY/c2cb2378177dde9ea5337e4dbf4e8c5a/DSC06832_3.jpg?w=1280&fm=webp&q=80" />
                <img className={img3} src="https://images.ctfassets.net/0idy6cfc9e2j/y2H2wKCG9B7gvLaRzJag7/700f75a2261dbcc4c9f2550a086303c7/insite_451_0117_1.jpg?w=1280&fm=webp&q=80" />
                <img className={img4} src="https://images.ctfassets.net/0idy6cfc9e2j/7vlNIEP6PssY5IHggLjlnY/c4329956011cc71bcf934a8389369124/DSC07479__1__1.png?w=720&fm=webp&q=90" />
                <img className={img1} src="https://images.ctfassets.net/0idy6cfc9e2j/50HzH3Ruq1KbFKOXd6CQSM/8295242a9877dd8c17434d9f90963345/Creative_Life_Science_1.jpg?w=1280&fm=webp&q=80" />
            </div></Fade>
            </div>





            {/* ************************************************************************************** */}
            {/* აქედან
            იწყება 
            რესპონსივისთვის */}
            {/* ********************************************************************************* */}
            
            <div className="About_us_inner_for_Not_Desktop">
            <div className="About_us_inner_left">

             <Fade left>  
            <Accordion disableGutters={true} expanded={expanded === "panel1"} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')} onClick={onImg1Click}>
                <AccordionSummary
                    id="panel1-header"
                    aria-controls="panel1-content"
                    expandIcon={<ExpandMoreIcon />}
                    >
                    <Typography className="fontfix">ჩვენ შესახებ</Typography>
                </AccordionSummary>
                <Typography className="textfix">lorem ipusm</Typography>
            </Accordion></Fade> 

            <Fade right delay={110}>  
            <Accordion disableGutters={true} expanded={expanded === "panel2"} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')} onClick={onImg2Click}>
                <AccordionSummary
                    id="panel2-header"
                    aria-controls="panel2-content"
                    expandIcon={<ExpandMoreIcon />}
                    >
                    <Typography className="fontfix">ჩვენ შესახებ</Typography>
                </AccordionSummary>
                <Typography className="textfix">lorem ipusm</Typography>
            </Accordion></Fade>

            <Fade left delay={120}>  
            <Accordion disableGutters={true} expanded={expanded === "panel3"} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')} onClick={onImg3Click}>
                <AccordionSummary
                    id="panel3-header"
                    aria-controls="panel3-content"
                    expandIcon={<ExpandMoreIcon />}
                    >
                    <Typography className="fontfix">ჩვენ შესახებ</Typography>
                </AccordionSummary>
                <Typography className="textfix">lorem ipusm</Typography>
            </Accordion></Fade>

            <Fade right delay={130}>  
            <Accordion disableGutters={true} expanded={expanded === "panel4"} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel4')} onClick={onImg4Click}>
                <AccordionSummary
                    id="panel4-header"
                    aria-controls="panel4-content"
                    expandIcon={<ExpandMoreIcon />}
                    >
                    <Typography className="fontfix">ჩვენ შესახებ</Typography>
                </AccordionSummary>
                <Typography className="textfix">lorem ipusm</Typography>
            </Accordion></Fade>
            </div>

            <Fade right><div className="About_us_inner_right responsive_hidden">
                <img className={img2} src="https://images.ctfassets.net/0idy6cfc9e2j/4XFwUPXLN2ergs7nnB2vmY/c2cb2378177dde9ea5337e4dbf4e8c5a/DSC06832_3.jpg?w=1280&fm=webp&q=80" />
                <img className={img3} src="https://images.ctfassets.net/0idy6cfc9e2j/y2H2wKCG9B7gvLaRzJag7/700f75a2261dbcc4c9f2550a086303c7/insite_451_0117_1.jpg?w=1280&fm=webp&q=80" />
                <img className={img4} src="https://images.ctfassets.net/0idy6cfc9e2j/7vlNIEP6PssY5IHggLjlnY/c4329956011cc71bcf934a8389369124/DSC07479__1__1.png?w=720&fm=webp&q=90" />
                <img className={img1} src="https://images.ctfassets.net/0idy6cfc9e2j/50HzH3Ruq1KbFKOXd6CQSM/8295242a9877dd8c17434d9f90963345/Creative_Life_Science_1.jpg?w=1280&fm=webp&q=80" />
            </div></Fade>
            </div>



               
        </div>
    )
}

export default AboutUs;


