import dayjs from 'dayjs';
import React, { ReactNode } from 'react';
import {
    LineChart,
    ResponsiveContainer, Line, XAxis, ReferenceLine, CartesianGrid
} from 'recharts';
import {calculatorBiorhythmSeries} from './Calculation'
import './BiorhythmChart.css'


interface Props {
    birthDate : any;
    targetDate : any;
}

function formatDate(isoString:any){
    return dayjs(isoString).format('D MMM');
}



function BiorhythmChart({birthDate, targetDate} : Props){
    const startDate = dayjs(targetDate).subtract(15, 'days').toISOString();
    const data = calculatorBiorhythmSeries(birthDate, startDate, 31)
    .map((item) => ({...item, date: formatDate(item.date)}));
    return(
    <ResponsiveContainer className="biorhythm-chart" width="100%" height={200}>
        <LineChart data={data}>
            <XAxis dataKey="date" ticks={[data[3].date, data[15].date, data[27].date]}/>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <ReferenceLine x={data[15].date} />
            <Line type="natural" dot={false} dataKey="Physical" className="physical"></Line>
            <Line type="natural" dot={false} dataKey="Emotional" className="emotional"></Line>
            <Line type="natural" dot={false} dataKey="Intellectual" className="intellectual"></Line>
        </LineChart>
    </ResponsiveContainer>
    );
}

export default BiorhythmChart;