import React from "react";
import {
  Box,
  Text,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerProps,
} from "@chakra-ui/react";

export type DrawerSlideProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
} & DrawerProps;

export const DrawerSlide = ({
  isOpen,
  onClose,
  children,
  ...restDrawerProps
}: DrawerSlideProps) => {
  return (
    <Drawer
      placement="right"
      isOpen={isOpen}
      onClose={onClose}
      {...restDrawerProps}
    >
      <DrawerOverlay bg="rgba(0,0,0,0.85)" />
      <DrawerContent
        px={4}
        pb={6}
        pt={8}
        shadow="lg"
        borderRadius="2xl"
        minW={{ md: "400px" }}
        maxW={{ base: "90%", md: "400px" }}
        boxShadow="0px 40px 80px -1px rgba(31, 91, 242, 0.27)"
      >
        <DrawerCloseButton />

        {children}
      </DrawerContent>
    </Drawer>
  );
};

const DrawerSlideHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <DrawerHeader p={0}>
      <Text textStyle="h2" textAlign="left" pb={0}>
        {children}
      </Text>
    </DrawerHeader>
  );
};

const DrawerSlideDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Text textStyle="p">{children}</Text>;
};

const DrawerSlideBody = ({ children }: { children: React.ReactNode }) => {
  return <Box my={4}>{children}</Box>;
};

DrawerSlide.Body = DrawerSlideBody;
DrawerSlide.Header = DrawerSlideHeader;
DrawerSlide.Description = DrawerSlideDescription;
