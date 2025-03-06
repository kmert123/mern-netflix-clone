import { useAuthStore } from "../../store/authUser.js";
import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";

const HomePage = () => {
  const { user } = useAuthStore();

  return <>{user ? <HomeScreen></HomeScreen> : <AuthScreen></AuthScreen>}</>;
};

export default HomePage;
