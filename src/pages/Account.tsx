import {
 IonContent,
 IonItem,
 IonPage,
 IonInput,
 IonLabel,
 IonButton,
 IonRow,
 IonCol,
} from "@ionic/react";
import "./Account.css";

const Account: React.FC = () => {
 return (
  <IonPage>
   <IonContent fullscreen class="ion-padding">
    <IonItem>
     <IonLabel position="floating">First Name</IonLabel>
     <IonInput type="text"></IonInput>
    </IonItem>
    <IonItem>
     <IonLabel position="floating">Last Name</IonLabel>
     <IonInput type="text"></IonInput>
    </IonItem>
    <IonItem>
     <IonLabel position="floating">E-mail</IonLabel>
     <IonInput type="email"></IonInput>
    </IonItem>
    <IonItem>
     <IonLabel position="floating">Password</IonLabel>
     <IonInput type="password"></IonInput>
    </IonItem>
    <br></br>
    <br></br>
    <br></br>
    <IonRow>
     <IonCol size="3"></IonCol>
     <IonCol size="4">
      <IonButton>CHANGE ACCOUNT</IonButton>
     </IonCol>
     <IonCol size="4"></IonCol>
    </IonRow>
    <IonRow>
     <IonCol size="3"></IonCol>
     <IonCol size="4">
      <IonButton>DELETE ACCOUNT</IonButton>
     </IonCol>
     <IonCol size="4"></IonCol>
    </IonRow>
   </IonContent>
  </IonPage>
 );
};

export default Account;
