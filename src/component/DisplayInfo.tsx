import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function DisplayInfo(props: {
  isOpen: any;
  cancelRef: any;
  onClose: any;
}) {
  const { isOpen, cancelRef, onClose } = props;
  const item = useSelector((state: any) => state.contactDetailReducer.formdata);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Customer information
          </AlertDialogHeader>

          <AlertDialogBody>
            <div>
              <h2>first Name : {item.firstname}</h2>
              <h2>Last Name : {item.lastname}</h2>
              <h2>Email : {item.email}</h2>
              <h2>Contact No. : {item.contactno}</h2>
            </div>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button colorScheme="red" onClick={onClose} ml={3}>
              Okay
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
