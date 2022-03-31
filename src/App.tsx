import { BrowserRouter, Route } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';

import { Login } from './Login';

import { Doctor, ViewAppointments, DocAppointmentCancel } from './Doctor';
import { Patient, AppointmentSuccess, AppointmentCancel, ViewPatientAppointments } from './Patient';
import { BookAppointment } from './BookAppointment';
import { Feedback, FeedbackSuccess } from './Feedback';

import img from './img.jpg';

export const App = () => {
  return (
    <div>
      <Header />

      <div>
        <img src={img} alt="Doctors" style={{ width: '100%', height: '200px' }} />
      </div>

      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Login} />
          <Route exact path='/doctor' component={Doctor} />
          <Route exact path='/patient' component={Patient} />
          <Route exact path='/appointment' component={BookAppointment} />
          <Route exact path='/appointmentSuccess' component={AppointmentSuccess} />
          <Route exact path='/appointmentCancel' component={AppointmentCancel} />
          <Route exact path='/appointmentView' component={ViewAppointments} />
          <Route exact path='/docAppointmentCancel' component={DocAppointmentCancel} />
          <Route exact path='/patAppointmentView' component={ViewPatientAppointments} />
          <Route exact path='/feedback' component={Feedback} />
          <Route exact path='/feedbackSuccess' component={FeedbackSuccess} />
        </div>
      </BrowserRouter>


      <Footer />
    </div>
  );
}

