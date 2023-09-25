import React, { createContext, useEffect, useState } from "react";
import Rout from "./Rout";

export const ContextData = createContext()
function App() {
  const [postDatas, setPostDatas] = useState([])
  const [loader, setLoader] = useState(true)
  const [saveBasket, setSaveBasket] = useState([]);
  const [login, setLogin] = useState([])
  const [signTrue, setLoginTrue] = useState(false)

  useEffect(() => {
    fetch("https://elmir-50255-default-rtdb.firebaseio.com/post.json")
      .then(res => res.json())
      .then(datas => {
        setPostDatas(...postDatas, Object.values(datas))
        setLoader(false)
      }
      )
  }, [])

  // useEffect(() => {
  //   fetch("https://ismixan-6005b-default-rtdb.firebaseio.com/post.json")
  //     .then(res => res.json())
  //     .then(datas => {
  //       setLogin(...login, Object.values(datas))
  //     }
  //     )
  // }, [])




  const data = [
    {
      like: 13,
      comment: 11,
      id: 1,
      img: "https://i.pinimg.com/564x/f4/7b/f9/f47bf9905f5a7bf8ffe6a09771aba2ac.jpg",
      name: "tagiyevis"
    },
    {
      like: 15,
      comment: 14,
      id: 2,
      img: "https://i.pinimg.com/564x/97/40/7f/97407f245cd8982ba86d3edda53c77b4.jpg",
      name: "anmesii"
    },
    {
      like: 54,
      comment: 12,
      id: 3,
      img: "https://i.pinimg.com/564x/a1/6b/dc/a16bdcdeeeb7064772352874c48e1adc.jpg",
      name: "andrey_"
    },
    {
      like: 24,
      comment: 23,
      id: 4,
      img: "https://i.pinimg.com/564x/ac/cd/65/accd65a86be2007373868397a4e9273e.jpg",
      name: "edit-page"
    },
    {
      like: 64,
      comment: 22,
      id: 5,
      img: "https://i.pinimg.com/564x/06/df/cc/06dfcc2da8e0abfa9a2cbc78c77a772d.jpg",
      name: "ramanie_o1"
    },
    {
      like: 43,
      comment: 17,
      id: 6,
      img: "https://i.pinimg.com/564x/b2/de/31/b2de31f49e2bd64d6b5d796b0adf6287.jpg",
      name: "aisella"
    },
    {
      like: 35,
      comment: 13,
      id: 7,
      img: "https://i.pinimg.com/564x/19/2b/c2/192bc2558c2eddec6568684b7de98fdc.jpg",
      name: "radue_rama"
    },
    {
      like: 13,
      comment: 2,
      id: 8,
      img: "https://i.pinimg.com/564x/e3/92/6e/e3926e7abf2dc3f5a3e81eed761e2049.jpg",
      name: "modern"
    },
    {
      like: 13,
      comment: 2,
      id: 9,
      img: "https://i.pinimg.com/564x/18/81/1d/18811d2eb82a5834997da3c49e655d1f.jpg",
      name: "alina_uk"
    },
    {
      like: 13,
      comment: 2,
      id: 10,
      img: "https://i.pinimg.com/564x/06/51/8e/06518e28b7a90484b6498437ba5498b7.jpg",
      name: "usa.clikca"
    },
    {
      like: 13,
      comment: 2,
      id: 11,
      img: "https://i.pinimg.com/564x/df/c9/3b/dfc93b656b0a3a833c05fd70aebf0e91.jpg",
      name: "favorik"
    },
    {
      like: 13,
      comment: 2,
      id: 12,
      img: "https://i.pinimg.com/564x/2b/d9/e5/2bd9e51b1c092c1980008ffdd39a979a.jpg",
      name: "amilda.1"
    },
    {
      like: 13,
      comment: 2,
      id: 13,
      img: "https://i.pinimg.com/564x/3e/3c/37/3e3c3707918aa046914e80e94b7bb80f.jpg",
      name: "asitama"
    },
    {
      like: 13,
      comment: 2,
      id: 14,
      img: "https://i.pinimg.com/564x/56/72/b1/5672b13718380e6eaea917bfadc49de7.jpg",
      name: "Wlida"
    },
    {
      like: 13,
      comment: 2,
      id: 15,
      img: "https://i.pinimg.com/564x/09/4a/ed/094aed9e50ad73d9a0439630bb4ed2d4.jpg",
      name: "aila_i"
    },
    {
      like: 13,
      comment: 2,
      id: 16,
      img: "https://i.pinimg.com/564x/f7/ca/0e/f7ca0e1b1e33efcba9082a4b2195b1d9.jpg",
      name: "Wlaine_01"
    },
    {
      like: 13,
      comment: 2,
      id: 17,
      img: "https://i.pinimg.com/564x/b2/b2/1c/b2b21c34291aae31f11ee2986655d569.jpg",
      name: "natlya"
    },
    {
      like: 13,
      comment: 2,
      id: 18,
      img: "https://i.pinimg.com/564x/0a/51/c1/0a51c135c509c231b0d373327556b1e6.jpg",
      name: "mina_"
    },
  ]

  const values = {
    data,
    postDatas,
    setPostDatas,
    loader,
    saveBasket,
    setSaveBasket,
    login,
    setLoginTrue,
    signTrue
  }

  return (
    <ContextData.Provider value={values}>
      <div>
        <Rout signTrue={signTrue} setLoginTrue={setLoginTrue} />
      </div>
    </ContextData.Provider>
  );
}

export default App;
