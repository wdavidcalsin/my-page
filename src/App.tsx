import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PageHome, PageMe } from './pages';

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
         </Switch>
      </BrowserRouter>
   );
}

export default App;
