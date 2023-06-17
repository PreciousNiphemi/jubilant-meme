import React from "react";
import { LinkIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Text,
  Input,
  Flex,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { Popup } from "@/components";
import { intiateTalk } from "@/operations/talk";

type FormData = {
  title: string;
  attendee: string;
};

export const CreateTalk = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const handleTalkCreation = async (formInfo: FormData) => {
    const { variant, data, error } = await intiateTalk(formInfo);
    console.log("THE DATA", error);
    if (variant === "success") {
      reset();
      onClose();
      return toast({
        title: "Talk created.",
        description: "We've created your talk for you.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      return toast({
        title: "Talk creation error.",
        description: `${error?.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Button
        leftIcon={<LinkIcon />}
        colorScheme="teal"
        variant="solid"
        onClick={onOpen}
      >
        Create a Talk
      </Button>

      <Popup isOpen={isOpen} onClose={onClose}>
        <Popup.Header>Get the best out of your conference</Popup.Header>
        <Popup.Body>
          <form onSubmit={handleSubmit(handleTalkCreation)}>
            <Box>
              <Box>
                <Text
                  fontSize={{ base: "14px", md: "14px", lg: "12px" }}
                  fontWeight={{ base: 500, md: 500, lg: 500 }}
                  mb={{ base: "0.2rem", md: "", lg: "0.2rem" }}
                >
                  Talk Name
                </Text>

                <Input
                  placeholder="Talk name"
                  _placeholder={{
                    fontSize: "10px",
                    fontWeight: 400,
                  }}
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <Text
                    color="red.500"
                    mt={{ base: "2px", md: "", lg: "2px" }}
                    fontSize="10px"
                  >
                    This field is required
                  </Text>
                )}
              </Box>
              <Box mt={{ base: "1rem", md: "", lg: "1rem" }}>
                <Text
                  fontSize={{ base: "14px", md: "", lg: "12px" }}
                  fontWeight={{ base: 500, md: 500, lg: 500 }}
                  mb={{ base: "0.2rem", md: "", lg: "0.2rem" }}
                >
                  Attendee name
                </Text>
                <Input
                  placeholder="Attendee name"
                  _placeholder={{
                    fontSize: "10px",
                    fontWeight: 400,
                  }}
                  {...register("attendee", { required: true })}
                />
                {errors.attendee && (
                  <Text
                    color="red.500"
                    mt={{ base: "2px", md: "", lg: "2px" }}
                    fontSize="10px"
                  >
                    This field is required
                  </Text>
                )}
              </Box>
              <Flex
                justifyContent="center"
                mt={{ base: "2rem", md: "", lg: "2rem" }}
              >
                <Button type="submit">Create talk</Button>
              </Flex>
            </Box>
          </form>
        </Popup.Body>
      </Popup>
    </>
  );
};
