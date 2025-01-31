import styles from "@/app/page.module.css";

// Chakra UI Imports
import { Link, Box, Button, Flex, Heading, VStack, Text, Spacer, Center, textDecoration } from '@chakra-ui/react'
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
    fontSize: 20,
    textDecoration: ""
  }

  return (
    <main className={styles.main}>
      <Flex flexDir="row" flexWrap='wrap'>
        <Flex direction="column" marginTop="5%">
          <Heading sx={headingStyle} textAlign='center'>Stay Connected!</Heading>
          <Link href="http://eepurl.com/ikM-wr" target="_blank" rel="noopener noreferrer">
            <Button
              sx={buttonStyle}
              >
                <Heading sx={buttonTextStyle}>
                  Join Our Newsletter
                </Heading>
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/cornell-university-nsbe-chapter-12b53a254/" target="_blank" rel="noopener noreferrer">
            <Button sx={buttonStyle}>
              <Heading sx={buttonTextStyle}>
                Follow Our LinkedIn
              </Heading>
            </Button>
          </Link>
        </Flex>
        <Spacer />
        <VStack marginRight="6%">
          <Box as="section">
            <Flex direction="column" justify="center">
              <Heading sx={headingStyle} textAlign='center'>Donations Help Us Realize Our Initiatives</Heading>
              <Text maxW={750} sx={textStyle}>
                Your support can make a lasting impact on the future of aspiring Black engineers at Cornell University. By donating to our NSBE chapter, you contribute to the mission of NSBE: to increase the number of culturally responsible Black engineers who excel academically, succeed professionally, and positively impact the community. Your generosity will directly support our initiatives in academic excellence, community service, and professional development, as well as help to send current members to NSBE conferences, provide essential resources for academic success, and expand our community service efforts. Together, we can empower the next generation of leaders and innovators. Join us in advancing this mission—your donation today will help our members achieve their goals and create a brighter future for all.
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
          <Link href="https://securelb.imodules.com/s/1717/giving/interior.aspx?sid=1717&gid=2&pgid=403&cid=1031&dids=238&bledit=1" target="_blank" rel="noopener noreferrer">
            <Button marginTop="3%" sx={donateButtonStyle}>
              <Heading color='white'>
                Donate Today!
              </Heading>
            </Button>
          </Link>
        </VStack>
      </Flex>
      
    </main>
  );
}

export default Students;