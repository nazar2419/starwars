import React from 'react';
import { useEffect } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';

import styles from './PeoplePage.module.css';

const  PeoplePage = () => {
  const getResourses = async (url) =>{
    const res = await getApiResource(url);
    const peopleList = res.results.map(({name, url}) =>{
      return {
        name,
        url,
      }
    });
    console.log(peopleList);
  }
  useEffect(()=> {
    getResourses(API_PEOPLE);
  })
  return (
    <div>
      Hello World
    </div>
  )
}

export default PeoplePage;
