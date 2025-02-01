import styles from "@/app/page.module.css";

// Chakra UI Imports
import {Image, Text, Box, Heading, VStack, Center, UnorderedList, ListItem, Flex} from '@chakra-ui/react';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

// Images
// import Eboard from '@/images/eboard/2024-2025/2024-2025-eboard.JPG';
import Erhunmwunse from '@/images/EEgaphona.jpg'
import Ethan from '@/images/ESarpong.jpg'
import Adigun from '@/images/AOlusola.jpg'
import Ore from '@/images/OOlaore.jpg'

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
import GalleryRow from '@/components/GalleryRow'
import { StaticImageData } from "next/image";

const Leadership = () => {
  const textStyle = {
    color: "white",
    fontSize: "17",
    textIndent: "3%"
  };

  const buttonStyling = {
    
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
        <Image borderRadius={25} w={1248} h={675} objectFit="cover" src={eboardPhoto.src} fallbackSrc="" alt="Group photo of the chapter's executive board of 2023-2024"/>
      </Center>
      <Box as="section">
          <Heading color='white' fontSize={30}>The Executive Board</Heading>
          <Text sx={textStyle}>
            The executive board of our NSBE chapter is the mover behind all that our chapter does. From planning events to promote the academic success of our chapter&apos;s general body members to coordinating with sponsors to ensure the professional development of our black engineers &mdash; our board works tirelessly to promote the mission and vision of the National Society of Black Engineers. Under the guidance of our president, the executive board also works to promote throughout the campus the chapter&apos;s own core values: Transparency, Dedication, and Support.
          </Text>
          <Center>
            <Flex direction='column'>
              <Text textAlign='center' color='white' fontWeight='bold' my={0}>Transparency</Text>
              <Text sx={textStyle} maxW={650}>
                We prioritize open and honest communication within our community. By being transparent, we build trust and ensure that all members are informed and aligned with our goals. Reliability is key; we hold ourselves accountable to each other and to the mission of our organization.
              </Text>
            </Flex>
          </Center>
          <Center>
            <Flex direction='column'>
              <Text textAlign='center' color='white' fontWeight='bold' my={0}>Dedication</Text>
              <Text sx={textStyle} maxW={650}>
                We are unwavering in our commitment to the mission of the National Society of Black Engineers. Our dedication drives us to excel academically, succeed professionally, and make a positive impact in our communities. Our belief in this mission inspires us in our efforts to uplift this generation of Black Engineers.
              </Text>
            </Flex>
          </Center>
          <Center>
            <Flex direction='column'>
              <Text textAlign='center' color='white' fontWeight='bold' my={0}>Support</Text>
              <Text sx={textStyle} maxW={650}>
                Our strength lies in our unity and our ability to support oen another. We forster an environment where members can lean one each other for guidance, encouragement, and resources. Together, we create a network of mentorship and collaboration that propels us all forward.
              </Text>
            </Flex>
          </Center>
          <Text sx={textStyle}>
            Through promoting these values, our board enables itself to better relate to the community we pledge to support, and work towards the success our entire chapter.
          </Text>
      </Box>
      <Flex flexDir="row" flexWrap="wrap" justify='center'>
        

      
      {/* <VStack> */}
        {/* <VStack> */}
          {
            eboard.members.map((member) => {
              return (
                <GalleryRow
                  key={member.id}
                  member={member}
                />
              );
            })
          }
        {/* </VStack> */}
      {/* </VStack> */}
      </Flex>

    </main>
  );
}

export default Leadership;