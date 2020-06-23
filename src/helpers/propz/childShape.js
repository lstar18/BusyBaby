import PropTypes from 'prop-types';

const childShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});
export default { childShape };
