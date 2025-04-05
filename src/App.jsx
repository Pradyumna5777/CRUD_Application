import List from "./components/List";
import ItemContextProvider from "./components/ItemContextProvider";
import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return(
   
  <ItemContextProvider>
     {
      loading?<SplashScreen/>:
    <List />
     }
  </ItemContextProvider>
    
)}

export default App;
