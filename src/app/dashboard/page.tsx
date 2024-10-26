import Home from "../page";
import Predictions from "./predictions/page";
import Profile from "./profile/page";

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col z-200 bg-blue-400">
      <Home />
      <Predictions />
      <Profile />
    </div>
  );
};

export default Dashboard;
