import { IonCard, IonContent, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Main.css';

const Main: React.FC = () => {

  return (
   <IonPage>
    <IonContent fullscreen class="ion-padding">
     <IonToolbar>
      <IonTitle>Your personal bests:</IonTitle>
     </IonToolbar>
     <IonCard>
      <IonCardHeader>
       <IonCardSubtitle>20.06.2021</IonCardSubtitle>
       <IonCardTitle>Arula</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>4.7 km - 02:14:71</IonCardContent>
     </IonCard>
     <IonCard>
      <IonCardHeader>
       <IonCardSubtitle>20.06.2021</IonCardSubtitle>
       <IonCardTitle>Rally School</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>4.7 km - 06:17:71</IonCardContent>
     </IonCard>
    </IonContent>
   </IonPage>
  );
};

export default Main;
