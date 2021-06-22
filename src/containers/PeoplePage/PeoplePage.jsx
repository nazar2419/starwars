import React, { useState, useEffect} from 'react';
import {withErrorApi} from '@hoc-helpers/withErrorApi';
import { getApiResource } from '@utils/network';
import { API_PEOPLE } from '@constants/api';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import PeopleList from '@components/PeoplePage/PeopleList';

import styles from './PeoplePage.module.css';

const  PeoplePage = ({setErrorApi}) => {
 const [people, setPeople] = useState(null);
 const getResourses = async (url) => {
   const res = await getApiResource(url);
   if(res) {
    const peopleList = res.results.map(({name, url}) => {
      const id = getPeopleId(url);
      const img = getPeopleImage(id)
      console.log(img);
      return {
        id,
        name,
        img 
      }
     })
     setPeople(peopleList);
     setErrorApi(false);
   } else {
     setErrorApi(true);

   }

   
  }

  useEffect(()=>{
    getResourses(API_PEOPLE);
  }, []);
 
  return (
    <div>
      <h1>Navigation</h1>
      {people && <PeopleList people={people}/>}
    </div>
    )
  }

export default withErrorApi(PeoplePage);
