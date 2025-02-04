import styles from "@/app/page.module.css";

// Chakra UI Imports
import { Link, Box, Button, Flex, Heading, VStack, Text, Spacer, Center, textDecoration } from '@chakra-ui/react';

const Alumni = () => {
  const headingStyling = {
    fontWeight: "bold",
    color: "white",
    fontSize: "30",
    my: 6,
    textAlign: 'center'
  };

  const textStyle = {
    color: "white",
    fontSize: "20",
    textIndent: "3%",
    lineHeight: 1.8
  };

  const boxHeading = {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold"
  }

  const boxStyle = {
    bg: "#2C2C2C",
    mx: 5,
    my: 5,
    borderRadius: 10,
    minH: 175,
    w: "20%",
    _hover: {
      bg: "#3A3A3A",
      transform: "scale(1.05)",
    },
    transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
    justifyContent: 'center',
    flexDir: 'column'
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
    marginBottom: 15,
    _hover: {
      bg: "#3A3A3A",
      transform: "scale(1.05)",
    },
    transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
  }

  const donateButtonStyle = {
    borderRadius: 15,
    bg: "#2C2C2C",
    borderWidth: 0,
    padding: 8,
    mx: 30,
    my: 8,
    _hover: {
      bg: "#3A3A3A",
      transform: "scale(1.05)",
    },
    transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
  }

  const buttonTextStyle = {
    color: "white",
    fontSize: 20,
    mx: 20
  }

  return (
    <main className={styles.main}>
      <Flex flexDir="row" flexWrap='nowrap'>
        <Flex direction="column" margin="5%">
          <Heading sx={headingStyling} textAlign='center'>Stay Connected!</Heading>
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
        <VStack marginRight="6%" flexGrow={1}>
          <Box as="section">
            <Flex direction="column" justify="center">
              <Heading sx={headingStyling} textAlign='center'>Donations Help Us Realize Our Initiatives</Heading>
              <Text sx={textStyle}>
                Your support can make a lasting impact on the future of aspiring Black engineers at Cornell University. By donating to our NSBE chapter, you contribute to the mission of NSBE: to increase the number of culturally responsible Black engineers who excel academically, succeed professionally, and positively impact the community. Your generosity will directly support our initiatives in academic excellence, community service, and professional development, as well as help to send current members to NSBE conferences, provide essential resources for academic success, and expand our community service efforts. Together, we can empower the next generation of leaders and innovators. Join us in advancing this mission—your donation today will help our members achieve their goals and create a brighter future for all.
              </Text>
            </Flex>
          </Box>
          <Flex direction="row" wrap="wrap" justify='center'>
            <Flex sx={boxStyle}>
              <Heading sx={boxHeading}>
                $15
              </Heading>
              <Text sx={boxTextStyle}>
                Covers the cost for National NSBE membership for one student.
              </Text>
            </Flex>
            <Flex sx={boxStyle}>
              <Heading sx={headingStyling}>$20</Heading>
              <Text sx={boxTextStyle}>
              Covers chapter dinner for one member at Regional or National competition.
              </Text>
            </Flex>
            <Flex sx={boxStyle}>
              <Heading sx={boxHeading}>
                $45
              </Heading>
              <Text sx={boxTextStyle}>
                Covers the cost for transportation to FRC for one student.
              </Text>
            </Flex>
            <Flex sx={boxStyle}>
              <Heading sx={boxHeading}>
                $90
              </Heading>
              <Text sx={boxTextStyle}>
                Covers all of a student&apos;s registration for the Fall Regional Conference.
              </Text>
            </Flex>
            <Flex sx={boxStyle}>
              <Heading sx={boxHeading}>
                $150
              </Heading>
              <Text sx={boxTextStyle}>
                Covers all of a student&apos;s registration for the Fall Regional Conference.
              </Text>
            </Flex>
            <Flex sx={boxStyle}>
              <Heading sx={boxHeading}>
                $200
              </Heading>
              <Text sx={boxTextStyle}>
                Covers all of a student&apos;s registration for the Fall Regional Conference.
              </Text>
            </Flex>
            <Flex sx={boxStyle}>
              <Heading sx={boxHeading}>
                $500
              </Heading>
              <Text sx={boxTextStyle}>
                Covers all of a student&apos;s registration for the Fall Regional Conference.
              </Text>
            </Flex>
          </Flex>
          <Link href="https://securelb.imodules.com/s/1717/giving/interior.aspx?sid=1717&gid=2&pgid=403&cid=1031&dids=238&bledit=1" target="_blank" rel="noopener noreferrer">
            <Button marginTop="3%" sx={donateButtonStyle} w="100%">
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

export default Alumni;