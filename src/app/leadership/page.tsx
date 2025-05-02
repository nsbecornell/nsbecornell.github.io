import styles from "@/app/page.module.css";

// Chakra UI Imports
import {Image, Text, Box, Heading, VStack, Center, UnorderedList, ListItem, Flex} from '@chakra-ui/react';

// Images
import eboardPhoto from '@/images/eboard/2024-2025/2024-2025-eboard.jpg'
import ChimdiAnude from '@/images/eboard/2024-2025/Chimdi Anude.jpeg'
import MohamedKane from '@/images/eboard/2024-2025/Mohamed Kane.jpg'
import AdigunOlusola from '@/images/eboard/2024-2025/Adigun Olusola.jpg'
import KaylaStephenson from '@/images/eboard/2024-2025/Kayla Stephenson.jpeg'
import TennyGeorge from '@/images/eboard/2024-2025/Tenny George.jpg'
import EmmaBrown from '@/images/eboard/2024-2025/Emma Brown.jpg'
import ChimdiEjiogu from '@/images/eboard/2024-2025/Chimdi Ejiogu.jpg'
import SkaiNzeuton from '@/images/eboard/2024-2025/Skai Nzeuton.jpg'
import IvieOsagie from '@/images/eboard/2024-2025/Ivie Osagie.jpg'
import MukamiGichoya from '@/images/eboard/2024-2025/Mukami Gichoya.jpg'
import LucyBazezy from '@/images/eboard/2024-2025/Lucy Bazezy.jpg'
import JamisonTaylorJr from '@/images/eboard/2024-2025/Jamison Taylor, Jr.jpg'
import AlexisSherman from '@/images/eboard/2024-2025/Alexis Sherman.jpeg'
import ZenaPhillip from '@/images/eboard/2024-2025/Zena Phillip.jpeg'
import MouhammadDia from '@/images/eboard/2024-2025/Mouhammad Dia.jpeg'
import NathanielBanjo from '@/images/eboard/2024-2025/Nathaniel Banjo.jpg'
import YodaheMaaza from '@/images/eboard/2024-2025/Yodahe Maaza.jpg'
import MaguetteDiop from '@/images/eboard/2024-2025/Maguette Diop.jpg'
import WesleyDeCosta from '@/images/eboard/2024-2025/Wesley DeCosta.jpg'
import DavisAdams from '@/images/eboard/2024-2025/Davis Adams.jpg'
import RayanuAdam from '@/images/eboard/2024-2025/Rayanu Adam.jpg'
import HopeBest from '@/images/eboard/2024-2025/Hope Best.jpg'
import PromiseEkpo from '@/images/eboard/2024-2025/Promise Ekpo.jpg'
import ReggieHarris from '@/images/eboard/2024-2025/Reggie Harris.jpg'
import AnthonyTodd from '@/images/eboard/2024-2025/Anthony Todd.jpg'
import EthanSarpong from '@/images/eboard/2024-2025/Ethan Sarpong.jpg'

// Custom Components
import GalleryBox from "@/components/GalleryBox";

const Leadership = () => {
  const textStyle = {
    color: "white",
    fontSize: {base: "20px", md: "22px"},
    lineHeight: 1.8
  };

  const headingStyling = {
    fontWeight: "bold",
    color: "white",
    fontSize: {
      base: "27px",
      md: "30"
    },
    my: 6,
    textAlign: 'center'
  };

  const subHeadingStyling = {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    my: 0,
    fontSize: "22"
  }

  type member = {
    id: number,
    name: string,
    position: string,
    image: string
  } 

  type year = {
    year: string,
    members: member[]
  }

  const eboard: year = {
    year: "2024-2025",
    members: [
      {
        id: 1,
        name: "Chimdi Anude",
        position: "President",
        image: ChimdiAnude.src
      },
      {
        id: 2,
        name: "Mohamed Kane",
        position: "Internal Vice President",
        image: MohamedKane.src
      },
      {
        id: 3,
        name: "Adigun Olusola",
        position: "External Co-Vice President",
        image: AdigunOlusola.src
      },
      {
        id: 4,
        name: "Kayla Stephenson",
        position: "External Co-Vice President",
        image: KaylaStephenson.src
      },
      {
        id: 5,
        name: "Tenny George",
        position: "Treasurer",
        image: TennyGeorge.src
      },
      {
        id: 6,
        name: "Emma Brown",
        position: "Secretary",
        image: EmmaBrown.src
      },
      {
        id: 7,
        name: "Rayanu Adam",
        position: "Programs Chair",
        image: RayanuAdam.src
      },
      {
        id: 8,
        name: "Chimdi Ejiogu",
        position: "Telecommunications Chair",
        image: ChimdiEjiogu.src
      },
      {
        id: 9,
        name: "Wesley DeCosta",
        position: "Co-Conference Planning Chair",
        image: WesleyDeCosta.src
      },
      {
        id: 10,
        name: "Maguette Diop",
        position: "Co-Conference Planning Chair",
        image: MaguetteDiop.src
      },
      {
        id: 11,
        name: "Skai Nzeuton",
        position: "Academic Excellence Co-Chair",
        image: SkaiNzeuton.src
      },
      {
        id: 12,
        name: "Ivie Osagie",
        position: "Academic Excellence Co-Chair",
        image: IvieOsagie.src
      },
      {
        id: 13,
        name: "Davis Adams",
        position: "Pre-Collegiate Initiatives Co-Chair",
        image: DavisAdams.src
      },
      {
        id: 14,
        name: "Mukami Gichoya",
        position: "Pre-Collegiate Initiatives Co-Chair",
        image: MukamiGichoya.src
      },
      {
        id: 15,
        name: "Hope Best",
        position: "Publicity Chair",
        image: HopeBest.src
      },
      {
        id: 16,
        name: "Lucy Bazezy",
        position: "Publicity Chair",
        image: LucyBazezy.src
      },
      {
        id: 17,
        name: "Promise Ekpo",
        position: "Graduate Representative",
        image: PromiseEkpo.src
      },
      {
        id: 18,
        name: "Jamison Taylor",
        position: "Senator/Parliamentarian",
        image: JamisonTaylorJr.src
      },
      {
        id: 19,
        name: "Alexis Sherman",
        position: "Senator/Historian",
        image: AlexisSherman.src
      },
      {
        id: 20,
        name: "Ethan Sarpong",
        position: "Upstate Zone Chair",
        image: EthanSarpong.src
      },
      {
        id: 21,
        name: "Reggie Harris",
        position: "Membership Chair",
        image: ReggieHarris.src
      },
      {
        id: 22,
        name: "Anthony Todd",
        position: "Alumni Relations Chair",
        image: AnthonyTodd.src
      },
      {
        id: 23,
        name: "Zena Phillip",
        position: "Freshman Representative",
        image: ZenaPhillip.src
      },
      {
        id: 23,
        name: "Mouhammad Dia",
        position: "Freshman Representative",
        image: MouhammadDia.src
      },
      {
        id: 24,
        name: "Nathaniel Banjo",
        position: "Freshman Representative",
        image: NathanielBanjo.src
      },
      {
        id: 25,
        name: "Yodahe Maaza",
        position: "Freshman Representative",
        image: YodaheMaaza.src
      }
    ]
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
          w={
            {
              base: "100%",
              md: "80%"
            }
          }
          objectFit="cover"
          objectPosition='center'
          src={eboardPhoto.src}
          alt="Group photo of the chapter's executive board of 2024-2025"
        />
      </Center>

      <Box as="section" my={8}>
          <Heading sx={headingStyling}>The Executive Board</Heading>
          <Text sx={textStyle}>
            The executive board of our NSBE chapter is the mover behind all that our chapter does. From planning events to promote the academic success of our chapter&apos;s general body members to coordinating with sponsors to ensure the professional development of our engineers &mdash; our board works tirelessly to promote the mission and vision of the National Society of Black Engineers. Under the guidance of our president, <b>Chimdi Anude</b>, the executive board also works to promote throughout the campus the chapter&apos;s own core values: Transparency, Dedication, and Support.
          </Text>
          <Flex
            align='center'
            direction={
              {
                base: "column",
                md: "row"
              }
            }
            flexWrap='wrap'
            justifyContent='center'
            gap="10%"
            my={3.5}
          >
              <Flex
                direction='column'
                maxW={
                  {
                    base: "100%",
                    md: "40%"
                  }
                }
              >
                <Text sx={subHeadingStyling}>Transparency</Text>
                <Text
                  sx={textStyle}
                  maxW={650}
                >
                  We prioritize open and honest communication within our community. By being transparent, we build trust and ensure that all members are informed and aligned with our goals. Reliability is key; we hold ourselves accountable to each other and to the mission of our organization.
                </Text>
              </Flex>

              <Flex
                direction='column'
                // maxW="40%"
              >
                <Text sx={subHeadingStyling}>Dedication</Text>
                <Text
                  sx={textStyle}
                  maxW={650}
                >
                  We are unwavering in our commitment to the mission of the National Society of Black Engineers. Our dedication drives us to excel academically, succeed professionally, and make a positive impact in our communities. Our belief in this mission inspires us in our efforts to uplift this generation of engineers.
                </Text>
              </Flex>

              <Flex
                direction='column'
                // maxW="40%"
              >
                <Text sx={subHeadingStyling}>Support</Text>
                <Text
                  sx={textStyle}
                  maxW={650}
                  >
                  Our strength lies in our unity and our ability to support one another. We foster an environment where members can lean one each other for guidance, encouragement, and resources. Together, we create a network of mentorship and collaboration that propels us all forward.
                </Text>
              </Flex>
          </Flex>
          <Text sx={textStyle}>
            Through promoting these values, our board enables itself to better relate to the community we pledge to support, and work towards the success our entire chapter.
          </Text>
      </Box>

      <Flex
        flexDir="row"
        flexWrap="wrap"
        justify='center'>
        {
          eboard.members.map((member) => {
            return (
              <GalleryBox
                key={member.id}
                name={member.name}
                position={member.position}
                image={member.image}
              />
            );
          })
        }
      </Flex>

    </main>
  );
}

export default Leadership;