import React, { useState } from "react";
import {
  Box,
  Text,
  Image,
  Flex,
  Button,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { EachTalkTypeProps } from "./helper";
import { Popup } from "../Popup";
import { removeTalk } from "@/operations/talk";
export const EachTalk = ({ id, title, ...restProps }: EachTalkTypeProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleTalkDeletion = async () => {
    setLoading(true);
    const removeTalkData = {
      id,
    };
    const { variant, data, error } = await removeTalk(removeTalkData);
    if (variant === "success") {
      setLoading(false);
      onClose();
      return toast({
        title: "Talk deleted.",
        description: "We've deleted your talk for you.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      setLoading(false);

      return toast({
        title: "Talk deletion error.",
        description: `${error?.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <>
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
              <DeleteIcon
                boxSize={6}
                color="red.500"
                cursor="pointer"
                onClick={onOpen}
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Popup isOpen={isOpen} onClose={onClose}>
        <Popup.Body>
          <Box>
            <Text
              textAlign="center"
              fontStyle="italic"
              fontSize={{ base: "12px", md: "14px", lg: "14px" }}
              fontWeight={400}
            >
              Are you sure you want to delete this talk?
            </Text>

            <Flex justifyContent="center" mt={{ base: "1rem", md: "1rem" }}>
              <Box display="flex" gap="8" alignItems="center">
                <Button
                  backgroundColor="red.500"
                  color="white"
                  _hover={{
                    backgroundColor: "red.500",
                    color: "white",
                  }}
                  isLoading={loading}
                  onClick={handleTalkDeletion}
                >
                  Yes
                </Button>
                <Button
                  backgroundColor="blue.500"
                  color="white"
                  _hover={{
                    backgroundColor: "blue.500",
                    color: "white",
                  }}
                  onClick={onClose}
                >
                  No
                </Button>
              </Box>
            </Flex>
          </Box>
        </Popup.Body>
      </Popup>
    </>
  );
};
