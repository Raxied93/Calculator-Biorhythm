import dayjs from 'dayjs';

function calculatorBiorhythm(birthDate:any, targetDate:any, cycle:any) {
    const birthDay = dayjs(birthDate).startOf('day');
    const targetDay = dayjs(targetDate).startOf('days');
    const diff = targetDay.diff(birthDay, 'days');
    return Math.sin(2 * Math.PI * diff / cycle);
} 

export function calculatorBiorhythms(birthDate:any, targetDate:any) {
    return {
        date : targetDate,
        Physical : calculatorBiorhythm(birthDate, targetDate, 23),
        Emotional : calculatorBiorhythm(birthDate, targetDate, 28),
        Intellectual : calculatorBiorhythm(birthDate, targetDate, 33)
    }
}

export function calculatorBiorhythmSeries(birthDate:any, startDate:any, size:any) {
    const series = [];
    const startDay = dayjs(startDate).startOf('day');
    for (let i=0; i < size; i++){
        const targetDate = startDay.add(i, 'days').toISOString();
        series.push(calculatorBiorhythms(birthDate, targetDate));
    }
    return series;
}