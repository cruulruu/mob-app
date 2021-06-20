import {
 IonContent,
 IonPage,
 IonList,
 IonItem,
 IonLabel,
 IonButton,
 useIonModal,
 IonSelect,
 IonSelectOption,
 IonInput,
} from "@ionic/react";
import "./Results.css";

const Body: React.FC<{
 count: number;
 onDismiss: () => void;
 onIncrement: () => void;
}> = ({ count, onDismiss, onIncrement }) => (
 <div className="ion-padding">
  <IonItem>
   <IonLabel>Choose Race</IonLabel>
   <IonSelect placeholder="Select One">
    <IonSelectOption value="female">Female</IonSelectOption>
    <IonSelectOption value="male">Male</IonSelectOption>
   </IonSelect>
  </IonItem>
  <IonItem>
   <IonLabel>Choose Track</IonLabel>
   <IonSelect placeholder="Select One">
    <IonSelectOption value="female">Female</IonSelectOption>
    <IonSelectOption value="male">Male</IonSelectOption>
   </IonSelect>
  </IonItem>
  <IonItem>
   <IonLabel>Choose Driver</IonLabel>
   <IonSelect placeholder="Select One">
    <IonSelectOption value="female">Female</IonSelectOption>
    <IonSelectOption value="male">Male</IonSelectOption>
   </IonSelect>
  </IonItem>
  <IonItem>
   <IonLabel position="floating">Enter Time</IonLabel>
   <IonInput placeholder="Select One">
   </IonInput>
  </IonItem>
  <br></br>
  <br></br>
  <IonButton expand="block" onClick={() => onIncrement()}>
   SAVE RESULT
  </IonButton>
  <IonButton expand="block" onClick={() => onDismiss()}>
   CLOSE
  </IonButton>
 </div>
);

const Results: React.FC = () => {

 const handleIncrement = () => {
  dismiss();
 };

 const handleDismiss = () => {
  dismiss();
 };

 /**
  * First parameter is the component to show, second is the props to pass
  */
 const [present, dismiss] = useIonModal(Body, {
  onDismiss: handleDismiss,
  onIncrement: handleIncrement,
 });

 return (
  <IonPage>
   <IonContent fullscreen class="ion-padding">
    <IonList>
     <IonItem text-wrap>
      <IonLabel>
       <h2>ARULA 7.6 KM</h2>
       <p>
        <strong>Best: </strong>Mati Maasikas, 06:74:01
       </p>
      </IonLabel>
      <IonButton>ALL</IonButton>
     </IonItem>
    </IonList>
    <IonItem lines="none">
     <IonButton
      slot="end"
      onClick={() => {
       present({
        cssClass: "my-class",
       });
      }}
     >
      ADD RESULT
     </IonButton>
    </IonItem>
   </IonContent>
  </IonPage>
 );
};

export default Results;
