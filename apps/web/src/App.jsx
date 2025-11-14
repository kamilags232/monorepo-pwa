import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Carregando...')
  const [error, setError] = useState(null)

  useEffect(() => {
    // Faz chamada à API local (porta 3000)
    fetch('http://localhost:3000/api/hello')
      .then((res) => {
        if (!res.ok) throw new Error(`Erro ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (data?.message) {
          setMessage(data.message)
        } else {
          setMessage('Resposta inesperada da API')
        }
      })
      .catch((err) => {
        console.error('Erro ao conectar à API:', err)
        setError('Erro ao conectar à API')
      })
  }, [])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1>Bootcamp PWA</h1>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <p>{message}</p>
      )}
    </div>
  )
}

export default App
