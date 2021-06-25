import {BrowserRouter, Switch, Route } from 'react-router-dom';
import routesConfig from '@routes/routesConfig';
import Header from '@components/Header';
import styles from './App.module.css';


const App = () => {
  return (
    <div className={styles.container}>
      <BrowserRouter>
      <div className={styles.wrapper}>
        <Header/>
        <Switch>
          {routesConfig.map((route, index)=>(
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
            />
          ))}
        </Switch>
      </div>
       
      </BrowserRouter>
    </div>
  )
}

export default App;


