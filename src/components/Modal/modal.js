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
