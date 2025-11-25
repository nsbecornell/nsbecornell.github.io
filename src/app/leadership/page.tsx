import styles from "@/app/page.module.css";

// Chakra UI Imports
import {Image, Text, Box, Heading, VStack, Center, UnorderedList, ListItem, Flex} from '@chakra-ui/react';

// Images
import eboardPhoto from '@/images/eboard/2025-2026/wholeEboard.jpg'
import TennyGeorge from '@/images/eboard/2025-2026/tenny_george.jpg'
import IvieOsagie from '@/images/eboard/2025-2026/ivie.jpg'
import LucyBazezy from '@/images/eboard/2025-2026/lucy_bazezy.jpeg'
import MouhammadDia from '@/images/eboard/2025-2026/mouhammad_dia.jpg'
import NathanielBanjo from '@/images/eboard/2024-2025/Nathaniel Banjo.jpg'
import YodaheMaaza from '@/images/eboard/2025-2026/yodahe_maaza.jpg'
import MaguetteDiop from '@/images/eboard/2025-2026/maguette_diop.jpg'
import WesleyDeCosta from '@/images/eboard/2024-2025/Wesley DeCosta.jpg'
import DavisAdams from '@/images/eboard/2024-2025/Davis Adams.jpg'
import RayanuAdam from '@/images/eboard/2025-2026/rayanu.jpg'
import ReggieHarris from '@/images/eboard/2025-2026/reggie_harris.jpg'
import OliviaMurphy from '@/images/eboard/2025-2026/olivia.jpg'
import OliviaTolliver from '@/images/eboard/2025-2026/olivia_t.jpg'
import ModupeOgunmekan from '@/images/eboard/2025-2026/modupe.jpg'
import MariamaBarry from '@/images/eboard/2025-2026/mariama.jpg'
import ElomEskender from '@/images/eboard/2025-2026/elom.jpg'
import LeticiaNhuale from '@/images/eboard/2025-2026/leticia.jpg'
import KayaBeckles from '@/images/eboard/2025-2026/kaya_b.jpg'
import MaliqBarnes from '@/images/eboard/2025-2026/maliq_barnes.jpg'
import RichloveNkansah from '@/images/eboard/2025-2026/richlove.jpg'
import ShaylaReid from '@/images/eboard/2025-2026/shayla.jpg'
import WunmiAkingbola from '@/images/eboard/2025-2026/wunmi.jpg'
import JoelleIyasele from '@/images/eboard/2025-2026/joelle_iyasele.jpg'
import TaylorBoykeDarbouze from '@/images/eboard/2025-2026/taylor_.jpg'
import JoannaSaintPierre from '@/images/eboard/2025-2026/joanna.jpg'



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
        name: "Maguette Diop",
        position: "President",
        image: MaguetteDiop.src
      },
      {
        id: 2,
        name: "Rayanu Adam",
        position: "Internal Vice President",
        image: RayanuAdam.src
      },
      {
        id: 3,
        name: "Wesley Decosta",
        position: "External Co-Vice President",
        image: WesleyDeCosta.src
      },
      {
        id: 4,
        name: "Ivie Osagie",
        position: "External Co-Vice President",
        image: IvieOsagie.src
      },
      {
        id: 5,
        name: "Davis Adams",
        position: "Conference Planning Co-Chair",
        image: DavisAdams.src
      },
      {
        id: 6,
        name: "Maliq Barnes",
        position: "Junior Treasurer",
        image: MaliqBarnes.src
      },
      {
        id: 7,
        name: "Nathanial Banjo",
        position: "Academic Excellence Co-Chair",
        image: NathanielBanjo.src
      },
      {
        id: 8,
        name: "Lucy Bazezy",
        position: "Telecommunications Chair",
        image: LucyBazezy.src
      },
      {
        id: 9,
        name: "Taylor Bokye-Darbouze",
        position: "Publicity Co-Chair",
        image: TaylorBoykeDarbouze.src
      },
      {
        id: 10,
        name: "Kaya Beckles",
        position: "PCI Co-Chair",
        image: KayaBeckles.src
      },
      {
        id: 11,
        name: "Mouhammad Dia",
        position: "Programs Co-Chair",
        image: MouhammadDia.src
      },
      {
        id: 12,
        name: "Ivie Osagie",
        position: "Academic Excellence Co-Chair",
        image: IvieOsagie.src
      },
      {
        id: 13,
        name: "Tenny George",
        position: "Senior Treasurer",
        image: TennyGeorge.src
      },
      {
        id: 14,
        name: "Reggie Harris",
        position: "Programs Co-Chair",
        image: ReggieHarris.src
      },
      {
        id: 15,
        name: "Joelle Iyasele",
        position: "Historian & Senator",
        image: JoelleIyasele.src
      },
       {
        id: 16,
        name: "Yodahe Maaza",
        position: "Publicity Co-Chair",
        image: YodaheMaaza.src
      },
       {
        id: 17,
        name: "Olivia Murphy",
        position: "Graduate Representative",
        image: OliviaMurphy.src
      },
       {
        id: 18,
        name: "Richlove Nkansh",
        position: "Secretary",
        image: RichloveNkansah.src
      },
       {
        id: 19,
        name: "Modupe Ogunmekan",
        position: "Scademic Excellence Co-Chair",
        image: ModupeOgunmekan.src
      },
      {
        id: 20,
        name: "Shayla Reid",
        position: "Senator",
        image: ShaylaReid.src
      },
      {
        id: 21,
        name: "Joanna Saint-Pierre",
        position: "Conference Planning Co-Chair",
        image: JoannaSaintPierre.src
      },
      {
        id: 22,
        name: "Olivia Tolliver",
        position: "Membership Chair",
        image: OliviaTolliver.src
      },
      {
        id: 23,
        name: "Wunmi Akingbola",
        position: "PCI Co-Chair",
        image: WunmiAkingbola.src
      },
      {
        id: 24,
        name: "Mariama Barry",
        position: "Freshman Representative",
        image: MariamaBarry.src
      },
      {
        id: 25,
        name: "Elom Eskender",
        position: "Freshman Representative",
        image: ElomEskender.src
      },
      {
        id: 26,
        name: "Leticia Nhuale",
        position: "Freshman Representative",
        image: LeticiaNhuale.src
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

      <Box as="section" my={8} maxWidth={{ base: "90%", md: "80%" }} 
    mx="auto"
    px={{ base: 4, md: 0 }} >
          <Heading sx={headingStyling}>The Executive Board</Heading>
          <Text sx={textStyle}>
            The executive board of our NSBE chapter is the mover behind all that our chapter does. From planning events to promote the academic success of our chapter&apos;s general body members to coordinating with sponsors to ensure the professional development of our engineers &mdash; our board works tirelessly to promote the mission and vision of the National Society of Black Engineers. Under the guidance of our president, <b>Chimdi Anude</b>, the executive board also works to promote throughout the campus the chapter&apos;s own core values: Transparency, Dedication, and Support.
          </Text>
    
        

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