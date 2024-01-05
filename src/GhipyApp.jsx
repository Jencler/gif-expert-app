import { useState } from "react"
import { InputAdd } from "./components/InputAdd"
import { GridGif } from "./components/GridGif"

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
      <h1>Ghipy App</h1>

      <InputAdd onNewCategory={(value) => addCategory(value)} />
 

      {
        listGifs.map(category => (
          <GridGif key={category} category={category} />
        ))
      }

    </div>
  )
}
