import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import villagers from '../data/villagers.json'
import {Cards} from '../components/Card'
import { FilterButton } from '../components/Buttons'
import { useRouter } from 'next/router'
import{ FooterBar, HeaderBar } from '../components/Bars'
import { Header } from "../components/Header";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

 const filters = [
    "All",
    "Normal",
    "Lazy",
    "Peppy",
    "Jock", 
    "Cranky",
    "Snooty",
    "Smug",
    "Big Sister" 
  ]

  const [personality, setPersonality] = useState(0);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (personality == 0) {
      setResults(villagers);
      console.log(villagers)
    } else {
      setResults(
        villagers.filter((villager) =>
       villager.Personality === filters[personality])
       );
    }
  }, [personality]);

const handleFilterRight = () => {
  setPersonality(personality + 1);
  if (personality >= 8) {
    setPersonality(0);
  }
}

const handleFilterLeft = () => {
  setPersonality(personality - 1);
  if (personality < 1) {
    setPersonality(filters.length - 1);
  }
}

const r = useRouter();

  return (
    <>
      <Head>
        <title>Villagers of New Horizon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/goldenLeaf.svg" />
      </Head>
    
      <HeaderBar id='header'/>
      <main className={styles.main}>
      
      <Header/>
    
      <div className={styles.gallery}>

      <FilterButton
       type={filters[personality]} 
       onRight={()=> handleFilterRight()}
       onLeft={()=>handleFilterLeft()} />

        {results.map((villager, index)=> (
          <Cards 
          id='card'
          key={villager.Filename}
          name={villager.Name}
          src={villager['Photo Image']}
          onView={()=>
            r.push({
              pathname: '/profile',
              query: {index: index, name: villager.Name, type: filters[personality]}
            })}>
        </Cards>))}
        </div>
      </main>
      <FooterBar/>
    </>
  )
}
