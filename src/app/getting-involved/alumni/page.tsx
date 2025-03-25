import styles from "@/app/page.module.css";

// Chakra UI Imports
import { Link, Box, Button, Flex, Heading, VStack, Text, Spacer, Center, textDecoration } from '@chakra-ui/react';

const Alumni = () => {
  const headingStyling = {
    fontWeight: "bold",
    color: "white",
    fontSize: {
      base: "27px",
      md: "30"
    },
    my: 6,
    textAlign: 'center',
  };

  const textStyle = {
    color: "white",
    fontSize: {base: "20px", md: "22px"},
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
    w: {
      base: "40%",
      md: "20%",
    },
    h: {
      base: 200,
      md: "20%"
    },
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
    fontSize: {
      base: 16,
      md: 14
    },
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
    my: 8,
    _hover: {
      bg: "#3A3A3A",
      transform: "scale(1.05)",
    },
    transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
  }

  const buttonTextStyle = {
    color: "white",
    fontSize: {
      base: 22,
      md: 20,
    },
    mx: 20
  }

  return (
    <main className={styles.main}>
      <Flex
        flexDir={
          {
            base: "column-reverse",
            md: "row"
          }
        }        
        flexWrap='nowrap'
        align={
          {
            base: "center",
            md: "normal"
          }
        }
      >
        <Flex direction="column" margin="5%">
          <Heading
            sx={headingStyling}
          >
            Stay Connected!
          </Heading>
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
        <VStack
          flexGrow={1}
        >
          <Box as="section">
            <Flex direction="column" justify="center">
              <Heading sx={headingStyling} textAlign='center'>Donations Help Us Realize Our Initiatives</Heading>
              <Text sx={textStyle}>
                Support aspiring Black engineers at Cornell by donating to our NSBE chapter. Your contribution fuels academic excellence, professional development, and community service while helping members attend NSBE conferences and access essential resources. Empower the next generation—donate today!
              </Text>
            </Flex>
          </Box>
          <Flex
            direction={
              {
                base: "row",
                md: "row"
              }
            }            
            wrap="wrap"
            justify='center'
            align='center'
          >
            <Flex
              sx={boxStyle}
            >
              <Heading sx={boxHeading}>
                $15
              </Heading>
              <Text sx={boxTextStyle}>
                Covers the cost for National NSBE membership for one student.
              </Text>
            </Flex>
            <Flex sx={boxStyle}>
              <Heading sx={{...headingStyling, my: 3}}>$20</Heading>
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
            <Button
              marginTop="3%"
              sx={donateButtonStyle}
              w="100%"
            >
              <Heading
                color='white'>
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