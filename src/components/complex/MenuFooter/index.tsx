import Link from "next/link"
import Image from "next/image"
import HomeIcon from 'assets/icons/home.svg'
import WalletIcon from 'assets/icons/bag.svg'
import LastReleases from 'assets/icons/last.svg'
import Config from 'assets/icons/config.svg'
import { MenuDiv } from "./styles"
import { useRouter } from "next/router"
import { useDataUsers } from "hooks/useDataUsers"

interface MenuProps{
  idCard: string;
}

export default function Menu(props: MenuProps) {
  console.log("IdCard >>:", props.idCard);

  const { cardCheck } = useDataUsers()
  console.log("CardCheck",cardCheck)
  
  return (
    <MenuDiv>
      <Link href="/">
        <Image src={HomeIcon} alt="Home" />
      </Link>
      <Link href="#">
        <Image src={WalletIcon} alt="Wallet" />
      </Link>
      <Link href={`transactions/${cardCheck}`}>
        <Image src={LastReleases} alt="Lastest" />
      </Link>
      <Link href="#">
        <Image src={Config} alt="Config" />
      </Link>
    </MenuDiv>
  )
}