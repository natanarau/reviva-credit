import Link from "next/link"
import Image from "next/image"
import HomeIcon from 'assets/icons/home.svg'
import WalletIcon from 'assets/icons/bag.svg'
import LastReleases from 'assets/icons/last.svg'
import Config from 'assets/icons/config.svg'
import * as S from './styles'
import { useRouter } from "next/router"
import { useDataUsers } from "hooks/useDataUsers"

interface MenuProps{
  idCard?: string;
}

export default function Menu(props: MenuProps) {
  const { cardCheck } = useDataUsers()
    
  return (
    <S.MenuDiv key="teste">
      <Link href="/">
        <a><Image src={HomeIcon} alt="Home" /></a>
      </Link>
      <Link href="#">
        <a><Image src={WalletIcon} alt="Wallet" /></a>
      </Link>
      <Link href={`transactions/${cardCheck}`}>
        <a><Image src={LastReleases} alt="Lastest" /></a>
      </Link>
      <Link href="#">
        <a><Image src={Config} alt="Config" /></a>
      </Link>
    </S.MenuDiv>
  )
}