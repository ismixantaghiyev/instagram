import React, { createContext, useEffect, useState } from "react";
import Rout from "./Rout";
import Acount from "./components/Login_SignUP/Acount";

export const ContextData = createContext();
function App() {
  const [theme, setTheme] = useState({
    color: "#000000",
    bgColor: "#fefff9",
    bgPopup:"#262626"
  });

  const dataStory = [
    {
      img:"https://i.pinimg.com/564x/96/e3/5d/96e35d595bd67f73966bd76acab23d59.jpg",
      name:"1",
      id:1,
    },
    {
      img:"https://i.pinimg.com/736x/2a/ed/16/2aed16fde01eae7976f6b65a621447bb.jpg",
      name:"2",
      id:2
    },
    {
      img:"https://i.pinimg.com/564x/7d/31/b3/7d31b339916798c7ac798c3a5861569f.jpg",
      name:"3",
      id:3
    },
    {
      img:"https://i.pinimg.com/564x/ec/d3/6b/ecd36bed10f5e06bdf1ef966031c0e03.jpg",
      name:"4",
      id:4
    },
    {
      img:"https://i.pinimg.com/564x/71/91/9d/71919d9ec5151208a851991e423da6c2.jpg",
      name:"5",
      id:5,
    },
    {
      img:"https://i.pinimg.com/564x/b4/3c/0b/b43c0b0d65e7500b6f95222ae5021835.jpg",
      name:"6",
      id:6,
    },
    {
      img:"https://i.pinimg.com/564x/3b/58/5d/3b585d6d365e5d629f0b0513364e8afd.jpg",
      name:"7",
      id:7
    },
    {
      img:"https://i.pinimg.com/564x/dc/e5/9f/dce59f9634e775eb72d12a3df051c3ad.jpg",
      name:"8",
      id:8,
    },
    {
      img:"https://i.pinimg.com/564x/6e/43/0b/6e430bc737dd7fb863783b82c1414221.jpg",
      name:"9",
      id:9,
    },
    {
      img:"https://i.pinimg.com/564x/e7/28/ac/e728acbeff50d4e787bf6c4c11583edd.jpg",
      name:"10",
      id:10,
    },
    {
      img:"https://i.pinimg.com/564x/06/7c/4a/067c4a13d1bf8e73cb74199c2432ea51.jpg",
      name:"11",
      id:11,
    },
    {
      img:"https://i.pinimg.com/564x/d4/8b/b6/d48bb623191d8c79a1e581bd55d4de42.jpg",
      name:"12",
      id:12,
    },
    {
      img:"https://i.pinimg.com/564x/12/9b/d2/129bd2ac01c3a6c25c4c61e8ea80f144.jpg",
      name:"13",
      id:13,
    },
    {
      img:"https://i.pinimg.com/564x/c7/60/ce/c760cefa1e6014e8aa8db79844e69cc1.jpg",
      name:"14",
      id:14,
    },
    {
      img:"https://i.pinimg.com/564x/c4/5f/4b/c45f4bbfc9f3f94df29297c1cca5e9c7.jpg",
      name:"15",
      id:15,
    },
    {
      img:"https://i.pinimg.com/564x/de/d6/42/ded642688a301d00fbb838cb37525ee5.jpg",
      name:"16",
      id:16,
    },
    {
      img:"https://i.pinimg.com/564x/2c/0c/d1/2c0cd100debe4518ef6267712cc7dda6.jpg",
      name:"17",
      id:17,
    },
  ]

  const [hover, setHover] = useState(false)

  const [darkClick, setDarkClick] = useState(false)
  const [postDatas, setPostDatas] = useState([]);
  const [loader, setLoader] = useState(true);
  const [saveBasket, setSaveBasket] = useState([]);
  const [signTrue, setLoginTrue] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  const [userInfo, setUserInfo] = useState([]);
  console.log(userInfo,'userInfo');
  const activeUser = localStorage.getItem("activeUser");

  useEffect(() => {
    fetch("https://instagram-152c4-default-rtdb.firebaseio.com/users.json")
      .then((res) => res.json())
      .then((datas) => {
        setPostDatas(
          ...postDatas,
          Object.values(datas)
            .map((item) =>
              Object.values(item).filter((item) => typeof item === "object")
            )
            .filter((item) => item.length > 0)
        );
        setLoader(false);
      });
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
    theme,
    setTheme,
    darkClick,
    setDarkClick, 
    hover, 
    setHover, 
    dataStory
  };
  const user = localStorage.getItem("user");

  return (
    <ContextData.Provider value={values}>
      {user == "true" ? (
        <div style={{color:theme.color,backgroundColor:theme.bgColor}}>
          <Rout signTrue={signTrue} setLoginTrue={setLoginTrue} />
        </div>
      ) : (
        <Acount />
      )}
    </ContextData.Provider>
  );
}

export default App;
