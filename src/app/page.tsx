import styles from "./page.module.css";
import { Inter } from "next/font/google";


// Chakra UI Imports
import {Flex, Image, Box, Center, Text, Heading, HStack, VStack} from '@chakra-ui/react'

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
    fontSize: {
      base: "27px",
      md: "30"
    },
    my: {base: 4, md: 6},
    textAlign: 'center',
  };

  const textStyle = {
    color: "white",
    fontSize: {base: "20px", md: "22px"},
    lineHeight: 1.8
  };

  const boxStyle = {
    my: 8
  };

  const subHeadingStyling = {
    fontWeight: "bold",
    color: "white",
    fontSize: {
      base: "25", 
      md: "27"
    },
    my: {
      base: 4, 
      md: 6
    },
    textAlign: 'center',
    marginBottom: 0,
  }

  return (
    <main className={styles.main}>
      <Flex direction="column" align="center">
        <Center>
          <Image
            sx={
              {
              _hover: {
                transform: "scale(1.025)"
                }
              }
            }
            transition="transform 0.3s ease-in-out"
            borderRadius={25}
            h={
              {
                base: "300px",
                md: 'auto'
              }
            }
            w="100%"
            // opacity={0.75}
            src={GroupPhoto.src}
            objectFit="cover"
            objectPosition='center'
            alt=""
          />
          {/* <Heading
            position="absolute"
            sx= {
              {
                color: "white",
                fontSize: {
                  base: "20",
                  md: "35"
                }
              }
            }
            
            >
              Black Engineers at Cornell University
            </Heading> */}
        </Center>
      </Flex>


      <Box
        as="section"
        className={styles.introSection}
        sx={boxStyle}
      >
        <Heading
          sx={
            {
              ...headingStyling,
            }
          }
        >
          Who We Are
        </Heading>
        <Text
          sx={textStyle}
        >
          Our chapter is part of the National Society of Black Engineers (NSBE), an organization dedicated to increasing the number of culturally responsible Black engineers who excel academically, succeed professionally, and positively impact the community. As a chapter, we are committed to fostering an environment where <b>people of all identities</b> are supported in achieving academic excellence, while also providing opportunities for personal and professional growth. Through initiatives, workshops, and community outreach, we work to embody NSBE’s mission by creating a space for future engineers to thrive and lead.
        </Text>
      </Box>


      <VStack as="section" className={styles.valuesSection} sx={boxStyle}>
        <Heading sx={headingStyling}>What We Stand For</Heading>
        <Flex
          align="center"
          justify='center'
          >
          <Flex
            direction={{
              base: "column", // For mobile and small screens
              lg: "row" // For large screens (desktops)
            }}
            gap={10}
            align='center'
            >
              <TextContainer
                title="Mission Statement"
                message="The NSBE mission statement is 'to increase the number of culturally responsible black engineers who excel academically, succeed professionally and positively impact the community.'"
              />
              <TextContainer
                title="Vision Statement"
                message="We envision a world in which engineering is a mainstream word in homes and communities of color, and all Black students can envision themselves as engineers. In this world, Black people exceed parity in entering engineering fields, earning degrees, and succeeding professionally."
              />
          </Flex>
        </Flex>
      </VStack>


      <Box as="section">
        <Heading sx={headingStyling}>Initiatives</Heading>
        <VStack gap={12}>
          <Flex
            justify="center"
            align="center"
            gap={{ base: "20px", md: "10%" }} 
            sx={{
              _hover: {
                transform: "scale(1.025)"
                }
              }}
            w="100%"
            transition="transform 0.3s ease-in-out"
            direction={{ base: "column", md: "row" }}
            >
              <ImageContainer
                src={AcademicExcellence.src}
                alt=""
                imageHeight={200}
                imageWidth={200}
                containerHeight={275}
                containerWidth={275}
              />

              <Flex
                direction='column'
                wrap='wrap'
                align='center'
                justify="center"
                gap={
                  {
                    base: 2,
                    md: 0,
                  }
                }
                >
                <Heading
                  sx={subHeadingStyling}
                >
                  Academic Excellence
                </Heading>
                <Text
                  sx={textStyle}
                  maxWidth={600}
                  fontSize={20}
                >
                  Our tutorial programs, or &apos;Study Jams&apos;, are held regularly throughout the school year, offering free tutoring and review sessions for general freshman and sophomore engineering courses and hosting post-exam celebrations. NSBE-CU facilitates academic excellence by rewarding deserving members with scholarships and providing mentorship and assistance to struggling students to help them reach their full academic potential.
                </Text>
              </Flex>
          </Flex>

          <Flex
            justify='center'
            align="center"
            gap={{ base: "20px", md: "10%" }}
            sx={{
              _hover: {transform: "scale(1.025)"}
              }}
            w="100%"
            transition="transform 0.3s ease-in-out"
            direction={{ base: "column-reverse", md: "row" }}
            >
              <Flex
                direction='column'
                wrap='wrap'
                align='center'
                justify="center"
                gap={
                  {
                    base: 2,
                    md: 0,
                  }
                }
              >
                <Heading sx={subHeadingStyling}>Community Service</Heading>
                <Text sx={textStyle} maxWidth={600} fontSize={20}>NSBE-CU works with the Southside Community Center, Greater Ithaca Activities Center (GIAC), and the Ithaca Sciencecenter, providing tutoring and educational programs. NSBE-CU participates in the Fall Annual Into the Streets Program, a day of service dedicated to cleaning the local community. Last year NSBE-CU eclipsed 200 service hours.
                </Text>
              </Flex>
              <ImageContainer src={CommunityService.src} alt="" imageHeight={200} imageWidth={200} containerHeight={275} containerWidth={275}/>
          </Flex>

          <Flex
            justify='center'
            align="center"
            gap={{ base: "20px", md: "10%" }}
            sx={{
              _hover: {transform: "scale(1.025)"}
              }}
            w="100%"
            transition="transform 0.3s ease-in-out"
            direction={{ base: "column", md: "row" }}
            >
            <ImageContainer
              src={ProfessionalDevelopment.src}
              alt=""
              imageHeight={200}
              imageWidth={200}
              containerHeight={275}
              containerWidth={275}
            />
            <Flex
              direction='column'
              wrap='wrap'
              align='center'
              justify="center"
              gap={
                {
                  base: 2,
                  md: 0,
                }
              }
            >
              <Heading
                sx={subHeadingStyling}
              >
                Professional Development
              </Heading>
              <Text sx={textStyle} maxWidth={600} fontSize={20}>
                NSBE-CU focuses on recruiting members from all STEM backgrounds, with an emphasis on drawing members from the entering class. NSBE-CU’s community building activities, sponsored development programs, and leadership opportunities help recruit and retain members who go on to earn degrees in engineering, science and technology.
              </Text>
            </Flex>
          </Flex>
        </VStack>
      </Box>
    </main>
  );
}