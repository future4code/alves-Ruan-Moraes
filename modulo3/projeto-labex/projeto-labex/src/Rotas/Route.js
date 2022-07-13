import React from "react";
import { HomePage } from './pages/HomePage'
import {ListTrip} from './pages/ListTripsPage'
import { ApplicationForm } from './pages/ApplicationFormPage'
import { LoginPage } from './pages/LoginPage'
import { AppConteiner } from "../Rotas/Route";

function App() {
  return (
    <div>
      <HomePage/>
      <ListTrip/>
      <ApplicationForm/>
      <LoginPage/>
     <AppConteiner/>
    </div>
  );
}
export default App;