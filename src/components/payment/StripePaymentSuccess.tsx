import { useHistory } from "react-router-dom";

const StripePaymentSuccess = () => {

  let history = useHistory();

  const handleClick = () => {
    history.push("/")
    window.location.reload();
  }
    return (
      <div style={{ margin: "5%" }}>
        <h2>Thanks for your order!</h2>
        <h4>Your payment is successful.</h4>
        <p>
          We appreciate your business! If you have any questions, please email{" "}
          <a href="mailto:dezina.brainerhub@gmail.com">dezina.brainerhub@gmail.com</a>.
        </p>
        <div>
          <button role="link" onClick={handleClick} 
          style={{cursor: "pointer", backgroundColor: "#2980B9", width: "180px", height: "40px", 
          borderRadius: "20px", fontSize: "16px"}}>
            {" "}
            Go to Order page
          </button>
        </div>
      </div>
    );
  };
  
  export default StripePaymentSuccess;