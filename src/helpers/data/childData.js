import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getChildrenbyUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/children.json?orderBy="uid"&equalTo="${uid}"`)
  .then((response) => {
   const theChildren = response.data;
   const children = [];
   if(theChildren !== null) {
     Object.keys(theChildren).forEach((childId) => {
       theChildren[childId].id = childId;
       children.push(theChildren[childId]);
     });
   }
   resolve(children);
  })
  .catch((err) => reject(err));
})

export default { getChildrenbyUid };
