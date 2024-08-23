import styles from "@/app/page.module.css";

// Chakra UI Imports
import {Image, Text, Box, Heading, VStack, HStack, Center} from '@chakra-ui/react';

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
        <Image w={1248} h={675} objectFit="cover" src={Eboard.src} fallbackSrc="" alt="Group photo of the chapter's executive board of 2023-2024"/>
      </Center>
      <Box as="section">
          <Heading color='white' fontSize={30}>The Executive Board</Heading>
          <Text sx={textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum eget lacus gravida lacinia. Suspendisse viverra tellus a justo finibus, eu blandit purus egestas. Aliquam porttitor volutpat tellus eget scelerisque. In lobortis quis nisi vel malesuada. Quisque lectus est, suscipit ut sapien eu, pharetra accumsan mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In sagittis justo pulvinar urna posuere posuere. Integer dui magna, feugiat eu arcu et, placerat feugiat turpis. Praesent lacinia enim vel pretium cursus. Integer sodales turpis nibh, vehicula elementum magna iaculis id. Phasellus sapien libero, imperdiet sed faucibus vitae, feugiat vel nulla. Integer eleifend orci sit amet enim dignissim, vitae pharetra neque cursus.</Text>
          <Text sx={textStyle}>Nullam commodo sapien quis malesuada posuere. Nunc laoreet ipsum risus, id sagittis tortor blandit nec. Vivamus sollicitudin nisl sed quam lacinia molestie. Etiam mauris arcu, sodales dapibus maximus quis, bibendum at dui. Phasellus vel ante eu lacus ultricies pellentesque sed non sapien. Maecenas placerat ut tortor vitae laoreet. Praesent sagittis orci turpis, et pulvinar ipsum auctor a. Fusce id consectetur turpis, a tempus nulla. Cras auctor tincidunt velit, lobortis dapibus tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur molestie iaculis orci rhoncus imperdiet. Vestibulum ac nunc mattis, rutrum odio sed, suscipit arcu.</Text>
      </Box>
      <VStack>
        <VStack spacing={30}>
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