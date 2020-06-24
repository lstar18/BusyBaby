import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getDevTypes = () => new Promise((resolve,reject) => {
  axios.get(`${baseUrl}/developmentType.json`)
  .then((response) => {
    const theDevTypes = response.data;
    const devTypes = [];
    if(theDevTypes !== null) {
      Object.keys(theDevTypes).forEach((devTypeId) => {
        theDevTypes[devTypeId].id = devTypeId;
        devTypes.push(theDevTypes[devTypeId]);
      })
    }
    resolve(devTypes);
  })
  .catch((err) => reject(err));
});
export default { getDevTypes };
