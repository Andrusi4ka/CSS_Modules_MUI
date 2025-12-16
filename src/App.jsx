import styles from './App.module.scss';
import ButtonMUI from './components/button/ButtonMUI';
import Button from './components/button/Button'
import ButtonV2 from './components/button/ButtonV2'
import Typography from '@mui/material/Typography';
import Rating from './components/rating/Rating';


function App() {
  return (
    <>
      <Typography variant="h1" gutterBottom>CSS Modules + MUI</Typography>
      <div className={`${styles.main}`}>
        <div>
          <p>Component Button from</p>
          <p className={`${styles.last}`}>"styled-components"</p>
          <ButtonV2>Styled Components</ButtonV2></div>
        <div>
          <p>Component Button</p>
          <p className={`${styles.last}`}>variant="text" size="small"</p>
          <Button variant="text" size="small" /></div>
        <div>
          <p>Component Button</p>
          <p className={`${styles.last}`}>without props</p>
          <Button />
        </div>
        <div>
          <p>Component Button</p>
          <p className={`${styles.last}`}>variant="outlined" size="large"</p>
          <Button variant="outlined" size="large" />
        </div>
        <div>
          <p>Component MuiButton from</p>
          <p className={`${styles.last}`}>'@mui/material/Button'</p>
          <ButtonMUI />
          </div>
      </div>
      <Rating />
    </>
  )
}

export default App
