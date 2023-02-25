import Typography from '@savantql/webapp-sdk/dist/Typography'

import styles from './Preloader.module.scss'

import Logo from '@/assets/images/logo.png'

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <img src={Logo} alt="Logo" />
      <br />
      <Typography tag="h1" variant="h5" weight="default" responsive>
        Loading...
      </Typography>
    </div>
  )
}

export default Preloader
