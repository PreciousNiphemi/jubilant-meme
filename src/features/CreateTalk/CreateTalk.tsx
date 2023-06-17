import React from "react";
import { PhoneIcon, CalendarIcon, AddIcon, LinkIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

export const CreateTalk = () => {
  return (
    <>
      <Button leftIcon={<LinkIcon />} colorScheme="teal" variant="solid">
        Email
      </Button>
    </>
  );
};
