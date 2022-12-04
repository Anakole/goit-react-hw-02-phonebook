import PropTypes from 'prop-types';
import { Input, Label } from 'components/ContactForm/ContactForm.styled';
import { BsSearch } from 'react-icons/bs';

export const Filter = ({ onChange, value }) => {
  return (
    <Label>
      <BsSearch />
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
