import styles from '../../styles/ChooseYourFate.module.css'

export default function ChooseYourFate() {
  return (
    <div className={styles.container}>
      <iframe style={{filter: "invert(0.9)", height: "90%"}} src="https://docs.google.com/forms/d/e/1FAIpQLSffBzUOvXOxMQFEmXmfUSMvoxZbVoflzKp7yPZgStBJ5G9eew/viewform?embedded=true" width="700" height="520" frameBorder={0} marginHeight={0} marginWidth={0}>Loading…</iframe>
    </div>
  )
}