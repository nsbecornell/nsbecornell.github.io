import styles from "./page.module.css";
import { Inter } from "next/font/google";


// Chakra UI Imports
import {Flex, Image, Box, Center, Text, Heading, HStack, Spacer } from '@chakra-ui/react'

// Custom Imports
import TextContainer from '@/components/TextContainer'
import ImageContainer from '@/components/ImageContainer'

// Image Imports
import GroupPhoto from '@/images/groupNSBE.jpg'
import AcademicExcellence from '@/images/initiatives/academic-excellence.png'
import CommunityService from '@/images/initiatives/community-service.png'
import ProfessionalDevelopment from '@/images/initiatives/professional-development.png'

const inter = Inter({subsets: ['latin']})

export default function Home() {
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
      <Flex direction="column" align="center">
        <Center>
          <Image h={425} opacity={0.75} src={GroupPhoto.src} fallbackSrc="" alt=""/>
          <Heading position="absolute" sx={headingStyling}>Black Engineers at Cornell University</Heading>
        </Center>
      </Flex>
      <Box as="section" className={styles.introSection}>
        <Heading sx={headingStyling}>Who We Are</Heading>
        <Text sx={textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum eget lacus gravida lacinia. Suspendisse viverra tellus a justo finibus, eu blandit purus egestas. Aliquam porttitor volutpat tellus eget scelerisque. In lobortis quis nisi vel malesuada. Quisque lectus est, suscipit ut sapien eu, pharetra accumsan mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In sagittis justo pulvinar urna posuere posuere. Integer dui magna, feugiat eu arcu et, placerat feugiat turpis. Praesent lacinia enim vel pretium cursus. Integer sodales turpis nibh, vehicula elementum magna iaculis id. Phasellus sapien libero, imperdiet sed faucibus vitae, feugiat vel nulla. Integer eleifend orci sit amet enim dignissim, vitae pharetra neque cursus.</Text>
        <Text sx={textStyle}>Nullam commodo sapien quis malesuada posuere. Nunc laoreet ipsum risus, id sagittis tortor blandit nec. Vivamus sollicitudin nisl sed quam lacinia molestie. Etiam mauris arcu, sodales dapibus maximus quis, bibendum at dui. Phasellus vel ante eu lacus ultricies pellentesque sed non sapien. Maecenas placerat ut tortor vitae laoreet. Praesent sagittis orci turpis, et pulvinar ipsum auctor a. Fusce id consectetur turpis, a tempus nulla. Cras auctor tincidunt velit, lobortis dapibus tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur molestie iaculis orci rhoncus imperdiet. Vestibulum ac nunc mattis, rutrum odio sed, suscipit arcu.</Text>
      </Box>
      <Box as="section" className={styles.valuesSection}>
        <Heading sx={headingStyling}>What We Stand For</Heading>
        <Flex direction="column" align="center">
          <HStack spacing={150}>
            <TextContainer
              title="Mission Statement"
              message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rem facere esse nam eum hic corrupti asperiores dolorum, quam voluptatem, sunt commodi voluptatum nesciunt ipsum! Dolorum saepe quibusdam ipsa a!"
            />
            <TextContainer
              title="Vision Statement"
              message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rem facere esse nam eum hic corrupti asperiores dolorum, quam voluptatem, sunt commodi voluptatum nesciunt ipsum! Dolorum saepe quibusdam ipsa a!"
            />
          </HStack>
        </Flex>
      </Box>
      <Box as="section">
        <Heading sx={headingStyling}>Initiatives</Heading>
        <Flex justify="center" gap="10%">
            <ImageContainer src={AcademicExcellence.src} fallbackSrc="" alt=""/>
            <Flex direction='column' wrap='wrap' align='center' justify="center" >
              <Heading sx={headingStyling} marginBottom={0} fontSize={25}>Academic Excellence</Heading>
              <Text sx={textStyle} maxWidth={600} fontSize={20} fontWeight="bold">Our tutorial programs, or 'Study Jams', are held regularly throughout the school year, offering free tutoring and review sessions for general freshman and sophomore engineering courses and hosting post-exam celebrations. NSBE-CU facilitates academic excellence by rewarding deserving members with scholarships and providing mentorship and assistance to struggling students to help them reach their full academic potential.
              </Text>
            </Flex>
        </Flex>

        <Flex justify='center' gap="10%">
            <Flex direction='column' wrap='wrap' align='center' justify="center" >
              <Heading sx={headingStyling} marginBottom={0} fontSize={25}>Community Service</Heading>
              <Text sx={textStyle} maxWidth={600} fontSize={20} fontWeight="bold">NSBE-CU works with the Southside Community Center, Greater Ithaca Activities Center (GIAC), and the Ithaca Sciencecenter, providing tutoring and educational programs. NSBE-CU participates in the Fall Annual Into the Streets Program, a day of service dedicated to cleaning the local community. Last year NSBE-CU eclipsed 200 service hours.
              </Text>
            </Flex>
            <ImageContainer src={CommunityService.src} fallbackSrc="" alt=""/>
        </Flex>

        <Flex justify='center' gap="10%">
          <ImageContainer src={ProfessionalDevelopment.src} fallbackSrc="" alt=""/>
          <Flex direction='column' wrap='wrap' align='center' justify="center" >
            <Heading sx={headingStyling} marginBottom={0} fontSize={25}>Professional Development</Heading>
            {/* wordWrap="breakword" */}
            <Text sx={textStyle} maxWidth={600} fontSize={20} fontWeight="bold">
              NSBE-CU focuses on recruiting members from all STEM backgrounds, with an emphasis on drawing members from the entering class. NSBE-CU’s community building activities, sponsored development programs, and leadership opportunities help recruit and retain members who go on to earn degrees in engineering, science and technology.
            </Text>
          </Flex>
        </Flex>
      </Box>
    </main>
  );
}
