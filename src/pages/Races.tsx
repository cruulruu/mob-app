import { IonContent, IonPage, IonItem, IonLabel, IonList, IonButton } from "@ionic/react";
import "./Races.css";

const Races: React.FC = () => {
 return (
  <IonPage>
   <IonContent fullscreen class="ion-padding">
    <IonList>
     <IonItem text-wrap>
      <IonLabel>
       <h2>Kevad Race</h2>
       <p>Alaküla, Arula, Rally School</p>
       <p>13.07.2021</p>
      </IonLabel>
      <IonButton>JOIN</IonButton>
     </IonItem>
     <IonItem text-wrap>
      <IonLabel>
       <h2>Summer Race</h2>
       <p>Alaküla, Arula, Rally School</p>
       <p>03.07.2021</p>
      </IonLabel>
      <IonButton>UNJOIN</IonButton>
     </IonItem>
    </IonList>
   </IonContent>
  </IonPage>
 );
};

export default Races;
