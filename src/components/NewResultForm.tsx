import React, { FunctionComponent } from "react";
import { IonButton, IonGrid, IonRow } from "@ionic/react";
import "../theme/custom.css";
import { Result } from "../models/results";

interface Props {
 onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
 onSelectTrack: (event: React.ChangeEvent<HTMLSelectElement>) => void;
 onSelectRace: (event: React.ChangeEvent<HTMLSelectElement>) => void;
 onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
 result: Result;
}

export const NewResultForm: FunctionComponent<Props> = ({
 onChange,
 onSelectTrack,
 onSelectRace,
 onAdd,
 result,
}) => (
 <form onSubmit={onAdd}>
  <IonGrid className="gridPadding">
   <IonRow className="centerInput">
    <select className="subMaxWidth inputBorder padding" onBlur={onSelectRace}>
     <option value="0" selected>
      Choose Race
     </option>
     <option value="Summer Rally">Summer Rally</option>
     <option value="Quick Shakedown">Quick Shakedown</option>
    </select>
   </IonRow>{" "}
   <IonRow className="centerInput">
    <select className="subMaxWidth inputBorder padding" onBlur={onSelectTrack}>
     <option value="0" selected>
      Choose Track
     </option>
     <option value="Arula 4.7km">Arula</option>
     <option value="Rally School 2.5km">Rally School</option>
    </select>
   </IonRow>{" "}
   <IonRow className="centerInput">
    <input
     className="subMaxWidth inputBorder padding"
     placeholder="Insert Time"
     onChange={onChange}
     value={result.name}
    />
   </IonRow>{" "}
   <br />
   <IonRow className="centerButton">
    <IonButton className="subMaxWidth" fill="outline" type="submit">
     {" "}
     SAVE RESULT{" "}
    </IonButton>
   </IonRow>
  </IonGrid>
 </form>
);
