'use client';

import styles from "@/app/page.module.css";
import { Box, Image, Heading, Grid, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { useState } from 'react'; 

// Image Import
import NSBEImage from '@/images/NSBE EBoard.jpg';
import elev from '@/images/event_images/elevatorpitch.jpeg';

const Gallery = () => {
  const [selectedSemester, setSelectedSemester] = useState("Spring '24");

  const springEvents = [
    { title: "Spring Event Title", img: NSBEImage.src },
    { title: "Spring Event Title", img: NSBEImage.src },
    { title: "Spring Event Title", img: NSBEImage.src },
    { title: "Spring Event Title", img: NSBEImage.src },
    { title: "Spring Event Title", img: NSBEImage.src },
    { title: "Spring Event Title", img: NSBEImage.src }
  ];

  const fallEvents = [
    { title: "NSBE 101", img: NSBEImage.src },
    { title: "Elevator Pitch", img: elev.src },
    { title: "Recapping the Internship", img: NSBEImage.src },
    { title: "Major Mixer", img: NSBEImage.src },
    { title: "Salvation Army September", img: NSBEImage.src },
    { title: "SpaceX Info Session", img: NSBEImage.src }
  ];

  const events = selectedSemester === "Spring '24" ? springEvents : fallEvents;

  return (
    <main className={styles.main}>
      <Box position="relative" w="140px" mb={10}>
        <Menu>
          <MenuButton
            as={Button}
            w="100%"
            bg="#2D2D2D"
            color="white"
            _hover={{ bg: "#3D3D3D" }}
            rightIcon={<Box as="span" ml={2}>▼</Box>}
            fontSize="lg"
            h="45px"
            borderRadius="md"
          >
            {selectedSemester}
          </MenuButton>
          <MenuList bg="#2D2D2D" borderColor="#3D3D3D">
            <MenuItem 
              onClick={() => setSelectedSemester("Spring '24")}
              bg="#2D2D2D"
              color="white"
              _hover={{ bg: "#3D3D3D" }}
            >
              Spring '24
            </MenuItem>
            <MenuItem 
              onClick={() => setSelectedSemester("Fall '24")}
              bg="#2D2D2D"
              color="white"
              _hover={{ bg: "#3D3D3D" }}
            >
              Fall '24
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Grid templateColumns="repeat(3, 1fr)" gap={8} w="100%" px={4}>
        {events.map((event, index) => (
          <Box 
            key={index} 
            bg="#2D2D2D" 
            borderRadius="xl" 
            p={6}
          >
            <Heading 
              size="xl" 
              color="white" 
              fontWeight="600"
              textAlign="center" 
              mb={4}
              fontSize="28px"
              letterSpacing="0.5px"
              fontFamily="Inter, sans-serif"
            >
              {event.title}
            </Heading>
            <Box
              w="100%"
              h="280px"
              bg="#E5E5E5"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                w="100%"
                h="100%"
                objectFit="cover"
                src={event.img}
                alt={`Event ${index + 1}`}
              />
            </Box>
          </Box>
        ))}
      </Grid>
    </main>
  );
};

export default Gallery;