import dayjs from 'dayjs'
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import React from 'react';
import './ExploreContainer.css';
import { calculatorBiorhythms } from '../pages/Calculation'
import BiorhythmChart from '../pages/BiorhythmChart';

interface BiorhythmsProps {
  targetDate : any;
  birthDate : any;
 }

 function formatDate(isoString:any){
   return dayjs(isoString).format('D MMM YYYY');

 }
const Biorhythms: React.FC<BiorhythmsProps> = ({birthDate, targetDate}) => { 
  const {Physical, Emotional, Intellectual} = calculatorBiorhythms(birthDate, targetDate);
  return (
    <IonCard className="biorhythm-card ion-text-center">
      <IonCardHeader>
        <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <BiorhythmChart birthDate={birthDate} targetDate={targetDate} />
        <p className="physical">Physical : {Physical.toFixed(4)}</p>
        <p className="emotional">Emotional : {Emotional.toFixed(4)}</p>
        <p className="intellectual">Intellectual : {Intellectual.toFixed(4)}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default Biorhythms;
