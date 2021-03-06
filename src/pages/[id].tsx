import { useRouter } from 'next/router'
import Header from "components/complex/Header";
import Template from "templates/index";
import LimitCard from "components/complex/LimitCard";
import CardSlider from "components/complex/CardSlider";
import { useDataUsers } from 'hooks/useDataUsers';

export default function Home() {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Template idCard={String(id)}>
        {id && 
          <>
            <Header />
            <CardSlider />
            <LimitCard />
          </>
        }
      </Template>
    </>
  )
}