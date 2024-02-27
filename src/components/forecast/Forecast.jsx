import React from 'react';
import {Accordion, AccordionItemHeading, AccordionItem, AccordionItemPanel} from "react-accessible-accordion";

const Forecast = ({data}) => {
    return (
        <div>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading></AccordionItemHeading>
                        <AccordionItemPanel></AccordionItemPanel>
                    </AccordionItem>

                ))}
            </Accordion>
        </div>
    );
};

export default Forecast;
