import React from "react";
import { Box, Text, Image, Flex, Button } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { EachTalkTypeProps } from "./helper";

export const EachTalk = ({ id, title, ...restProps }: EachTalkTypeProps) => {
  return (
    <Box
      px={{ base: "", md: "", lg: "1rem" }}
      py={{ base: "", md: "", lg: "1rem" }}
      shadow="md"
      maxW="md"
      borderRadius={{ base: "", md: "", lg: "8px" }}
      minH="40px"
      alignItems="center"
    >
      <Flex justifyContent="space-between">
        <Box>
          <Text
            fontSize={{ base: "", md: "", lg: "20px" }}
            fontWeight={{ base: "", md: "", lg: 500 }}
          >
            {title}
          </Text>
        </Box>

        <Box>
          <Flex gap={{ base: "", md: "", lg: 2 }}>
            <DeleteIcon boxSize={6} color="red.500" cursor="pointer" />
            <EditIcon boxSize={6} color={"gray.500"} cursor="pointer" />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
