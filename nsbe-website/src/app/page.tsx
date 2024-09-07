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

  const boxStyle = {
    my: 25
  };

  return (
    <main className={styles.main}>
      <Flex direction="column" align="center">
        <Center>
          <Image h={425} opacity={0.75} src={GroupPhoto.src} alt=""/>
          <Heading position="absolute" sx={headingStyling}>Black Engineers at Cornell University</Heading>
        </Center>
      </Flex>


      <Box as="section" className={styles.introSection} sx={boxStyle}>
        <Heading sx={headingStyling}>Who We Are</Heading>
        <Text sx={textStyle}>Our chapter is part of the National Society of Black Engineers (NSBE), an organization dedicated to increasing the number of culturally responsible Black engineers who excel academically, succeed professionally, and positively impact the community. As a chapter, we are committed to fostering an environment where members are supported in achieving academic excellence, while also providing opportunities for personal and professional growth. Through initiatives, workshops, and community outreach, we work to embody NSBE’s mission by creating a space for future Black engineers to thrive and lead.</Text>
        <Text sx={textStyle}>We are more than just a student organization—we are a community that empowers its members to push boundaries and create meaningful change. By providing mentorship, leadership opportunities, and access to networking events, we ensure that our members are prepared to succeed both in and out of the classroom. Whether through participating in regional and national conferences, attending professional development events, or engaging in service projects, our chapter is dedicated to making a positive impact on campus and beyond. We welcome all students who share our passion for engineering excellence and making a lasting contribution to society.</Text>
      </Box>


      <Box as="section" className={styles.valuesSection} sx={boxStyle}>
        <Heading sx={headingStyling}>What We Stand For</Heading>
        <Flex direction="column" align="center">
          <HStack spacing={150}>
            <TextContainer
              title="Mission Statement"
              message="The NSBE mission statement is 'to increase the number of culturally responsible black engineers who excel academically, succeed professionally and positively impact the community.'"
            />
            <TextContainer
              title="Vision Statement"
              message="We envision a world in which engineering is a mainstream word in homes and communities of color, and all Black students can envision themselves as engineers. In this world, Black people exceed parity in entering engineering fields, earning degrees, and succeeding professionally."
            />
          </HStack>
        </Flex>
      </Box>


      <Box as="section" sx={boxStyle}>
        <Heading sx={headingStyling}>Initiatives</Heading>
        <Flex justify="center" gap="10%">
            <ImageContainer src={AcademicExcellence.src} alt=""/>
            <Flex direction='column' wrap='wrap' align='center' justify="center" >
              <Heading sx={headingStyling} marginBottom={0} fontSize={25}>Academic Excellence</Heading>
              <Text sx={textStyle} maxWidth={600} fontSize={20} fontWeight="bold">Our tutorial programs, or &apos;Study Jams&apos;, are held regularly throughout the school year, offering free tutoring and review sessions for general freshman and sophomore engineering courses and hosting post-exam celebrations. NSBE-CU facilitates academic excellence by rewarding deserving members with scholarships and providing mentorship and assistance to struggling students to help them reach their full academic potential.
              </Text>
            </Flex>
        </Flex>

        <Flex justify='center' gap="10%">
            <Flex direction='column' wrap='wrap' align='center' justify="center" >
              <Heading sx={headingStyling} marginBottom={0} fontSize={25}>Community Service</Heading>
              <Text sx={textStyle} maxWidth={600} fontSize={20} fontWeight="bold">NSBE-CU works with the Southside Community Center, Greater Ithaca Activities Center (GIAC), and the Ithaca Sciencecenter, providing tutoring and educational programs. NSBE-CU participates in the Fall Annual Into the Streets Program, a day of service dedicated to cleaning the local community. Last year NSBE-CU eclipsed 200 service hours.
              </Text>
            </Flex>
            <ImageContainer src={CommunityService.src} alt=""/>
        </Flex>

        <Flex justify='center' gap="10%">
          <ImageContainer src={ProfessionalDevelopment.src} alt=""/>
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
