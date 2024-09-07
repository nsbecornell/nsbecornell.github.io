import styles from "@/app/page.module.css";

// Chakra UI Imports
import { Button, Flex, Heading, VStack, Spacer, Center} from '@chakra-ui/react'

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
          <Button sx={buttonStyle}>
            <Heading sx={buttonTextStyle}>
              Join Our List-Serv
            </Heading>
          </Button>
          <Button sx={buttonStyle}>
            <Heading sx={buttonTextStyle}>
              Join Our Slack
            </Heading>
          </Button>
          <Button sx={buttonStyle}>
            <Heading sx={buttonTextStyle}>
              Follow Our Instagram
            </Heading>
          </Button>
          <Button sx={buttonStyle}>
            <Heading sx={buttonTextStyle}>
              Subscribe to Our Calendar
            </Heading>
          </Button>
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
          <Button sx={buttonStyle} w='fit-content'>
            <Heading sx={buttonTextStyle} mx="2em">
              General Executive Board Application
            </Heading>
          </Button>
          <Button sx={buttonStyle} w='fit-content'>
            <Heading sx={buttonTextStyle} mx="2em">
              First-Year Representative Application
            </Heading>
          </Button>
        </Flex>
      </Center>
      
    </main>
  )
}

export default Students;