import Header from "components/complex/Header";
import Template from "templates/index";
import { useEffect, useState } from "react";
import Card from "components/complex/card";
import { CardProvider } from "contexts/cardContests";
import { Menu } from "components/complex/MenuFooter";
import CardSlider from "components/complex/CardSlider";

interface User {
  id: string;
  name: string;
}

export default function Home() {
  const [nome, setNome] = useState<String>();
  let nameData: String;

  useEffect(() => {
    fetch('https://reviva-credit-api.herokuapp.com/users')
      .then(response => response.json())
      .then(responseData => {
          nameData = responseData.map((item: User) => (item.name))
          setNome(nameData[0])
        
      })

  }, []);

  console.log("Nome >>:",nome);

  return (
    <>
      <Template>
        <Header nome={nome} />
        <CardProvider >
        <CardSlider />
        </CardProvider>
        <Menu />
      </Template>
    </>
  )
}