import PropTypes from 'prop-types';

const milestoneShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  typeId: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});
export default { milestoneShape };
