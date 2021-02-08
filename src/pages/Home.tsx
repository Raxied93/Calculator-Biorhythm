import {
  IonContent, 
  IonDatetime, 
  IonHeader, 
  IonItem, 
  IonLabel, 
  IonPage, 
  IonTitle, 
  IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import Biorhythms from '../components/ExploreContainer';
import './Home.css';
import {useLocalStorage} from './hook'

const Home: React.FC = () => {
  const [birthDate, setBirthDate] = useLocalStorage('birthDate', '');
  const [targetDate, setTargetDate] = useState(new Date().toISOString());
  return (
    <IonPage>
      {/* The Title */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* The Content */}
      <IonContent fullscreen>
      {/* Condition birthDate to bring up the biorhythym card */}
        {birthDate ?
          <Biorhythms birthDate={birthDate} targetDate={targetDate} />
          : null}

      {/* The Input Date */}
      <IonItem>
        <IonLabel position="stacked">Date Birth : </IonLabel>
        <IonDatetime displayFormat="DD MMM YYYY" value={birthDate} onIonChange={(e:any) => setBirthDate(e.detail.value)}></IonDatetime>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Target Date : </IonLabel>
        <IonDatetime displayFormat="DD MMM YYYY" value={targetDate} onIonChange={(e:any) => setTargetDate(e.detail.value)}></IonDatetime>
      </IonItem>

      
      </IonContent>
    </IonPage>
  );
};

export default Home;
