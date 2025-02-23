"use client"

import React, { useState, ChangeEvent, FormEvent } from "react";
import {
      Input,
      Textarea,
      Button,
      VStack,
      Heading,
      Flex,
      Grid,
      GridItem,
      FormControl,
      Alert,
      AlertIcon,
      AlertDescription,
      AlertTitle,
      CloseButton,
      Box
    } from "@chakra-ui/react";


interface FormData {
    'fullName': string;  // Full Name
    'email': string;   // Email
    'company': string;  // Company
    'message': string;     // Message
    }

function CorporateForm() {
    const headingStyling = {
        fontWeight: "bold",
        color: "white",
        fontSize: "30",
        my: 6,
        textAlign: 'center'
      };
    
      const textStyling = {
        color: "white",
        fontSize: "17",
        textIndent: "3%",
        lineHeight: 1.8
      };

    const buttonStyling = {
        marginTop: 4,
        w: "fit-content%",
        padding: 6,
        bg: "#464646",
        borderRadius: 8,
        borderWidth: 0,
        _hover: {
            bg: "#3A3A3A",
            transform: "scale(1.05)",
        },
        transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
    };

    const boxStyling = {
        _hover: {
            bg: "#3A3A3A",
            transform: "scale(1.05)",
          },
          transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
    }

    const [alertStatus , setAlertStatus] = useState('');
    const [alertVisiblity, setAlertVisibility] = useState(false);

    const [formData, setFormData] = useState<FormData>({
        'fullName': '',  // Full Name
        'email': '',   // Email
        'company': '',  // Company
        'message': ''      // Message
      });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Updated handle submit function
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // The Google Form URL
    const url = "https://docs.google.com/forms/d/e/1FAIpQLSeMrateY8Mtjs5KkgBda5q3xPLyt2QqbTKA90I4L0W--v3Qsw/formResponse";

    // Create form data
    const submissionData = new URLSearchParams();
    
    submissionData.append("entry.994846533", formData.fullName);
    submissionData.append("entry.207624367", formData.company);
    submissionData.append("entry.147897350", formData.email);
    submissionData.append("entry.691085242", formData.message);


    try {
        const response = await fetch(url, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          // Use submissionData here
          body: submissionData.toString()
        });

        setAlertStatus('success');
        setAlertVisibility(true);

        setFormData({
            fullName: "",
            email: "",
            company: "",
            message: "",
        });
      } catch (error) {
        setAlertStatus("error");
        console.error('Submission error:', error);
      }
  };

  return (
    <>
        {alertVisiblity === true && (
            <Alert status={alertStatus as "success" | "error"} variant='subtle' sx={{position: "fixed", top: "90%", right: "2%", w: 'fit-content'}}>
                <AlertIcon />
                <Flex align='center'>
                    {alertStatus === "success" && (
                        <>
                            <AlertTitle>{"Success!"}</AlertTitle>
                            <AlertDescription>
                                {"Thank you for your submission!"}
                            </AlertDescription>
                        </>
                    )}

                    {alertStatus === 'error' && (
                        <>
                            <AlertTitle>{"Error"}</AlertTitle>
                            <AlertDescription>
                                {"There was an error submitting your form. Please try again."}
                            </AlertDescription>
                        </>
                    )}
                </Flex>
                <CloseButton
                    onClick={() => {
                        setAlertVisibility(false);
                    }}
                />
            </Alert>
        )}
        <VStack w="100%" marginTop="1%">
            <Heading sx={headingStyling}>
                Interested In Working With Us?
            </Heading>
            <Box w="80%" bg="#2C2C2C" borderRadius={22} paddingLeft={10} paddingRight={10}>
                <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                    <Flex
                        justifyContent="center"
                        w="100%"
                        flexDir="column"
                        flexWrap="nowrap"
                        align="center"
                        my="3%"
                    >
                        <Grid
                        templateColumns="repeat(2, 1fr)"
                        templateRows="repeat(2, 1fr)"
                        gap="0%"
                        w="95%"
                        marginBottom="1%"
                        mx="3%"
                        >
                        {/* Full Name Field */}
                        <GridItem w="100%" h="100%" alignContent='center' justifyContent='center'>
                            <FormControl isRequired>
                                <Input
                                    sx={{
                                    ...textStyling,
                                    "::placeholder": {
                                        color: "white",
                                        opacity: 0.6,
                                        position: "relative",
                                        left: "3%",
                                    },
                                    _hover: {
                                        bg: "#3A3A3A",
                                        transform: "scale(1.05)",
                                      },
                                      transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
                                    }}
                                    type="text"
                                    id="full-name"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    bg="#656565"
                                    borderWidth={0}
                                    borderRadius={6}
                                    w="90%"
                                    padding="2%"
                                    variant="subtle"
                                />
                            </FormControl>
                        </GridItem>

                        {/* Email Field */}
                        <GridItem w="100%" alignContent='center'>
                            <FormControl isRequired>
                            <Input
                                sx={{
                                ...textStyling,
                                "::placeholder": {
                                    color: "white",
                                    opacity: 0.6,
                                    position: "relative",
                                    left: "3%",
                                },
                                _hover: {
                                    bg: "#3A3A3A",
                                    transform: "scale(1.05)",
                                  },
                                  transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
                                }}
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                bg="#656565"
                                borderWidth={0}
                                borderRadius={6}
                                w="90%"
                                padding="2%"
                                variant="subtle"
                            />
                            </FormControl>
                        </GridItem>

                        {/* Company Field */}
                        <GridItem w="100%" alignContent="center">
                            <FormControl isRequired>
                            <Input
                                sx={{
                                ...textStyling,
                                "::placeholder": {
                                    color: "white",
                                    opacity: 0.6,
                                    position: "relative",
                                    left: "3%",
                                },
                                _hover: {
                                    bg: "#3A3A3A",
                                    transform: "scale(1.05)",
                                  },
                                  transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
                                }}
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Company"
                                borderWidth={0}
                                borderRadius={6}
                                w="90%"
                                padding="2%"
                                bg="#656565"
                                variant="subtle"
                            />
                            </FormControl>
                        </GridItem>

                        {/* Message Field */}
                        <GridItem w="100%" alignContent='center'>
                            <FormControl isRequired>
                            <Textarea
                                sx={{
                                ...textStyling,
                                "::placeholder": {
                                    color: "white",
                                    opacity: 0.6,
                                    position: "relative",
                                    left: "3%",
                                },
                                overflow: "hidden",
                                resize: "vertical",
                                _hover: {
                                    bg: "#3A3A3A",
                                    transform: "scale(1.05)",
                                  },
                                  transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
                                }}
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                borderWidth={0}
                                borderRadius={6}
                                w="90%"
                                h="50%"
                                padding="2%"
                                bg="#656565"
                                variant="subtle"
                                resize="vertical"
                                minHeight={20}
                                maxH={100}
                            />
                            </FormControl>
                        </GridItem>
                        </Grid>
                        <Button
                            type="submit"
                            sx={buttonStyling}
                            >
                                <Heading
                                    sx={{
                                        ...headingStyling,
                                        fontSize: "25"
                                    }}
                                    >
                                        Work with NSBE
                                </Heading>
                        </Button>
                    </Flex>
                </form>
            </Box>
        </VStack>
    </>
  );
};

export default CorporateForm;