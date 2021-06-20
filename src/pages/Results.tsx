import React from "react";
import {
 IonContent,
 IonToolbar,
 IonButton,
 IonPage,
 IonModal,
 IonItem,
} from "@ionic/react";

import { Result } from "../models/results";
import ResultsList from "../components/ResultsList";
import { NewResultForm } from "../components/NewResultForm";

interface State {
 newResult: Result;
 results: Result[];
 showInputPopover: boolean;
}

export default class App extends React.Component<{}, State> {
 state = {
  newResult: {
   id: 1,
   name: "",
   trackName: "",
   raceName: "",
   creationTime: "",
  },

  results: [],
  showInputPopover: false,
 };

 render() {
  return (
   <IonPage>
    <IonContent fullscreen class="ion-padding">
     <IonModal
      backdropDismiss={false}
      isOpen={this.state.showInputPopover}
      onDidDismiss={this.hidePopover}
     >
      <IonToolbar>
       <h4 className="centerButton"> New Result: </h4>
      </IonToolbar>
      <NewResultForm
       result={this.state.newResult}
       onAdd={this.addResult}
       onChange={this.handleTaskChange}
       onSelectTrack={this.handleTrackSelect}
       onSelectRace={this.handleRaceSelect}
      />
      <div className="centerButton">
       <IonButton
        className="subMaxWidth"
        expand="block"
        onClick={this.hidePopover}
       >
        {" "}
        Close{" "}
       </IonButton>
      </div>{" "}
      <br />
     </IonModal>

     <ResultsList results={this.state.results} onDelete={this.deleteTask} />
     <IonItem lines="none">
      <IonButton slot="end" onClick={this.showPopover}>
       ADD RESULT
      </IonButton>
     </IonItem>
    </IonContent>
   </IonPage>
  );
 }

 private showPopover = () => {
  this.setState({
   showInputPopover: true,
  });
 };

 private hidePopover = () => {
  this.setState({
   showInputPopover: false,
  });
 };

 private addResult = (event: React.FormEvent<HTMLFormElement>) => {
  this.setState({
   showInputPopover: false,
  });
  event.preventDefault();

  this.setState((previousState) => ({
   newResult: {
    id: previousState.newResult.id + 1,
    name: "",
    trackName: "",
    raceName: "",
    creationTime: "",
   },
   results: [...previousState.results, previousState.newResult],
  }));
 };

 private handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  this.setState({
   newResult: {
    ...this.state.newResult,
    name: event.target.value,
    creationTime: this.getDateNow(),
   },
  });
 };

 private handleTrackSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
  this.setState({
   newResult: {
    ...this.state.newResult,
    trackName: event.target.value,
   },
  });
 };

 private handleRaceSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
  this.setState({
   newResult: {
    ...this.state.newResult,
    raceName: event.target.value,
   },
  });
 };

 private getDateNow = () => {
  let now = new Date();
  let isoString = now.toISOString();
  return isoString;
 };

 private deleteTask = (taskToDelete: Result) => {
  this.setState((previousState) => ({
   results: [
    ...previousState.results.filter((task) => task.id !== taskToDelete.id),
   ],
  }));
 };
}
