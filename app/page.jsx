"use client"
import { useState, useEffect } from "react";
import rickAndMorty, { alterPage } from "@/data/RickAndMorty";
import styles from './page.module.css'

export default function Home() {
  const [data, setData] = useState(null)
  const [page, setPage] = useState(1)

  const addPage = () => {
      setPage(page + 1)
  }

  const removePage = () => {
      page ? (
          page <= 1,
          setPage(1)
      ) : (
          setPage(page - 1)
      )
  }

  const changePage = () => {
      alterPage(page)
  }

  useEffect(() => {
      const mortyFetch = async() => {
          try {
              const dados = await rickAndMorty();
              setData(dados)
              console.log(data);
          } catch (error) {
              throw error
          }
      };
      mortyFetch();
  }, [])

  return (
      <div>
          <div className={styles.cards}>
              {
                  data.map((character) => (
                      <div key={character.id}>
                          <div>
                              <img src={character.image} alt={character.name} />
                          </div>
                          <h3>{character.name}</h3>
                          <p>{character.status}</p>
                          <p>{character.species}</p>
                          <p>{character.origin.name}</p>
                      </div>
                  ))
              }
              <div className={styles.buttons}>
                  <button onClick={() => {
                      removePage();
                      changePage();
                  }}> ⬅ </button>

                  <button onClick={() => {
                      addPage();
                      changePage();
                  }}> ➡ </button>
              </div>
          </div>
      </div>
  )
}
