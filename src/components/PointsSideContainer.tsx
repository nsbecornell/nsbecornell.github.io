import { Box, Flex, Text, Heading, Center, Image, VStack} from '@chakra-ui/react'

function PointsSideContainer() {
  const boxStyling = {
    bg: "#2C2C2C",
    w: "30%",
    borderRadius: 15
  }

  const textStyling = {
    color: "white",
    fontSize: "20",
    lineHeight: 1.8
  };

  const subheadingStyling = {
    color: 'white',
    textAlign: 'center',
    fontSize: "18px",
    fontWeight: 'bold'
  }

  const headingStyling = {
    fontWeight: "bold",
    color: "white",
    fontSize: "30",
    my: 6,
    textAlign: 'center'
  };

  return (
    <Box sx={boxStyling} paddingLeft="1%" paddingRight='1%' minW="30%" h="fit-content">
      <VStack spacing={0} marginBottom="8%">
        <Heading sx={headingStyling}>
          Points System
        </Heading>
        <Text sx={textStyling} my={0}>
            Cornell&apos;s NSBE chapter uses a <b>point system</b> to select members to <b>attend NSBE conferences</b>. Members can earn points through various <b>forms of participation</b>.
        </Text>
        <Box w="100%" justifyContent='center'>
          <Heading sx={headingStyling} textAlign='left' fontSize={22}>
            Points
          </Heading>
          <VStack gap={6}>
            <Flex align='center' justifyContent='center' w="100%">
              <Text sx={subheadingStyling} mx="2%" alignContent='center'>
                1 Point
              </Text>
              <Flex flexDir='column' w="100%">
                <Text sx={textStyling} mx="2%">
                    Event Attendance
                </Text>
                <Text sx={textStyling} mx="2%">
                    Event Feedback Form
                </Text>
              </Flex>
            </Flex>

            <Flex align='center' justifyContent='center' w="100%">
              <Text sx={subheadingStyling} mx="2%" alignContent='center'>
                  2 Points
              </Text>
              <Flex flexDir='column' w="100%">
                <Text sx={textStyling} mx="2%">
                Semester/Annual Feedback Form
                </Text>
              </Flex>
            </Flex>

            <Flex align='center' justifyContent='center' w="100%">
              <Text sx={subheadingStyling} mx="2%" alignContent='center'>
                  3 Points
              </Text>
              <Flex flexDir='column' w="100%">
                <Text sx={textStyling} mx="2%">
                    Community Service
                </Text>
                <Text sx={textStyling} mx="2%">
                    Complete CYS Training (max 3 points)
                </Text>
                <Text sx={textStyling} mx="2%">
                    Updating Academic Folder (max 6 points)
                </Text>
              </Flex>
            </Flex>

            <Flex align='center' justifyContent='center' w="100%">
              <Text sx={subheadingStyling} mx="2%" alignContent='center'>
                  5 Points
              </Text>
              <Flex flexDir='column' w="100%">
                <Text sx={textStyling} mx="2%">
                Becoming a National Member
                </Text>
              </Flex>
            </Flex>
          </VStack>
        </Box>
      </VStack>
    </Box>
  )
}

export default PointsSideContainer;