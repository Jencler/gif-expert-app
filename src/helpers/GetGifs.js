import { useEffect, useState } from "react"

export const GetGifs = (category) => {


  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getGif = async () => {

    const result = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=yc1MSeEkjL1jMp1Q2NzEaHiXmNHa3kQY&q=${category}`)
    const { data } = await result.json()
    setData(data)
    setIsLoading(false)

  }

  useEffect(() => {
    getGif()
  }, [category])

  return {
    data,
    isLoading
  }
}
