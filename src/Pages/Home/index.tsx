import { Button, Grid, TextField, Typography, Box } from '@mui/material'
import { useState } from 'react'
import { dataBase } from '../../database'

export interface RecadoTypes {
  titulo: string
  recado: string
  dia: string
}

const Home = () => {

  const [recado, setRecado] = useState<string>('')
  const [titulo, setTitulo] = useState<string>('')
  const [dia, setDia] = useState<string>('')
  const [data, setData] = useState<RecadoTypes[]>(dataBase)

  const handleAddRecado = () => {
    const novoRecado: RecadoTypes = {
      titulo,
      recado,
      dia
    }
    setData([...data, novoRecado])
  }

  return (
    <Grid container spacing={4} marginTop={2}>
      <Grid item xs={12}>
        <TextField 
          placeholder="Recado"
          onChange={(e) => setRecado(e.currentTarget.value)}
          value={recado}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField 
          placeholder="Titulo do recado"
          onChange={(e) => setTitulo(e.currentTarget.value)}
          value={titulo}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField 
          placeholder="dias"
          onChange={(e) => setDia(e.currentTarget.value)}
          value={dia}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant='outlined'
          onClick={handleAddRecado}
        >
          Concluir
        </Button>
      </Grid>
      <Grid item xs={12}>
        { data.map(recado => (
          <Box key={recado.titulo}>
            <Typography>
              { recado.titulo }
            </Typography>
            <Typography>
              { recado.recado }
            </Typography>
            <Typography>
              { recado.dia }
            </Typography>
          </Box>
        )) }
      </Grid>
    </Grid>
  )
}

export { Home }