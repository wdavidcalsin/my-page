import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PageHome, PageMe, Projetcs } from './pages';

function App() {
   return (
      <BrowserRouter>
         {/* Layout Index */}
         <Switch>
            <Route path="/" exact>
               <PageHome />
            </Route>
            <Route path="/me">
               <PageMe />
            </Route>
            <Route path="/projects">
               <Projetcs />
            </Route>
         </Switch>
      </BrowserRouter>
   );
}

export default App;
