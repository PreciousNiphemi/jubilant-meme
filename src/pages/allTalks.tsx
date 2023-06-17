import React from "react";

import { Flex, Box, Text } from "@chakra-ui/react";

export default function AllTalks() {
  return (
    <Box
      w="100%"
      as="main"
      px={[6, 16]}
      flex="1 1 0"
      mx={["initial", "auto"]}
      maxW={["100vw", "100vw", "1600px"]}
    >
      {/* 1. Map all talks here */}
      {/* 2. Redirect to individual talk page when someone join a talk */}
    </Box>
  );
}
