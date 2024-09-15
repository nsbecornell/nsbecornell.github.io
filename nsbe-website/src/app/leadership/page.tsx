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
import Eboard from '@/images/NSBE EBoard.jpg';
import Erhunmwunse from '@/images/EEgaphona.jpg'
import Ethan from '@/images/ESarpong.jpg'
import Adigun from '@/images/AOlusola.jpg'
import Ore from '@/images/OOlaore.jpg'

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

  type committee = {
    name: string,
    members: member[]
  }

  const executiveBoard: committee[] = [
    {
      name: "Presidential Suite",
      members: [
        {
          id: 1,
          name: "Chimdi Anude",
          position: "President",
          image: ""
        },
        {
          id: 2,
          name: "Mohammed Kane",
          position: "Internal Vice President",
          image: ""
        },
        {
          id: 3,
          name: "Adigun Olusola",
          position: "External Co-Vice President",
          image: Adigun.src
        },
        {
          id: 4,
          name: "Kayla Stephenson",
          position: "External Co-Vice President",
          image: ""
        }
    ]},
    {
      name: "Events Committee",
      members: [
        {
          id: 1,
          name: "Rayanu Adam",
          position: "Programs Chair",
          image: ""
        },
        {
          id: 2,
          name: "Wesley DeCosta",
          position: "Conference Planning Chair",
          image: ""
        },
        {
          id: 3,
          name: "Reggie Harris",
          position: "Membership Chair",
          image: ""
        },
        // {
        //   id: 4,
        //   name: "",
        //   position: "",
        //   image: ""
        // },
      ]
    },
    {
      name: "Professional Development Committee",
      members: [
        {
          id: 1,
          name: "Adigun Olusola",
          position: "External Co-Vice President",
          image: ""
        },
        {
          id: 2,
          name: "Kayla Stephenson",
          position: "External Co-Vice President",
          image: ""
        },
        {
          id: 3,
          name: "Emma Brown",
          position: "Secretary",
          image: ""
        },
        {
          id: 4,
          name: "Tenny George",
          position: "Treasurer",
          image: ""
        },
      ]
    },
    {
      name: "Community Service Committee",
      members: [
        {
          id: 1,
          name: "Davis Adams",
          position: "Pre-Collegiate Initiatives Chair",
          image: ""
        },
        {
          id: 2,
          name: "Mukami Gichoya",
          position: "Pre-Collegiate Initiative Chair ",
          image: ""
        },
        {
          id: 3,
          name: "Maguette Diop",
          position: "Conference Planning Chair",
          image: ""
        },
        // {
        //   id: 4,
        //   name: "",
        //   position: "",
        //   image: ""
        // }
      ]
    },
    {
      name: "Academic Excellence Committee",
      members: [
        {
          id: 1,
          name: "Skai Nzeuton",
          position: "Academic Excellence Co-Chair",
          image: ""
        },
        {
          id: 2,
          name: "Ivie Osagie",
          position: "Academic Excellence Co-Chair",
          image: ""
        },
        {
          id: 3,
          name: "Promise Ekpo",
          position: "Graduate Representative",
          image: ""
        },
        {
          id: 4,
          name: "Jamison Taylor",
          position: "Senator/Parliamentarian",
          image: ""
        }
      ]
    },
    {
      name: "Public Relations Committee",
      members: [
        {
          id: 1,
          name: "Hope Best",
          position: "Publicity Chair",
          image: ""
        },
        {
          id: 2,
          name: "Alexis Sherman",
          position: "Historian/Senator",
          image: ""
        },
        {
          id: 3,
          name: "Anthony Todd",
          position: "Alumni Relations Chair",
          image: ""
        },
        {
          id: 4,
          name: "Chimdi Ejiogu",
          position: "Telecommunications Chair",
          image: ""
        },
        {
          id: 5,
          name: "Lucy Bazezy",
          position: "Publicity Chair",
          image: ""
        },
        // {
        //   id: 6,
        //   name: "Mohammed Kane",
        //   position: "Internal Vice President",
        //   image: ""
        // }
      ]
    },
    // {
    //   name: "First-Year Representatives",
    //   members: [
    //     {
    //       id: 1,
    //       name: "",
    //       position: "",
    //       image: ""
    //     },
    //     {
    //       id: 2,
    //       name: "",
    //       position: "",
    //       image: ""
    //     },
    //     {
    //       id: 3,
    //       name: "",
    //       position: "",
    //       image: ""
    //     },
    //     {
    //       id: 4,
    //       name: "",
    //       position: "",
    //       image: ""
    //     }
    //   ]
    // }
  ]

  return (
    <main className={styles.main}>
      <Center>
        <Image borderRadius={25} w={1248} h={675} objectFit="cover" src={Eboard.src} fallbackSrc="" alt="Group photo of the chapter's executive board of 2023-2024"/>
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
      <VStack>
        <VStack>
          {
            executiveBoard.map((committee) => {
              return (
                <GalleryRow 
                  key={committee.name}
                  title={committee.name}
                  members={committee.members}
                />
              );
            })
          }
        </VStack>
      </VStack>

    </main>
  );
}

export default Leadership;