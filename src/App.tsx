import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import StripeCheckoutComponent from "./components/payment/StripeCheckoutComponent";
import StripePaymentCancel from "./components/payment/StripePaymentCancel";
import StripePaymentSuccess from "./components/payment/StripePaymentSuccess";


function App() {
  return (
    <BrowserRouter>
    <ToastContainer></ToastContainer>
   <Switch>
    <Route exact path="/" component={StripeCheckoutComponent}/>
    <Route exact path="/StripePaymentSuccess" component={StripePaymentSuccess} />
    <Route exact path="/StripePaymentCancel" component={StripePaymentCancel} />
   </Switch>
  </BrowserRouter>
  );
}

export default App;