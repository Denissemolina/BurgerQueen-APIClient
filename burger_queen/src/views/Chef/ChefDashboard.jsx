import "./chef.css";
import { Link } from "react-router-dom";
import User from "../../components/User";

export default function ChefDashboard() {
  return (
    <div className="admin_dashboard">
      <h1>Chef Dashboard</h1>
      <User />
      <Link to={"/"} style={{ margin: "5px" }}>
        {" "}
        Home{" "}
      </Link>
    </div>
  );
}
