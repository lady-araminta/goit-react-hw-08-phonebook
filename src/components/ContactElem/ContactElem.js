import PropTypes from 'prop-types';
import { Button, Td, Tr } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { ModalEditContact } from 'components/Modal/modal';

export const ContactElem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <Tr key={id}>
      <Td>{name}</Td>
      <Td>{number}</Td>
      <Td>
        <ModalEditContact id={id} name={name} number={number} />
      </Td>
      <Td>
        <Button
          type="button"
          children={<AiOutlineUserDelete />}
          onClick={handleDelete}
        />
      </Td>
    </Tr>
  );
};

ContactElem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
