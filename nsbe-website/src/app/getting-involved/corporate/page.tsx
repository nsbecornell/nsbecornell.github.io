import styles from "@/app/page.module.css";

// Chakra UI Components
import { Heading, Flex, Spacer, VStack } from '@chakra-ui/react';

// Custom Components
import SideContainer from '@/components/SideContainer'
import SponsorContainer from '@/components/SponsorContainer'

const Corporate = () => {
  const headingStyle = {
    color: 'white',
    fontSize: 30
  }

  return (
    <main className={styles.main}>
      <Flex direction="row">
        <SideContainer />
        <Spacer/>
        <VStack>
          <Heading sx={headingStyle}>
            Our Sponsors
          </Heading>
          <SponsorContainer />
          <SponsorContainer />
          <SponsorContainer />
          
        </VStack>
      </Flex>
      
    </main>
  )
}

export default Corporate;