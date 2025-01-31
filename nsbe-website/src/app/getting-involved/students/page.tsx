import styles from "@/app/page.module.css";

// Chakra UI Imports
import { Link, Button, Flex, Heading, VStack, Spacer, Center} from '@chakra-ui/react'

// Custom Imports
import DescriptionSection from "@/components/DescriptionSection";


const Students = () => {
  const headingStyle = {
    color: "white",
    fontSize: 30
  }

  const buttonStyle = {
    borderRadius: 15,
    bg: "#2C2C2C",
    borderWidth: 0,
    marginBottom: 15
  }

  const buttonTextStyle = {
    color: "white",
    fontSize: 20
  }
  
  return (
    <main className={styles.main}>
      <Flex direction='row'>
        <Flex direction='column' marginTop="5%">
          <Heading sx={headingStyle} textAlign='center'>Stay Connected!</Heading>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd70Z7zxJp1njIi8mc3Jnehvd5aU-TEsiVqSRl6Po84_SA9Hg/viewform" target="_blank" rel="noopener noreferrer">
            <Button sx={buttonStyle}>
              <Heading sx={buttonTextStyle}>
                Join Our List-Serv
              </Heading>
            </Button>
          </Link>
          <Link href="https://join.slack.com/t/cornellnsbe/shared_invite/zt-1t417svmu-ZGqAghed07DBj0M9uiMeSA" target="_blank" rel="noopener noreferrer">
            <Button sx={buttonStyle}>
              <Heading sx={buttonTextStyle}>
                Join Our Slack
              </Heading>
            </Button>
          </Link>
          <Link href="https://www.instagram.com/nsbe_cu/?hl=en" target="_blank" rel="noopener noreferrer">
            <Button sx={buttonStyle}>
              <Heading sx={buttonTextStyle}>
                Follow Our Instagram
              </Heading>
            </Button>
          </Link>
          <Link href="https://forms.gle/TWNrDaZJPb6AidoL8" target="_blank" rel="noopener noreferrer">
            <Button sx={buttonStyle}>
              <Heading sx={buttonTextStyle}>
                Subscribe to Our Calendar
              </Heading>
            </Button>
          </Link>
        </Flex>
        <Spacer />
        <VStack marginRight="6%">
          <Heading sx={headingStyle} marginBottom={0}>Benefits of NSBE Membership</Heading>
          <DescriptionSection image="" heading="Network" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl leo, blandit at dictum nec, auctor id magna. Nam viverra sit amet purus nec luctus. Aliquam erat volutpat. Fusce auctor tincidunt lacus, quis rhoncus metus laoreet vitae. Sed faucibus nunc in egestas accumsan."/>
          <DescriptionSection image="" heading="Professional Development" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl leo, blandit at dictum nec, auctor id magna. Nam viverra sit amet purus nec luctus. Aliquam erat volutpat. Fusce auctor tincidunt lacus, quis rhoncus metus laoreet vitae. Sed faucibus nunc in egestas accumsan."/>
          <DescriptionSection image="" heading="Academic Excellence" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl leo, blandit at dictum nec, auctor id magna. Nam viverra sit amet purus nec luctus. Aliquam erat volutpat. Fusce auctor tincidunt lacus, quis rhoncus metus laoreet vitae. Sed faucibus nunc in egestas accumsan."/>
          <DescriptionSection image="" heading="Conferences" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl leo, blandit at dictum nec, auctor id magna. Nam viverra sit amet purus nec luctus. Aliquam erat volutpat. Fusce auctor tincidunt lacus, quis rhoncus metus laoreet vitae. Sed faucibus nunc in egestas accumsan."/> 
        </VStack>
      </Flex>
      <Center>
        <Flex justifyContent='center' direction="column">
          <Heading sx={headingStyle}>Executive Board Applications</Heading>
          <Link>
            <Button sx={buttonStyle} w='fit-content'>
              <Heading sx={buttonTextStyle} mx="2em">
                General Executive Board Application
              </Heading>
            </Button>
          </Link>
          <Link>
            <Button sx={buttonStyle} w='fit-content'>
              <Heading sx={buttonTextStyle} mx="2em">
                First-Year Representative Application
              </Heading>
            </Button>
          </Link>
        </Flex>
      </Center>
      
    </main>
  )
}

export default Students;