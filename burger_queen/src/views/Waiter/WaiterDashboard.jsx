import DateTime from "../../components/DateTime";
import SingOut from "../../components/SingOut";
import ButtonNewClient from "./waiterComponents/components/ButtonNewClient";
import "./waiter.css";
import Ready from "./waiterComponents/ready/OrdersReady";
import { Link } from "react-router-dom";
import User from "../../components/User";

export default function WaiterDashboard() {
  return (
    <div className="waiter_dashboard">
      <DateTime />
      <SingOut />
      {/* <User  name={doc.Name} role={doc.Role}/> */}
      <Ready />
      <ButtonNewClient />
      <Link to={"/"} style={{ margin: "5px" }}>
        {" "}
        Home{" "}
      </Link>
    </div>
  );
}
