import { Box, Flex, Text, Heading } from '@chakra-ui/react'

import ImageContainer from '@/components/ImageContainer'

function SideContainer() {
  const boxStyling = {
    bg: "gray",
    w: "40%",
    minWidth: "40%",

  }

  const textStyling = {
    color: 'white',

  }

  const headingStyling = {
    color: 'white',
    textAlign: 'center'
  }

  return (
    <Box sx={boxStyling}>
      <Heading sx={headingStyling}>
        Corporate Sponsorships
      </Heading>
      <Box>
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
           <ImageContainer src="" alt="" containerWidth={25} containerHeight={25} imageWidth={10} imageHeight={10}/>
           <Text>
              Brand Visibility
           </Text>
          </Flex>

        </Flex>
      </Box>
      

    </Box>
  )
}

export default SideContainer;