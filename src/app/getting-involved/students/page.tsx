import styles from "@/app/page.module.css";

// Chakra UI Imports
import { Link, Button, Flex, Heading, VStack, Box, Divider} from '@chakra-ui/react'

// Custom Imports
import DescriptionSection from "@/components/DescriptionSection";
import Blur from '@/images/blur.png'
import Suitcase from '@/images/briefcase.png'
import AcademicCap from '@/images/mortarboard.png'
import Conferences from '@/images/conference.png'


const Students = () => {
  const headingStyling = {
    fontWeight: "bold",
    color: "white",
    fontSize: {
      base: "27px",
      md: "30"
    },
    my: 6,
    textAlign: "center"
  };

  const buttonStyle = {
    w: "100%",
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
        direction={
          {
            base: "column-reverse",
            md: "row"
          }
        }
        flexWrap='nowrap'
      >
        <Flex direction='column' margin="5%">
          <Heading sx={headingStyling} textAlign='center'>Stay Connected!</Heading>
          <Button sx={buttonStyle}>
            <Link textAlign='center' href="https://docs.google.com/forms/d/e/1FAIpQLSd70Z7zxJp1njIi8mc3Jnehvd5aU-TEsiVqSRl6Po84_SA9Hg/viewform" target="_blank" rel="noopener noreferrer">
              <Heading sx={buttonTextStyle}>
                Join Our List-Serv
              </Heading>
            </Link>
          </Button>
          <Button sx={buttonStyle}>
            <Link textAlign='center' href="https://join.slack.com/t/cornellnsbe/shared_invite/zt-1t417svmu-ZGqAghed07DBj0M9uiMeSA" target="_blank" rel="noopener noreferrer">
              <Heading sx={buttonTextStyle}>
                Join Our Slack
              </Heading>
            </Link>
          </Button>
          <Button sx={buttonStyle}>
            <Link textAlign='center' href="https://www.instagram.com/nsbe_cu/?hl=en" target="_blank" rel="noopener noreferrer">
              <Heading sx={buttonTextStyle}>
                Follow Our Instagram
              </Heading>
            </Link>
          </Button>
          <Button sx={buttonStyle}>
            <Link textAlign='center' href="https://forms.gle/TWNrDaZJPb6AidoL8" target="_blank" rel="noopener noreferrer">
              <Heading sx={buttonTextStyle}>
                Subscribe to Our Calendar
              </Heading>
            </Link>
          </Button>
          <Divider orientation='horizontal' h={4} borderColor="#8D8D8D"/>
          <Heading sx={{...headingStyling, fontSize: "25"}} textAlign='center'>Get Involved!</Heading>
          <Button sx={buttonStyle}>
            <Link textAlign='center' href="https://forms.gle/4UMqKfppKEyFYSwM6" target="_blank" rel="noopener noreferrer">
              <Heading sx={buttonTextStyle}>
                Executive Board Application
              </Heading>
            </Link>
          </Button>
          <Button isDisabled sx={buttonStyle}>
            <Heading sx={buttonTextStyle}>
              First-Year Rep. Application
            </Heading>
          </Button>
        </Flex>
        <VStack marginRight="6%" flexGrow={1}>
          <Box as="section">
            <Heading sx={headingStyling} marginBottom="3%">Benefits of NSBE Membership</Heading>
          </Box>
          <VStack gap={12} justify="center">
          <DescriptionSection
              image={Blur.src}
              heading="Network"
              text="Joining NSBE at Cornell connects you to a vast network of professionals, alumni, and peers, offering mentorship and career opportunities. This powerful network helps you build relationships and gain industry insights, ensuring your success in engineering and beyond."
              />
            <DescriptionSection
              image={Suitcase.src}
              heading="Professional Development"
              text="NSBE offers workshops, resume reviews, and career fairs to help you develop essential skills and confidence. Our programs prepare you to navigate the job market and grow as a leader in the engineering field."
              />
            <DescriptionSection
              image={AcademicCap.src}
              heading="Academic Excellence"
              text="NSBE at Cornell supports your academic success through study groups, tutoring, and workshops. We provide the tools and resources to help you excel in the classroom and build a strong foundation for your engineering career."
            />
            <DescriptionSection
              image={Conferences.src}
              heading="Conferences"
              text="Attending NSBE conferences connects you with industry leaders, cutting-edge technologies, and thousands of peers. Through workshops, career fairs, and competitions, you’ll gain insights, expand your network, and return inspired to make an impact in your academic and professional journey."
            /> 
          </VStack>
        </VStack>
      </Flex>  
    </main>
  )
}

export default Students;