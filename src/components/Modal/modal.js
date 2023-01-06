import {
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { BsPlusLg } from 'react-icons/bs';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { AiOutlineEdit } from 'react-icons/ai';
import { EditContactForm } from 'components/EditContact/Editcontact';

export const ModalAddContact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Stack mt="24px" justifyContent="center" alignItems="center">
        <Button onClick={onOpen} rightIcon={<BsPlusLg />}>
          Add contact
        </Button>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ContactForm />
        </ModalContent>
      </Modal>
    </>
  );
};

export const ModalEditContact = ({ id, name, number }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} children={<AiOutlineEdit />} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <EditContactForm id={id} name={name} number={number} />
        </ModalContent>
      </Modal>
    </>
  );
};
