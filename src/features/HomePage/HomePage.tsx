import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { EachTalk } from "@/components";
import { useRouter } from "next/router";
export const HomePage = () => {
  const router = useRouter();
  return (
    <Box
      w="100%"
      as="main"
      px={[6, 16]}
      flex="1 1 0"
      mx={["initial", "auto"]}
      maxW={["100vw", "100vw", "1600px"]}
    >
      <Flex
        flexDirection="column"
        minH={{ base: "auto", md: "auto", lg: "100vh" }}
        justifyContent="center"
      >
        <Flex gap={{ base: "", md: "", lg: 10 }}>
          <Box flex={1}>
            <Box>
              <Text
                letterSpacing={0}
                lineHeight={{ base: "", md: "", lg: "3.25rem" }}
                fontSize={{ base: "", md: "", lg: "2.75rem" }}
                fontWeight={{ base: "", md: "", lg: 400 }}
                paddingBottom={{ base: "", md: "", lg: "0.5rem" }}
              >
                Premium conference and meetup meetings.
              </Text>
              <Text
                letterSpacing={0}
                lineHeight={{ base: "", md: "", lg: "3.25rem" }}
                fontSize={{ base: "", md: "", lg: "2.75rem" }}
                fontWeight={{ base: "", md: "", lg: 400 }}
                paddingBottom={{ base: "", md: "", lg: "0.5rem" }}
              >
                Now free for everyone.
              </Text>
            </Box>

            <Box marginTop={{ base: "", md: "", lg: "2rem" }}>
              <Text
                letterSpacing={0}
                lineHeight={{ base: "", md: "", lg: "1.5rem" }}
                fontSize={{ base: "", md: "", lg: "1.125rem" }}
                fontWeight={{ base: "", md: "", lg: 400 }}
                paddingBottom={{ base: "", md: "", lg: "3em" }}
                color="rgb(95,99,104)"
              >
                We've provided a platform for secure conference and business
                meetings, that is free and available for everyone
              </Text>
            </Box>

            <Box marginTop={{ base: "", md: "", lg: "2rem" }}></Box>
          </Box>

          <Box flex={1}>
            <Box>
              <Text
                letterSpacing={0}
                lineHeight={{ base: "", md: "", lg: "2.25rem" }}
                fontSize={{ base: "", md: "", lg: "2rem" }}
                fontWeight={{ base: "", md: "", lg: 400 }}
                paddingBottom={{ base: "", md: "", lg: "0.5rem" }}
              >
                On-Going talks
              </Text>
              <Box>
                <EachTalk />

                <Box mt={{ base: "", md: "", lg: "2rem" }}>
                  <Text
                    color="blue.400"
                    cursor="pointer"
                    _hover={{
                      textDecoration: "underline",
                    }}
                    fontSize={{ base: "", md: "", lg: "1rem" }}
                    fontWeight={{ base: "", md: "", lg: 600 }}
                  >
                    See all talks
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
