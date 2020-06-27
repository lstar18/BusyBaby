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
const getSingleChild = (childId) => axios.get(`${baseUrl}/children/${childId}.json`);
const postChild = (newChild) => axios.post(`${baseUrl}/children.json`, newChild);
const putChild = (updatedChild, childId) => axios.put(`${baseUrl}/children/${childId}.json`, updatedChild);
export default { getChildrenbyUid, postChild, getSingleChild, putChild };
