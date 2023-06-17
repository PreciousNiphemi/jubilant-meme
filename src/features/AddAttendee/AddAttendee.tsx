import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";

import {
  Flex,
  Box,
  Text,
  Icon,
  Button,
  Input,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { BsPeople, BsPersonPlus } from "react-icons/bs";
import { DrawerSlide, Popup } from "@/components";
import { AttendeeType } from "@/components/EachTalk/helper";
import { addAttendeeToTalk } from "@/operations/talk";
type AddAttendeeProps = {
  id: string;
  title: string;
  attendee: AttendeeType[];
};

type FormData = {
  attendee: string;
};

export const AddAttendee = ({ id, title, attendee }: AddAttendeeProps) => {
  const drawerDisclosure = useDisclosure();
  const modalDisclosure = useDisclosure();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  console.log("THIS ATTENDEE", attendee);

  const handleAddAttendee = async (formInfo: FormData) => {
    setLoading(true);
    const requiredData = {
      id,
      title,
      ...formInfo,
    };

    const { variant, data, error } = await addAttendeeToTalk(requiredData);
    if (variant === "success") {
      setLoading(false);
      reset();
      modalDisclosure.onClose();
      drawerDisclosure.onClose();

      return toast({
        description: "Attendee added to talk ",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      setLoading(false);

      return toast({
        description: `${error?.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Box>
        <Icon
          cursor="pointer"
          boxSize={8}
          as={BsPeople}
          onClick={drawerDisclosure.onOpen}
        />
      </Box>
      <DrawerSlide
        isOpen={drawerDisclosure.isOpen}
        onClose={drawerDisclosure.onClose}
      >
        <DrawerSlide.Header>Attendee</DrawerSlide.Header>
        <DrawerSlide.Body>
          <Box>
            <Button
              leftIcon={<Icon color="white" as={BsPersonPlus} />}
              color="white"
              fontSize="0.875rem"
              _hover={{
                backgroundColor: "rgb(25,103,210)",
              }}
              backgroundColor="rgb(25,103,210)"
              onClick={modalDisclosure.onOpen}
            >
              Add attendee
            </Button>
            <Box mt={{ base: "3rem" }}>
              <Text>Attendes In Talk</Text>
              <Flex
                flexDir="column"
                maxH="420px"
                py={{ base: "1rem" }}
                overflowY="scroll"
                gap={{ base: 5, md: 6, lg: 6 }}
              >
                {attendee?.map((eachAttendee) => {
                  return (
                    <Box
                      key={eachAttendee._id}
                      px={{ base: "", md: "", lg: "1rem" }}
                      shadow="md"
                      backgroundColor="gray.100"
                      maxW="md"
                      borderRadius={{ base: "", md: "", lg: "8px" }}
                      minH="50px"
                      alignItems="center"
                    >
                      <Text mb={0}>{eachAttendee.name}</Text>
                      <Text mt={0} fontSize={{ base: "10px", md: "12px" }}>
                        {eachAttendee.email}
                      </Text>
                    </Box>
                  );
                })}
              </Flex>
            </Box>
          </Box>
        </DrawerSlide.Body>
      </DrawerSlide>

      <Popup isOpen={modalDisclosure.isOpen} onClose={modalDisclosure.onClose}>
        <Popup.Header>Add attendee</Popup.Header>
        <Popup.Body>
          <Box>
            <form onSubmit={handleSubmit(handleAddAttendee)}>
              <Box>
                <Box>
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
                <Flex mt={{ base: "1rem", md: "", lg: "1rem" }}>
                  <Button
                    leftIcon={<Icon color="white" as={BsPersonPlus} />}
                    backgroundColor="blue.400"
                    fontSize="0.875rem"
                    type="submit"
                    color="white"
                    _hover={{
                      backgroundColor: "blue.400",
                    }}
                    isLoading={loading}
                  >
                    Add
                  </Button>
                </Flex>
              </Box>
            </form>
          </Box>
        </Popup.Body>
      </Popup>
    </>
  );
};
