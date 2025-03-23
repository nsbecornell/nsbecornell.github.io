import styles from "@/app/page.module.css";

// Chakra UI Imports
import { Box, Image, Center, Heading, Text, Flex, VStack} from '@chakra-ui/react'

// Image Imports
import GroupPhoto from '@/images/groupNSBE.jpg'
import AcademicExcellence from '@/images/initiatives/academic-excellence.png'
import ChicagoSix from '@/images/Chicago Six.jpg'
import GroupNSBE101 from '../../images/groupNSBE101.jpg'
import GivingDay from '@/images/Giving Day Image.png'
import ImageContainer from "@/components/ImageContainer";

function About() {
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

  const imageStyling = {
    _hover: {
      transform: "scale(1.05)",
    },
    transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
  }

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
            src={GroupPhoto.src}
            objectFit="cover"
            objectPosition='center'
            alt=""
          />
      </Center>

      <Box as="section" className={styles.introSection} my={8}>
        <Heading sx={headingStyling}>Our History</Heading>
        <Text sx={textStyle}>The National Society of Black Engineers (NSBE) is a 501(c)(3) nonprofit organization dedicated to the academic and professional success of African-American engineering and technical students and professionals. NSBE offers its members leadership training, professional and academic development, mentoring opportunities, community service outreach programs, and scholarships. Founded in 1977, NSBE-CU is the premier organization for black students in the science, technology, engineering and mathematics (STEM) majors at Cornell University. NSBE-CU is a member of the national organization with affiliation to Region One, which serves the Northeastern United states and international chapters. Through the support of the national organization, the Cornell College of Engineering, and corporate sponsorship, NSBE-CU upholds our mission statement as well as the national directives.</Text>
        <Text sx={textStyle}></Text>
      </Box>

      <Box as="section">
        <VStack gap={12}>
            <Flex
              justify="center"
              align='center'
              gap={
                {
                  base: "20px",
                  md: "10%"
                }
              }
              sx={
                {
                  _hover: {
                    transform: "scale(1.025)"
                    }
                  }
                }
              w="100%"
              transition="transform 0.3s ease-in-out"
              direction={
                {
                  base: "column",
                  md: "row"
                }
              }
              >

              <Image
                sx={imageStyling}
                w={300}
                h={275}
                borderRadius={25}
                src={ChicagoSix.src}
                alt=""
              />

              <Flex
                direction='column'
                wrap='wrap'
                align='center'
                justify="center"
              >
                <Heading
                  sx={subHeadingStyling}
                >
                  Founding of NSBE
                </Heading>

                <Text
                  sx={textStyle}
                  maxWidth={600}
                  fontSize={20}
                >
                  The National Society of Black Engineers was founded in 1975 by six visionary students at Purdue University. Known as the &quot;Chicago Six,&quot; these students &mdash; Edward Coleman, Anthony Harris, Brian Harris, Stanley Kirtley, John Logan Jr., and George Smith &mdash;  saw the need for a support network to address the underrepresentation of Black students in engineering programs, and were determined to create an organization that would promote academic success and increase the number of Black engineers.
                </Text>
              </Flex>
          </Flex>

          <Flex
            justify="center"
            align='center'
            gap={
              {
                base: "20px",
                md: "10%"
              }
            }
            sx={
              {
                _hover: {
                  transform: "scale(1.025)"
                  }
                }
              }
              w="100%"
              transition="transform 0.3s ease-in-out"
              direction={
                {
                  base: "column-reverse",
                  md: "row"
                }
              }
            >
                <Flex
                  direction='column'
                  wrap='wrap'
                  align='center'
                  justify="center"
                >
                  <Heading
                    sx={subHeadingStyling}
                  >
                    Chapter History
                  </Heading>

                  <Text
                    sx={textStyle}
                    maxWidth={600}
                    fontSize={20}
                  >
                    Founded in 1977, Cornell&apos;s National Society of Black Engineers (NSBE-CU) is the premier organization for Black students in the STEM majors at Cornell. Our mission: &quot;To increase the number of culturally responsible black engineers who excel academically, succeed professionally, and positively impact the community.&quot; Through the support of the national organization, Cornell&apos;s College of Engineering, Diversity Programs in Engineering, and corporate sponsorship, NSBE-CU upholds our mission statement and the national directives. 
                  </Text>
                </Flex>
                <Image
                  sx={imageStyling}
                  w={300}
                  h={275}
                  borderRadius={25}
                  src={GivingDay.src}
                  alt=""
                />
            </Flex>

          <Flex
            justify="center"
            align='center'
            gap={
              {
                base: "20px",
                md: "10%"
              }
            }
            sx={
              {
                _hover: {
                  transform: "scale(1.025)"
                  }
                }
              }
            w="100%"
            transition="transform 0.3s ease-in-out"
            direction={
              {
                base: "column",
                md: "row"
              }
            }
            >
              <Image
                sx={imageStyling}
                borderRadius={25}
                h={275}
                src={GroupNSBE101.src}
                alt=""
              />

              <Flex
                direction='column'
                wrap='wrap'
                align='center'
                justify="center"
              >
                <Heading
                  sx={subHeadingStyling}
                >
                  Present Day
                </Heading>

                <Text
                  sx={textStyle}
                  maxWidth={600}
                  fontSize={20}
                >
                  Since its founding, the Cornell chapter of NSBE has grown from a meager group to a large, influential on-campus organization. Holding true to its founding values and mission, NSBE-CU has become a vital resource for students, empowering them to succeed both academically and professionally through mentorship, workshops, and networking opportunities.
                </Text>
              </Flex>
          </Flex>
        </VStack>
      </Box>
    </main>
  );
}

export default About;