import { useRouter } from 'next/router'
import Header from "components/complex/Header";
import Template from "templates/index";
import { useEffect, useState } from "react";
import LimitCard from "components/complex/LimitCard";
import CardSlider from "components/complex/CardSlider";
import { useDataUsers } from 'hooks/useDataUsers'
interface User {
  id: string;
  name: string;
}

export default function Home() {
  const router = useRouter()
  const { id } = router.query
  const { listUser } = useDataUsers()
  // const [nome, setNome] = useState<String>();
  // let nameData: String;
  // // useEffect(() => {
  // //   fetch('https://reviva-credit-api.herokuapp.com/users')
  // //     .then(response => response.json())
  // //     .then(responseData => {
  // //         nameData = responseData.map((item: User) => (item.name))
  // //         setNome(nameData[0])
        
  // //     })

  // // }, []);
const nameUser = listUser && listUser.find(e => e)
console.log()
  return (
    <>
      <Template>
        {id && 
          <>
            <Header nome={nameUser?.name} />
            <CardSlider />
            <LimitCard />
          </>
        }
      </Template>
    </>
  )
}