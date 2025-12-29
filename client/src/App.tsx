import React, { useEffect, useState } from 'react'

export default function App() {
  const [ping, setPing] = useState<string>('')

  useEffect(() => {
    fetch('/api/ping')
      .then((r) => r.json())
      .then((d) => setPing(d.message))
      .catch(() => setPing('API not available'))
  }, [])

  return (
    <div style={{padding:20,fontFamily:'Arial, sans-serif'}}>
      <h1>RottZofma — React + TypeScript</h1>
      <p>Backend ping: {ping}</p>
    </div>
  )
}
