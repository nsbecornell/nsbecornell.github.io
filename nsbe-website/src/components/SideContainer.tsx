import { Box, Flex, Text, Heading, Center, VStack} from '@chakra-ui/react'

import ImageContainer from '@/components/ImageContainer'

function SideContainer() {
  const boxStyling = {
    bg: "#2C2C2C",
    w: 400,
    borderRadius: 15

  }

  const textStyling = {
    color: 'white',

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
        <Text fontWeight='bold' sx={textStyling} background='red'>
          Silver
        </Text>
        <Text fontWeight='bold' sx={textStyling}>
          Bronze
        </Text>
        <Text fontWeight='bold' sx={textStyling}>
          Diamond
        </Text>
        <Box>
          <Heading sx={headingStyling} textAlign='left' fontSize={22}>
            How You Benefit
          </Heading>
          <Flex direction="column">
          <Flex>
           <ImageContainer src="" alt="" color='red' containerWidth={25} containerHeight={25} imageWidth={10} imageHeight={10}/>
           <Text>
              Diverse, Talented Candidates
           </Text>
          </Flex>
          <Flex>
           <ImageContainer src="" alt="" color='red' containerWidth={25} containerHeight={25} imageWidth={10} imageHeight={10}/>
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