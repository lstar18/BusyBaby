import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getMilestonesbyChildId = (childId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/milestones.json?orderBy="childId"&equalTo="${childId}"`)
  .then((response) => {
    const theMilestones = response.data;
    const milestones = [];
    if (theMilestones !== null) {
      Object.keys(theMilestones).forEach((milestoneId) => {
        theMilestones[milestoneId].id = milestoneId;
        milestones.push(theMilestones[milestoneId]);
      });
    }
    resolve(milestones);
  })
  .catch((err) => reject(err));
})
const getSingleMilestone = (milestoneId) => axios.get(`${baseUrl}/milestones/${milestoneId}.json`);
const putMilestone = (updatedMilestone, milestoneId) => axios.put(`${baseUrl}/milestones/${milestoneId}.json`, updatedMilestone);
const postMilestone = (newMilestone) => axios.post(`${baseUrl}/milestones.json`, newMilestone);
const removeMilestone = (milestoneId) => axios.delete(`${baseUrl}/milestones/${milestoneId}.json`)
export default { getMilestonesbyChildId, postMilestone, removeMilestone, putMilestone, getSingleMilestone };
