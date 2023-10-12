import React, { createContext, useEffect, useState } from "react";
import Rout from "./Rout";
import Acount from "./components/Login_SignUP/Acount";

export const ContextData = createContext();
function App() {
  // const [color, setColor] = useState()
  const [postDatas, setPostDatas] = useState([]);
  const [loader, setLoader] = useState(true);
  const [saveBasket, setSaveBasket] = useState([]);
  const [signTrue, setLoginTrue] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  const [userInfo, setUserInfo] = useState([]);
  const activeUser = localStorage.getItem("activeUser");
  useEffect(() => {
    fetch("https://instagram-152c4-default-rtdb.firebaseio.com/users.json")
      .then((res) => res.json())
      .then((datas) =>{ setPostDatas(...postDatas,Object.values(datas).map(item => Object.values(item).filter(item => typeof item === "object"  )).filter(item => item.length>0));
      setLoader(false)})

    }, []);


  useEffect(() => {
    if (activeUser) {
      fetch(
        `https://instagram-152c4-default-rtdb.firebaseio.com/users/${activeUser}.json`
      )
        .then((res) => res.json())
        .then((datas) => setUserInfo(datas));
    }
  }, []);

  const objectsArray = Object.values(userInfo).filter(
    (item) => typeof item === "object"
  );

  const data = objectsArray;

  const values = {
    showAccount,
    setShowAccount,
    data,
    postDatas,
    setPostDatas,
    loader,
    saveBasket,
    setSaveBasket,
    setLoginTrue,
    signTrue,
    userInfo,
    activeUser,
    
  };
  const user = localStorage.getItem("user");

  return (
    <ContextData.Provider value={values}>
      {user == "true" ? (
        <div>
          <Rout signTrue={signTrue} setLoginTrue={setLoginTrue} />
        </div>
      ) : (
        <Acount />
      )}
    </ContextData.Provider>
  );
}

export default App;
