'use client';

import styles from "@/app/page.module.css";
import { Box, Image, Heading, Grid, Button, Menu, MenuButton, MenuList, MenuItem, Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react'; 

// Image Import
import NSBEImage from '@/images/NSBE EBoard.jpg';
import gamenight from '@/images/event_images/gamenight/gamenight.jpeg';
import gamenight2 from '@/images/event_images/gamenight/gamenight_2.jpeg';
import gamenight3 from '@/images/event_images/gamenight/gamenight_3.jpeg';
import NSBE101 from '@/images/event_images/NSBE101/NSBE101.jpg';
import NSBE1012 from '@/images/event_images/NSBE101/NSBE101_2.jpg';
import NSBE1013 from '@/images/event_images/NSBE101/NSBE101_3.jpg';
import recap from '@/images/event_images/recapinternship/recapinternship.jpg';
import recap2 from '@/images/event_images/recapinternship/recapinternship_2.jpg';
import mixer from '@/images/event_images/majormixer/majormixer.jpeg';
import mixer2 from '@/images/event_images/majormixer/majormixer_2.jpeg';
import mixer3 from '@/images/event_images/majormixer/majormixer_3.jpeg';
import sarmy from '@/images/event_images/salvationarmy/salvationarmy.jpeg';
import sarmy2 from '@/images/event_images/salvationarmy/salvationarmy_2.jpeg';
import sarmy3 from '@/images/event_images/salvationarmy/salvationarmy_3.jpeg';
import sensata from '@/images/event_images/sensata/sensatasession.jpeg';
import sensata2 from '@/images/event_images/sensata/sensatasession_2.jpeg';
import sensata3 from '@/images/event_images/sensata/sensatasession_3.jpeg';
import auxwars from '@/images/event_images/auxwars/auxwars.jpeg';
import auxwars2 from '@/images/event_images/auxwars/auxwars_2.jpeg';
import auxwars3 from '@/images/event_images/auxwars/auxwars_3.jpeg';
import familyfeud from '@/images/event_images/familyfeud/familyfeud.jpeg';
import familyfeud2 from '@/images/event_images/familyfeud/familyfeud_2.jpeg';
import familyfeud3 from '@/images/event_images/familyfeud/familyfeud_3.jpeg';
import superbowl from '@/images/event_images/superbowl/superbowl.jpeg';
import superbowl2 from '@/images/event_images/superbowl/superbowl_2.jpeg';
import icecream from '@/images/event_images/icecream/icecream.jpeg';
import icecream2 from '@/images/event_images/icecream/icecream_2.jpeg';
import icecream3 from '@/images/event_images/icecream/icecream_3.jpeg';
import icecream4 from '@/images/event_images/icecream/icecream_4.jpeg';
import icecream5 from '@/images/event_images/icecream/icecream_5.jpeg';
import fzc from '@/images/event_images/fzc/fzc.jpg';
import clubfest from '@/images/event_images/clubfest/clubfest.jpeg';
import clubfest2 from '@/images/event_images/clubfest/clubfest_2.jpeg';
import clubfest3 from '@/images/event_images/clubfest/clubfest_3.jpeg';
import bbq from '@/images/event_images/bbq/bbq.jpg';
import bbq2 from '@/images/event_images/bbq/bbq_2.jpg';
import bbq3 from '@/images/event_images/bbq/bbq_3.jpg';
import bbq4 from '@/images/event_images/bbq/bbq_4.jpg';
import bbq5 from '@/images/event_images/bbq/bbq_5.jpg';
import assistivetech from '@/images/event_images/assistivetech/assistivetech.jpeg';
import assistivetech2 from '@/images/event_images/assistivetech/assistivetech_2.jpeg';
import assistivetech3 from '@/images/event_images/assistivetech/assistivetech_3.jpeg';
import artandcraft from '@/images/event_images/artandcraft/artandcraft.jpeg';
import artandcraft2 from '@/images/event_images/artandcraft/artandcraft_2.jpeg';
import accenture from '@/images/event_images/accenture/accenture.jpeg';
import accenture2 from '@/images/event_images/accenture/accenture_2.jpeg';
import chemtutor from '@/images/event_images/chemtutor/chemtutor.jpeg';
import chemtutor2 from '@/images/event_images/chemtutor/chemtutor_2.jpeg';
import startingstrong from '@/images/event_images/startingstrong/startingstrong.jpeg';
import freshmen from '@/images/event_images/freshman/freshman.jpeg';
import freshmen2 from '@/images/event_images/freshman/freshman_2.jpeg';
import freshmen3 from '@/images/event_images/freshman/freshman_3.jpeg';
import hottakes from '@/images/event_images/hottakes/hottakes_2.jpeg';
import hottakes2 from '@/images/event_images/hottakes/hottakes.jpeg';
import frc from '@/images/event_images/frc/frc.jpeg';
import frc2 from '@/images/event_images/frc/frc_2.jpeg';
import frc3 from '@/images/event_images/frc/frc_3.jpg';
import bearstuffing from '@/images/event_images/bearstuffing/bearstuffing.jpeg';
import ethics from '@/images/event_images/ethics/ethics.jpeg';
import ethics2 from '@/images/event_images/ethics/ethics_2.jpeg';
import corning from '@/images/event_images/corning/corning.jpeg';
import corning2 from '@/images/event_images/corning/corning_2.jpeg';
import corning3 from '@/images/event_images/corning/corning_3.jpeg';
import research from '@/images/event_images/researchkickoff/researchkickoff.jpeg';
import research2 from '@/images/event_images/researchkickoff/researchkickoff_2.jpeg';
import bball from '@/images/event_images/bballtourney/bballtourney.jpeg';
import bball2 from '@/images/event_images/bballtourney/bballtourney_2.jpeg';
import bball3 from '@/images/event_images/bballtourney/bballtourney_3.jpeg';
import bball4 from '@/images/event_images/bballtourney/bballtourney_4.jpeg';
import nationals from '@/images/event_images/nationals/nationals.jpeg';
import nationals2 from '@/images/event_images/nationals/nationals_2.jpeg';
import nationals3 from '@/images/event_images/nationals/nationals_3.jpeg';
import nationals4 from '@/images/event_images/nationals/nationals_4.jpeg';
import nationals5 from '@/images/event_images/nationals/nationals_5.jpeg';
import nationals6 from '@/images/event_images/nationals/nationals_6.jpeg';
import bingo from '@/images/event_images/bingo/bingo.jpeg';
import bingo2 from '@/images/event_images/bingo/bingo_2.jpeg'

// Define types for our components
interface EventSlideshowProps {
  images: string[];
  alt?: string[];
}

interface EventData {
  title: string;
  images: string[];
  alt?: string[];
}

// Arrow icons as SVG components
const LeftArrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const RightArrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EventSlideshow: React.FC<EventSlideshowProps> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto advance slides every 5 seconds
  /*useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);*/

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  // Only show navigation if there's more than one image
  const showNavigation = images.length > 1;

  return (
    <Box position="relative" w="100%" h="280px">
      <Image
        w="100%"
        h="100%"
        objectFit="cover"
        src={images[currentIndex]}
        alt={(alt && alt[currentIndex]) || "Event image"}
        borderRadius="lg"
        transition="opacity 0.3s ease-in-out"
      />
      
      {/* Custom arrow navigation buttons - only shown if multiple images */}
      {showNavigation && (
        <Flex 
          position="absolute" 
          w="100%" 
          justify="space-between" 
          top="50%" 
          transform="translateY(-50%)"
          px={2}
        >
          <Button
            aria-label="Previous image"
            onClick={goToPrevious}
            bg="rgba(0,0,0,0.5)"
            color="white"
            _hover={{ bg: "rgba(0,0,0,0.7)" }}
            size="sm"
            borderRadius="full"
            p={2}
            minW="auto"
            h="auto"
          >
            <LeftArrow />
          </Button>
          <Button
            aria-label="Next image"
            onClick={goToNext}
            bg="rgba(0,0,0,0.5)"
            color="white"
            _hover={{ bg: "rgba(0,0,0,0.7)" }}
            size="sm"
            borderRadius="full"
            p={2}
            minW="auto"
            h="auto"
          >
            <RightArrow />
          </Button>
        </Flex>
      )}
      
      {/* Dots indicator - only shown if multiple images */}
      {showNavigation && (
        <Flex 
          position="absolute" 
          bottom="2" 
          w="100%" 
          justify="center" 
          gap={1}
          zIndex="1"
        >
          {images.map((_, index) => (
            <Box
              key={index}
              w="2"
              h="2"
              borderRadius="full"
              bg={index === currentIndex ? "white" : "rgba(255,255,255,0.5)"}
              cursor="pointer"
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </Flex>
      )}
    </Box>
  );
};
const Gallery: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState("Spring '25");

  const springEvents: EventData[] = [
    { 
      title: "Aux Wars", 
      images: [auxwars.src, auxwars2.src, auxwars3.src],  // Add more images here when available
      alt: ["The first image displays the host of the Aux Wars event presenting the winner with an Amazon echo speaker as the prize.", 
        "The second image in the slider shows a group of members sitting around a table and smiling looking towards the camaera.", 
        "The last image in this slider displays another group of NSBE members at the Aux Wars event sitting around a table while they eat. The members are looking at the camera and smiling."
      ]
    },
    { 
      title: "Family Feud", 
      images: [familyfeud.src, familyfeud2.src, familyfeud3.src],  // Add more images here when available
      alt: ["This image displays several NSBE members in a lecture hall. Two groups of members are at the front participating in the Family Feud event with the answers from each group projected on a board behind them.", 
      "The second image in this slider displays members participating in the family feud event at the front of a lecture hall with a board behind them showing a 20 second timer. A host and two other members are standing facing each other.", 
    'The last image in this slider displays nsbe members sitting in the lecture hall watching the participants compete. Two members are looking towards the camera ans smiling.']
    },
    { 
      title: "Super Bowl Watchparty", 
      images: [superbowl.src, superbowl2.src],  // Add more images here when available
      alt: ["This is an image of a group of NSBE members standing and conversing in a lecture hall", 
      "The last image in this slider displays students sitting in a lecture hall watching a large screen in front of them showing an advertisement during the superbowl."]
    },
    { 
      title: "Corning Conference Prep", 
      images: [corning.src, corning2.src, corning3.src],  // Add more images here when available
      alt: ["The first image in this slider is of a mixed group of NSBE members and Corning employees standing behind a table with \"Corning\" written on it.", 
      "The next image in this slider displays students students sitting and conversing with Corning employees one on one. There is a screen projected in the background showing tips and tricks for how to succeed at a career fair.",
      "The last image displays a table with a blue table cloth that reads \"CORNING\". On the table are Corning branded merchandise including pens and notepads. Next to the table is a poster that shows corning engineers working."]
    },
    { 
      title: "Engineering Ethics", 
      images: [ethics.src, ethics2.src],  // Add more images here when available
      alt: ["The fist image in this slider displays a group of NSBE members standing and smiling at the camera with a professor in a classroom.",
        "The last image shows a group of members sitting down watching the professor present at the front of the room. There is a slide displayed on the screen next to the professor."
      ]
    },
    { 
      title: "Research Kickoff", 
      images: [research.src, research2.src],  // Add more images here when available
      alt: ["The first image displays a group of students watching a presentation from a researcher in a lecture hall. The students are sitting facing the front of the room and the researcher is describing a slide titled \"Who Am I\".",
        "The last image in this slider shows 5 students and researchers sitting facing a group of other students watching them introduce themselves. Displayed on a board behing the presenters is a slide with headshots and a brief description of each one."
      ]
    },
    { 
      title: "Bingo", 
      images: [bingo.src, bingo2.src],  // Add more images here when available
      alt: ["The first image in this slider shows a stack of bingo cards and chalk that were used during the event next to an iPad.",
        "The last image in this slider shows two NSBE members standing and conversing with each other. There is food on a table next to them and a third members is eating."
      ]
    },
    { 
      title: "Nationals 2025", 
      images: [nationals.src, nationals2.src, nationals3.src, nationals4.src, nationals5.src, nationals6.src],  // Add more images here when available
      alt: ["The first image in this slider displayes the NSBE chapter in formal attire standing and smiling looking at the camera at the NSBE TORCH Awards.",
        "The second image in this slider displays 3 NSBE members and one parent smiling and looking at the camera.",
        "The third image in this slider displays 9 Cornell Alumni who were NSBE members wearing semi formal attire.",
        "The fourth image in this slider shows a group of 5 NSBE members in the city at night smiling and facing the camera.",
        "The last image in this slider shows a group of NSBE membes and Cornell Engineering staff sitting at a circular table in a room eating together. There are members, staff, and alumni in the background."
      ]
    },
    {
      title: "Unity Basketball Tournament",
      images: [bball2.src, bball.src, bball3.src, bball4.src],
      alt: ["This is an image of Cornell NSBE and URMC members playing basketball. The ball is in the air under the basket and two players are reaching for it.",
        "The second image in this slider displays 4 people on a court playing basket ball. A player wearing red is dribbling the ball down the court.",
        "The third image in this slider displays two players on the court. One player wearing a Cornell sweatshirt is dribbling the ball down the court the other stands in front.",
        "The last image in this slider shows a NSBE member sitting at a table selling concessions on the court."
      ]

    }
  ];
 
  const fallEvents: EventData[] = [
    { 
      title: "NSBE 101", 
      images: [NSBE101.src, NSBE1012.src, NSBE1013.src],  // Add more images here when available
      alt: ["This image displays a group of NSBE students at the NSBE 101 event sitting down and watching a presentation. Five members are in front of the group projecting the presentation on a screen.",
      "The second image in this slider displays a group of six members posing together smiling with their arms around each other.", 
    "The last image in the slider for the NSBE 101 event displays a large group of members indoors holding papers for a competition. The winner raises her paper in the air enthusiastically."]
    },
    { 
      title: "Game Night", 
      images: [gamenight.src, gamenight2.src, gamenight3.src],  // Add more images here when available
      alt: ["This is an image from NSBE's elevator game night event displaying members seated around a table playing poker.",
      "The second image in this slider displays a group of members sitting in chairs in a circle while one is standing in the middle. They are playing the game Mafia.", 
    "The last image in this slider displays a group of NSBE members seated around a table playing a card game with 7 spoons layed out on the table. Three members are standing and spectating the game."]
    },
    { 
      title: "Recapping the Internship", 
      images: [recap.src, recap2.src],  // Add more images here when available
      alt: ["This is an image from NSBE's recapping the internship event displaying a group of 6 members looking at a crowd off camera with a large screen behind them showing an icebreaker question that reads 'what was your favorite corporate catchphrase'",
      "The second image in this slider shows the 6 panelists seated at the front of a lecture hall while the host is at the desk behind them. They are all facing the crowd in the seats."]
    },
    { 
      title: "Major Mixer", 
      images: [mixer.src, mixer2.src, mixer3.src],  // Add more images here when available
      alt: ["This is an image from NSBE's major mixer event displaying a group of members smiling and looking at the camera. Several are seated at a table and some are standing with hand signs that represent their major.",
      "The second image in this slider displays 3 students seated at a table all looking at a paper that contains a flowchart for the courses they should take each semester in the Operations Research in Engineering major.", 
    "Th elast image in the slider shows a group of 9 members sitting at a table with laptops out. They are all looking towards the camera and smiling."]
    },
    { 
      title: "Salvation Army September", 
      images: [sarmy.src, sarmy2.src, sarmy3.src],  // Add more images here when available
      alt: ["This is an image from NSBE's salvation army event showing a three members smiling and looking at the camera behind a table with ACT prep books and various toiletries. They are standing in front of a shelf filled with non perishable food items.", 
      "The second image in this slider displays two members organizing a variety of canned goods on a shelf.", 
    "The last image in the slider for the Salvation Army volunteering event shows 4 members posing and looking towards the camera."]
    },
    { 
      title: "Sensata Info Session", 
      images: [sensata.src, sensata2.src, sensata3.src],  // Add more images here when available
      alt: ["This is an image from NSBE's spacex information session displaying a group of seven representatives from spacex standing at the front of the room with a presentation on the board behind them speaking to a crowd of NSBE members off camera. The board is showing different models of programs and spaceships developed by the spacex company.", 
      "The second image shows a mix of NSBE members and other students at Cornell sitting in a lecture hall paying attention to the presentation from the spacex representatives. Representatives are presenting from behind the camera.", 
    "The last image in the slider shows 3 NSBE members seated at a table with a spacex representative having a conversation."]
    },
    { 
      title: "Ice Cream Social", 
      images: [icecream.src, icecream2.src, icecream3.src, icecream4.src, icecream5.src],  // Add more images here when available
      alt: ["The first image in this slider displays a group of 5 students sitting at a table looking towards the camera.",
        "The second image shows a large group of NSBE members standing outside Cornell's Dairy Bar in the sun on a set of stairs smiling and looking at the camera.",
        "The third image in this slider shows 4 male students inside the Dairy Bar standing and smiling at the camera.",
        "The fourth image shows a grou of students inside the Dairy Bar conversing with each other. The photo is candid, some students are sitting while others are standing.",
        "The last image displays 4 NSBE executive board members inside the building standing and looking at the camera."
      ]
    },
    { 
      title: "Fall Zone Conference", 
      images: [fzc.src],  // Add more images here when available
      alt: ["This is an image of NSBE members at Rochester Institute of Technology in business casual/formal attire on a set of red stairs standing and looking towards the camera."]
    },
    { 
      title: "Club Fest", 
      images: [clubfest.src, clubfest2.src, clubfest3.src],  // Add more images here when available
      alt: ["The first image in this slider displays a poster board describing what Cornell NSBE does and why. The center of the board is titled \"Paving the Way for Black Engineers in STEM. Be Part of the Movement. On the table in front of the board are candies arranged to form the word \"NSBE\".",
        "The next image in this slider is of 5 members standing in front of the table with the board and candies looking towards the camera and smiling.",
        "The last image in this slider shows a stach of brochures titled \"NSBE AT CORNELL\" on a table with various typed of candy surrounding it."
      ]
    },
    { 
      title: "Welcome Back BBQ", 
      images: [bbq.src, bbq2.src, bbq3.src, bbq4.src, bbq5.src],  // Add more images here when available
      alt: ["This is an image of 5 students outside on the grass in front of a building playing spikeball.",
        "This is an image of 3 members smiling looking at the camera raising one finger in the air.",
        "This is an image of a large group of students on the grass outside arranged performing a group dance.",
        "This is an image of a group of 5 NSBE members standing shoulder to shoulder outside smiling and looking at the camera.",
        "This is an image of a large group of students on the grass outside in front of a building."
      ]
    },
    { 
      title: "NSBE X Cornell Assistive Technologies", 
      images: [assistivetech.src, assistivetech2.src, assistivetech3.src],  // Add more images here when available
      alt: ["The first image in this slider displays 3 female nsbe members smiling at the camera holding a stuffed animal.",
        "The next image in this slider shows a modified stuffed animal for children with buttons on the paws to play music.",
        "The last image in the slider is of 5 members standing and smiling at the camera holding the modifies stuffed animal from the previous image."
      ]
    },
    { 
      title: "Arts and Crafts", 
      images: [artandcraft.src, artandcraft2.src],  // Add more images here when available
      alt: ["The first image is of a NSBE members sitting and coloring in a drawing at a desk.",
        "The last picture is of a small group of members, some sitting and some standing, drawing and coloring."
      ]
    },
    { 
      title: "Accenture Info Session", 
      images: [accenture.src, accenture2.src],  // Add more images here when available
      alt: ["The first image in this slider displays a group of members standing with Accenture representatives smiling and looking at the cameras.",
        "The next image is of members serving food that was catered."
      ]
    },
    { 
      title: "Starting Off Strong", 
      images: [startingstrong.src],  // Add more images here when available
      alt: ["This is an image of members in a lecture hall studying together."]
    },
    { 
      title: "Chem Tutoring", 
      images: [chemtutor.src, chemtutor2.src],  // Add more images here when available
      alt: ["This image shows a student working on Chemistry homework with a tutor looking over her shoulder.",
        "The last image in this slider shows a group of students on laptops working on Chemistry homework with tutors."
      ]
    },
    { 
      title: "Freshmen Scavenger Hunt", 
      images: [freshmen.src, freshmen2.src, freshmen3.src],  // Add more images here when available
      alt: ["The first image in this slider is of 2 female members making a structure with uno cards.",
        "The second image in this slider shows 2 freshman reading riddles to try and figure out the code to a padlock.", 
        "The last image in the slider is of 4 freshman standing in front of a chalkboard with \"Let the Hunt Begin\" witten on it. They are holding locks and putting one finger in the air."
      ]
    },
    { 
      title: "Hot Takes", 
      images: [hottakes.src, hottakes2.src],  // Add more images here when available
      alt: ["The first image in this slider is of NSBE members in a room. 5 are standing and the rest are sitting. The ones standing are having a conversation.",
        "The next image in this slider is of a larger group of members standing and facing the board at the front of the room."
      ]
    },
    { 
      title: "Fall Regional Conference", 
      images: [frc.src, frc2.src, frc3.src],  // Add more images here when available
      alt: ["The first image in this slider is of the CU NSBE chapter members wearing formal attire in a hotel lobby at the convention center.",
        "This next image is of our two senators at the conference center looking at the camera, smiling, and holding up books titled \" 7 Habits of Highly Effective People\".",
        "The last image in this slider displays a mixed group of NSBE members across the region having a conversatino with a presenter in a room."
      ]
    },
    { 
      title: "Bear Stuffing", 
      images: [bearstuffing.src],  // Add more images here when available
      alt: ["This is an image of 3 members sitting at a table looking at the camera and smiling. They are holding animals that they stuffed."]
    }
  ];

  const events = selectedSemester === "Spring '25" ? springEvents : fallEvents;

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
              onClick={() => setSelectedSemester("Spring '25")}
              bg="#2D2D2D"
              color="white"
              _hover={{ bg: "#3D3D3D" }}
            >
              Spring &apos;25
            </MenuItem>
            <MenuItem 
              onClick={() => setSelectedSemester("Fall '24")}
              bg="#2D2D2D"
              color="white"
              _hover={{ bg: "#3D3D3D" }}
            >
              Fall &apos;24
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Flex
        flexDir="row"
        flexWrap="wrap"
        justify='center'
        gap={10}
      >
        {events.map((event, index) => (
          <Box 
            key={index} 
            bg="#2D2D2D" 
            borderRadius="xl" 
            p={6}
            w={
              {
                base: 400,
                md: 400
              }
            }
            _hover={
              {
                bg: "#3A3A3A",
                transform: "scale(1.05)",
              }
            }
            transition="transform 0.3s ease-in-out, background-color 0.3s ease-in-out"
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
              noOfLines={1}
              wordBreak="break-all"
            >
              {event.title}
            </Heading>
            <EventSlideshow 
              images={event.images} 
              alt={event.alt} 
            />
            
          </Box>
        ))}
      </Flex>
    </main>
  );
};

export default Gallery;