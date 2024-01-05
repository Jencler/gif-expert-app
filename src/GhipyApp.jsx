import { useState } from "react"
import { InputAdd } from "./components/InputAdd"
import { GridGif } from "./components/GridGif"
import { Header } from "./components/Header"

export const GhipyApp = () => {


  const [listGifs, setListGifs] = useState(['action'])

  const addCategory = (newcategory) => {
    if (listGifs.includes(newcategory)) return
    setListGifs([
      newcategory,
      ...listGifs
    ]
    )
  }

  return (
    <div className="app">
      <Header />
      <InputAdd onNewCategory={(value) => addCategory(value)} />

      {
        listGifs.map(category => (
          <GridGif key={category} category={category} />
        ))
      }

    </div>
  )
}
