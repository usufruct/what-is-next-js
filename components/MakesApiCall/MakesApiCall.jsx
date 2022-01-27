// see: https://nextjs.org/docs/basic-features/data-fetching/client-side
import { useState, useEffect } from "react"
import { License } from '../License/License'

export function MakesApiCall(props) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://data.cityofchicago.org/resource/97wa-y6ff.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
        console.log(data)
      })
  }, [])

  if (isLoading) return <div>...Loading</div>
  if (!data) return <div>no data</div>

  return (
    <div>
      <h3>I make an api call</h3>
      <License license={data[0]} />
    </div>
  );
}
