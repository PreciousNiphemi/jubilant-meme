import React from "react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsPeople } from "react-icons/bs";
import { useRouter } from "next/router";
import { AddAttendee } from "@/features";
import { AttendeeType } from "@/components/EachTalk/helper";
export default function IndividualTalk() {
  const router = useRouter();
  const query = router.query;
  //   const { isLoading, error, data } = useQuery("eachTalk", () =>
  //   getAllTalks()
  // );

  console.log("THIS QUERY", query);
  return (
    <Box
      w="100%"
      as="main"
      px={[6, 16]}
      flex="1 1 0"
      bg="rgb(32,33,36)"
      mx={["initial", "auto"]}
      maxW={["100vw", "100vw", "1600px"]}
    >
      <Flex minH={{ base: "auto", md: "auto", lg: "100vh" }} py={[6, 16]}>
        <Flex
          w="full"
          justifyContent="center"
          minH="20px"
          backgroundColor="white"
          alignSelf="end"
        >
          <Box>
            <AddAttendee
              id={query?.id as string}
              title={query?.title as string}
              attendee={JSON.parse(query?.attendees)}
            />
          </Box>
        </Flex>
      </Flex>
      {/* 1. Be able to add attendee on this page */}
      {/* 2. Be able to see Previous chats*/}
      {/* 3. Be able to chat on this page (initiate getStreams on this page) */}
    </Box>
  );
}
