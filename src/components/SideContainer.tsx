import { Box, Flex, Text, Heading, Center, Image, VStack} from '@chakra-ui/react'

import ImageContainer from '@/components/ImageContainer'

import Brand from '@/images/corporate/brand.jpg'
import Candidates from '@/images/corporate/candidates.jpg'
import Cause from '@/images/corporate/cause.jpg'

function SideContainer() {
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
          Corporate Sponsorships
        </Heading>
        <Text sx={textStyling} my={0}>
          In order to realize our initiatives, we&apos;ll need your support! Your sponsorship will help fund professional development opportunities, community outreach initiatives, and critical resources that enable our members to excel academically and professionally.
        </Text>
        <Box w="100%" justifyContent='center'>
          <Heading sx={headingStyling} textAlign='left' fontSize={22}>
            How You Benefit
          </Heading>
          <VStack gap={6}>
            <Flex align='center' justifyContent='center'>
              <Text sx={subheadingStyling} mx="2%" alignContent='center'>
                Diverse, Talented Candidates
              </Text>
              <Text sx={textStyling} mx="2%">
              By sponsoring NSBE at Cornell, your company gains access to a pipeline of highly skilled and diverse engineering talent.
              </Text>
            </Flex>

            <Flex align='center' justifyContent='center'>
              <Text sx={subheadingStyling} mx="2%" alignContent='center'>
                  Contribute to a Cause
              </Text>
              <Text sx={textStyling} mx="2%">
              Your sponsorship supports initiatives that empower underrepresented students to excel academically and professionally.
              </Text>
            </Flex>

            <Flex align='center' justifyContent='center'>
              <Text sx={subheadingStyling} mx="2%" alignContent='center'>
                  Brand Visibility
              </Text>
              <Text sx={textStyling} mx="2%">
              Partnering with NSBE at Cornell increases your company’s visibility among students, professionals, and alumni at one of the nation’s top engineering institutions.
              </Text>
            </Flex>
          </VStack>
        </Box>
      </VStack>
    </Box>
  )
}

export default SideContainer;