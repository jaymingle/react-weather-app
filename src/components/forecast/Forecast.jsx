import React from 'react';
import {
    Accordion,
    AccordionItemHeading,
    AccordionItem,
    AccordionItemPanel,
    AccordionItemButton
} from "react-accessible-accordion";

import "./Forecast.css"

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


const Forecast = ({data}) => {

    const dayInAWeek = new Date().getDay();
    // console.log(dayInAWeek)
    const forecastDays =  WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek))
    // console.log(forecastDays)
    
    return (
        <div>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img src={`icons/${item.weather[0].icon}.png`} alt="weather" className="icon-small"/>
                                    <label className="day">{forecastDays[idx]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label className="pressure-label">Pressure</label>
                                    <label className="pressure-data">{item.main.pressure}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label className="pressure-label">Humidity</label>
                                    <label className="pressure-data">{item.main.humidity}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label className="pressure-label">Clouds</label>
                                    <label className="pressure-data">{item.clouds.all}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label className="pressure-label">Wind Speed</label>
                                    <label className="pressure-data">{item.wind.speed}</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                ))}
            </Accordion>
        </div>
    );
};

export default Forecast;
