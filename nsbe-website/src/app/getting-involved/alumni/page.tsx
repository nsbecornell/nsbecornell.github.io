import styles from "@/app/page.module.css";

// Chakra UI Imports
import { Box, Button, Flex, Heading, VStack, Text, Spacer, Center } from '@chakra-ui/react'
import { Butterfly_Kids } from "next/font/google";
import { BorderWidth } from "react-bootstrap-icons";

const Students = () => {
  const headingStyle = {
    color: "white",
    fontSize: 30
  }

  const textStyle = {
    color: "white"
  }

  const boxHeading = {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold"
  }

  const boxStyle = {
    bg: "#2C2C2C",
    mx: 12,
    my: 10,
    borderRadius: 10,
    h: 175,
    w: 175
  }

  const boxTextStyle = {
    color: "white",
    fontSize: 14,
    textAlign: 'center'
  }

  const buttonStyle = {
    borderRadius: 15,
    bg: "#2C2C2C",
    borderWidth: 0,
    marginBottom: 15
  }

  const donateButtonStyle = {
    borderRadius: 15,
    bg: "#2C2C2C",
    borderWidth: 0,
    w: "40%",
    minWidth: "35%"
  }

  const buttonTextStyle = {
    color: "white",
    fontSize: 20
  }

  return (
    <main className={styles.main}>
      <Flex direction="row">
        <Flex direction="column" marginTop="5%">
          <Heading sx={headingStyle} textAlign='center'>Stay Connected!</Heading>
          <Button sx={buttonStyle}>
            <Heading sx={buttonTextStyle}>
              Join Our Newsletter
            </Heading>
          </Button>
          <Button sx={buttonStyle}>
            <Heading sx={buttonTextStyle}>
              Join Follow Our LinkedIn
            </Heading>
          </Button>
        </Flex>
        <Spacer />
        <VStack marginRight="6%">
          <Box as="section">
            <Flex direction="column" justify="center">
              <Heading sx={headingStyle} textAlign='center'>Donations Help Us Realize Our Initiatives</Heading>
              <Text maxW={750} sx={textStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum eget lacus gravida lacinia. Suspendisse viverra tellus a justo finibus, eu blandit purus egestas. Aliquam porttitor volutpat tellus eget scelerisque. In lobortis quis nisi vel malesuada. Quisque lectus est, suscipit ut sapien eu, pharetra accumsan mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In sagittis justo pulvinar urna posuere posuere. Integer dui magna, feugiat eu arcu et, placerat feugiat turpis. Praesent lacinia enim vel pretium cursus. Integer sodales turpis nibh, vehicula elementum magna iaculis id. Phasellus sapien libero, imperdiet sed faucibus vitae, feugiat vel nulla. Integer eleifend orci sit amet enim dignissim, vitae pharetra neque cursus.
              </Text>
            </Flex>
          </Box>
          <Flex direction="row" wrap="wrap" maxW={800} justify='center'>
            <Box sx={boxStyle}>
              <Heading sx={boxHeading}>
                $15
              </Heading>
              <Text sx={boxTextStyle}>
                Covers the cost for National NSBE membership for one student.
              </Text>
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={boxHeading}>$20</Heading>
              <Text sx={boxTextStyle}>
              Covers chapter dinner for one member at Regional or National competition.
              </Text>
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={boxHeading}>
                $45
              </Heading>
              <Text sx={boxTextStyle}>
                Covers the cost for transportation to FRC for one student.
              </Text>
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={boxHeading}>
                $90
              </Heading>
              <Text sx={boxTextStyle}>
                Covers all of a student&apos;s registration for the Fall Regional Conference.
              </Text>
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={boxHeading}>
                $150
              </Heading>
              <Text sx={boxTextStyle}>
                Covers all of a student&apos;s registration for the Fall Regional Conference.
              </Text>
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={boxHeading}>
                $200
              </Heading>
              <Text sx={boxTextStyle}>
                Covers all of a student&apos;s registration for the Fall Regional Conference.
              </Text>
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={boxHeading}>
                $500
              </Heading>
              <Text sx={boxTextStyle}>
                Covers all of a student&apos;s registration for the Fall Regional Conference.
              </Text>
            </Box>
          </Flex>
          <Button marginTop="3%" sx={donateButtonStyle}>
            <Heading color='white'>
              Donate Today!
            </Heading>
          </Button>
        </VStack>
      </Flex>
      
    </main>
  );
}

export default Students;