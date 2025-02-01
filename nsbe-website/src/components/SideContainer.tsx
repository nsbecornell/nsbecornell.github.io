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
    color: 'white',

  }

  const subheadingStyling = {
    color: 'white',
    textAlign: 'center',
    fontSize: "18px",
    fontWeight: 'bold'
  }

  const headingStyling = {
    color: 'white',
    textAlign: 'center'
  }

  return (
    <Box sx={boxStyling} paddingLeft="1%" paddingRight='1%'>
      <VStack spacing={0}>
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
          <Flex direction="column">
            <Flex justifyContent='center'>
              {/* <ImageContainer src={Candidates.src} alt="" color='red' imageWidth={50} imageHeight={50}/> */}
              {/* <Image src={Candidates.src} alt="" w={70} h={70} borderRadius="20%" mx="2%"/> */}
              <Text sx={subheadingStyling} mx="2%" alignContent='center'>
                Diverse, Talented Candidates
              </Text>
              <Text sx={textStyling} mx="2%">
              By sponsoring NSBE at Cornell, your company gains access to a pipeline of highly skilled and diverse engineering talent. This is meaningful because it allows your organization to connect with driven students who bring fresh perspectives and innovative ideas, helping to foster a more inclusive and dynamic workplace.
              </Text>
            </Flex>

            <Flex justifyContent='center'>
              {/* <ImageContainer src={Cause.src} alt="" color='red' containerWidth={25} containerHeight={25} imageWidth={10} imageHeight={10}/> */}
              {/* <Image src={Cause.src} alt="" w={70} h={70} borderRadius="20%" mx="2%"/> */}
              <Text sx={subheadingStyling} mx="2%" alignContent='center'>
                  Contribute to a Cause
              </Text>
              <Text sx={textStyling} mx="2%">
              Your sponsorship supports initiatives that empower underrepresented students to excel academically and professionally. This is meaningful because it demonstrates your company’s commitment to diversity, equity, and inclusion, aligning your brand with a mission that positively impacts both individuals and communities.
              </Text>
            </Flex>

            <Flex justifyContent='center'>
              {/* <ImageContainer src={Brand.src} alt="" color='red' containerWidth={25} containerHeight={25} imageWidth={10} imageHeight={10}/> */}
              {/* <Image src={Brand.src} alt="" w={70} h={70} borderRadius="20%" mx="2%"/> */}
              <Text sx={subheadingStyling} mx="2%" alignContent='center'>
                  Brand Visibility
              </Text>
              <Text sx={textStyling} mx="2%">
              Partnering with NSBE at Cornell increases your company’s visibility among students, professionals, and alumni at one of the nation’s top engineering institutions. This is meaningful because it enhances your brand’s reputation as a supporter of education and diversity, helping you stand out to top talent and potential clients.
              </Text>
            </Flex>
          </Flex>
        </Box>
      </VStack>

      
      {/* <Box>
        <Text sx={textStyling}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum eget lacus gravida lacinia. Suspendisse viverra tellus a justo finibus, eu blandit purus egestas. Aliquam porttitor volutpat tellus eget scelerisque.
        </Text>
        <Text fontWeight='bold' sx={textStyling}>
          Silver
        </Text>
        <Text fontWeight='bold' sx={textStyling}>
          Bronze
        </Text>
        <Text fontWeight='bold' sx={textStyling}>
          Diamond
        </Text>
      </Box>
      <Box>
        <Heading> How You Benefit </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum eget lacus gravida lacinia.
        </Text>
        <Flex direction="column">
          <Flex>
           <ImageContainer src="" alt="" containerWidth={25} containerHeight={25} imageWidth={10} imageHeight={10}/>
           <Text>
              Diverse, Talented Candidates
           </Text>
          </Flex>
          <Flex>
           <ImageContainer src="" alt="" containerWidth={25} containerHeight={25} imageWidth={10} imageHeight={10}/>
           <Text>
              Contribute to a Cause
           </Text>
          </Flex>
          <Flex>
           <ImageContainer src="" alt="" color='red' containerWidth={25} containerHeight={25} imageWidth={10} imageHeight={10}/>
           <Text>
              Brand Visibility
           </Text>
          </Flex>
        </Flex>
      </Box> */}
    </Box>
  )
}

export default SideContainer;