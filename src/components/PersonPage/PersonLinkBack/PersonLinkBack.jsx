import { useHistory } from 'react-router-dom';
import iconBack from './img/arrow-back.svg';
import styles from './PersonLinkBack.module.css';

const PersonLinkBack = () => {
  const history = useHistory();

  const handleGoBack = e => {
    e.preventDefault();
    history.goBack();
    console.log(history);
    console.log('handleGoBack');
  }
  return (
    <a 
      href="#"
      onClick={handleGoBack}
      className={styles.link}
    >
      <img className={styles.link__img} src={iconBack} alt="arrow-back" />
      Go Back
    </a>

  )
}


export default PersonLinkBack;
