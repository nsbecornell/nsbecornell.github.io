import styles from "@/app/page.module.css";

// Chakra UI Imports
import { Box, Image, Center, Heading, Text, Flex, VStack} from '@chakra-ui/react'

// Image Imports
import GroupPhoto from '@/images/groupNSBE.jpg'
import AcademicExcellence from '@/images/initiatives/academic-excellence.png'


function About() {
  const headingStyling = {
    fontWeight: "bold",
    color: "white",
  };

  const textStyle = {
    color: "white",
    fontSize: "17",
    textIndent: "3%"
  };
  
  return (
    <main className={styles.main}>
      <Center>
          <Image h={425} src={GroupPhoto.src} alt=""/>
        </Center>

      <Box as="section" className={styles.introSection} mb={50}>
        <Heading sx={headingStyling}>Our History</Heading>
        <Text sx={textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum eget lacus gravida lacinia. Suspendisse viverra tellus a justo finibus, eu blandit purus egestas. Aliquam porttitor volutpat tellus eget scelerisque. In lobortis quis nisi vel malesuada. Quisque lectus est, suscipit ut sapien eu, pharetra accumsan mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In sagittis justo pulvinar urna posuere posuere. Integer dui magna, feugiat eu arcu et, placerat feugiat turpis. Praesent lacinia enim vel pretium cursus. Integer sodales turpis nibh, vehicula elementum magna iaculis id. Phasellus sapien libero, imperdiet sed faucibus vitae, feugiat vel nulla. Integer eleifend orci sit amet enim dignissim, vitae pharetra neque cursus.</Text>
        <Text sx={textStyle}>Nullam commodo sapien quis malesuada posuere. Nunc laoreet ipsum risus, id sagittis tortor blandit nec. Vivamus sollicitudin nisl sed quam lacinia molestie. Etiam mauris arcu, sodales dapibus maximus quis, bibendum at dui. Phasellus vel ante eu lacus ultricies pellentesque sed non sapien. Maecenas placerat ut tortor vitae laoreet. Praesent sagittis orci turpis, et pulvinar ipsum auctor a. Fusce id consectetur turpis, a tempus nulla. Cras auctor tincidunt velit, lobortis dapibus tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur molestie iaculis orci rhoncus imperdiet. Vestibulum ac nunc mattis, rutrum odio sed, suscipit arcu.</Text>
      </Box>

      <VStack spacing={60}>
        <Flex justify="center" gap="10%">
          <Image w={300} h={275} src={AcademicExcellence.src} alt=""/>
          <Flex direction='column' wrap='wrap' align='center' justify="center" >
            <Heading sx={headingStyling} marginBottom={0} fontSize={25}>Founding of NSBE</Heading>
            <Text sx={textStyle} maxWidth={600} fontSize={20} fontWeight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl leo, blandit at dictum nec, auctor id magna. Nam viverra sit amet purus nec luctus. Aliquam erat volutpat. Fusce auctor tincidunt lacus, quis rhoncus metus laoreet vitae. Sed faucibus nunc in egestas accumsan. Etiam luctus neque leo, non imperdiet elit lobortis vel. Nunc porttitor nisl facilisis urna bibendum hendrerit. Ut ac nisi ac felis volutpat elementum.
            </Text>
          </Flex>
       </Flex>

       <Flex justify="center" gap="10%">
            <Flex direction='column' wrap='wrap' align='center' justify="center" >
              <Heading sx={headingStyling} marginBottom={0} fontSize={25}>Chapter History</Heading>
              <Text sx={textStyle} maxWidth={600} fontSize={20} fontWeight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl leo, blandit at dictum nec, auctor id magna. Nam viverra sit amet purus nec luctus. Aliquam erat volutpat. Fusce auctor tincidunt lacus, quis rhoncus metus laoreet vitae. Sed faucibus nunc in egestas accumsan. Etiam luctus neque leo, non imperdiet elit lobortis vel. Nunc porttitor nisl facilisis urna bibendum hendrerit. Ut ac nisi ac felis volutpat elementum.
              </Text>
            </Flex>
            <Image w={300} h={275} src={AcademicExcellence.src} alt=""/>
        </Flex>

       <Flex justify="center" gap="10%">
          <Image w={300} h={275} src={AcademicExcellence.src} alt=""/>
          <Flex direction='column' wrap='wrap' align='center' justify="center" >
            <Heading sx={headingStyling} marginBottom={0} fontSize={25}>Present Day</Heading>
            <Text sx={textStyle} maxWidth={600} fontSize={20} fontWeight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl leo, blandit at dictum nec, auctor id magna. Nam viverra sit amet purus nec luctus. Aliquam erat volutpat. Fusce auctor tincidunt lacus, quis rhoncus metus laoreet vitae. Sed faucibus nunc in egestas accumsan. Etiam luctus neque leo, non imperdiet elit lobortis vel. Nunc porttitor nisl facilisis urna bibendum hendrerit. Ut ac nisi ac felis volutpat elementum.
            </Text>
          </Flex>
       </Flex>
      </VStack>
    </main>
  );
}

export default About;