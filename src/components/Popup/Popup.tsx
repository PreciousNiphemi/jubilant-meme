import React from "react";
import {
  Box,
  Text,
  Modal,
  ModalProps,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  useColorModeValue,
} from "@chakra-ui/react";

export type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
} & ModalProps;

export const Popup = ({
  isOpen,
  onClose,
  children,
  ...restModalProps
}: PopupProps) => {
  return (
    <Modal
      size="md"
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      {...restModalProps}
    >
      <ModalOverlay bg="rgba(0,0,0,0.85)" />
      <ModalContent
        px={4}
        pb={6}
        pt={8}
        shadow="lg"
        borderRadius="2xl"
        minW={{ md: "400px" }}
        maxW={{ base: "90%", md: "400px" }}
        boxShadow="0px 40px 80px -1px rgba(31, 91, 242, 0.27)"
      >
        <ModalCloseButton />

        {children}
      </ModalContent>
    </Modal>
  );
};

const PopupHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <ModalHeader p={0}>
      <Text textStyle="h2" textAlign="left" pb={0}>
        {children}
      </Text>
    </ModalHeader>
  );
};

const PopupDescription = ({ children }: { children: React.ReactNode }) => {
  return <Text textStyle="p">{children}</Text>;
};

const PopupBody = ({ children }: { children: React.ReactNode }) => {
  return <Box my={4}>{children}</Box>;
};

Popup.Body = PopupBody;
Popup.Header = PopupHeader;
Popup.Description = PopupDescription;
