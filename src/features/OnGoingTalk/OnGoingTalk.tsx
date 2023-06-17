import React from "react";
import { useQuery } from "react-query";
import { Flex, Box, Text } from "@chakra-ui/react";
import { EachTalk } from "@/components";
import { getAllTalks } from "@/operations/talk";
import { EachTalkTypeProps } from "@/components/EachTalk/helper";
export const OnGoingTalks = () => {
  const { isLoading, error, data } = useQuery("onGoingTalks", () =>
    getAllTalks()
  );
  console.log("WHAT IS THIS DATA", data);
  return (
    <Box>
      <Flex flexDirection={"column"} gap={6}>
        {data?.data?.slice(0, 3)?.map((eachTalk: EachTalkTypeProps) => {
          return (
            <EachTalk
              key={eachTalk.id}
              id={eachTalk.id}
              title={eachTalk.title}
            />
          );
        })}
      </Flex>
    </Box>
  );
};
