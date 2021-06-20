import React, { FunctionComponent } from "react";
import dayjs from "dayjs";
import {
 IonCol,
 IonIcon,
 IonList,
 IonItem,
 IonLabel,
} from "@ionic/react";

import { Result } from "../models/results";

interface Props {
 result: Result;
 onDelete: (result: Result) => void;
}

export const ResultListItem: FunctionComponent<Props> = ({ result, onDelete }) => {
 const onClick = () => {
  onDelete(result);
 };

 return (
  <IonList>
   <IonItem text-wrap>
    <IonLabel>
     <h1>{result.raceName}</h1>
     <h1>{dayjs(result.creationTime).format("DD/MM/YYYY")}</h1>
     <h2>{result.trackName}</h2>
     <p>
      <strong>Result: </strong> {result.name}
     </p>
    </IonLabel>
    <IonCol>
     <IonIcon
      className="floatButton paddingRightDelete"
      name="close"
      onClick={onClick}
     />
    </IonCol>
   </IonItem>
  </IonList>
 );
};
