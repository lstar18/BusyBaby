import milestoneData from '../data/milestoneData';
import devTypeData from '../data/devTypeData';


const getMilestoneWithDevType = (childId) => new Promise((resolve, reject) => {
  devTypeData.getDevTypes()
  .then((devTypes) => {
    console.log('devTypes', devTypes);
    milestoneData.getMilestonesbyChildId(childId)
    .then((milestones) => {
      const finalMilestones = [];
      milestones.forEach((milestone) => {
        const milestoneCopy = {...milestone};
        milestoneCopy.devType = devTypes.find((x) => x.id === milestone.typeId).name;
        finalMilestones.push(milestoneCopy);
      });
     resolve(finalMilestones);
    });
  })
  .catch((err) => reject(err));
});
export default { getMilestoneWithDevType }
