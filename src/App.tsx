import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Main from './pages/Main';
import Races from './pages/Races';
import Results from './pages/Results';
import Account from './pages/Account';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/custom.css';

const App: React.FC = () => (
 <IonApp>
  <IonReactRouter>
   <IonTabs>
    <IonRouterOutlet>
     <Route exact path="/main">
      <Main />
     </Route>
     <Route exact path="/races">
      <Races />
     </Route>
     <Route path="/results" render={() => <Results />} exact={true} />
     <Route path="/Account">
      <Account />
     </Route>
     <Route exact path="/">
      <Redirect to="/main" />
     </Route>
    </IonRouterOutlet>
    <IonTabBar slot="bottom" color="primary">
     <IonTabButton tab="main" href="/main">
      <IonLabel>MAIN</IonLabel>
     </IonTabButton>
     <IonTabButton tab="races" href="/races">
      <IonLabel>RACES</IonLabel>
     </IonTabButton>
     <IonTabButton tab="results" href="/results">
      <IonLabel>RESULTS</IonLabel>
     </IonTabButton>
     <IonTabButton tab="account" href="/account">
      <IonLabel>ACCOUNT</IonLabel>
     </IonTabButton>
    </IonTabBar>
   </IonTabs>
  </IonReactRouter>
 </IonApp>
);

export default App;
