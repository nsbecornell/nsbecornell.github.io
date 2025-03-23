"use client";

import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";


// Chakra UI Imports
import { Image, Center, Divider, Flex, VStack, Text, Link, HStack, useMediaQuery} from '@chakra-ui/react';

// Images and Icons
import NSBECULogo from '@/images/nsbe-cu logo.png';
import * as Icon from 'react-bootstrap-icons'; 

const Footer = () => {
  const textStyle = {
    color: "#8D8D8D",
    fontSize: {
      base: 15,
      md: 18
    },
    fontWeight: "bold",
  }

  const iconStyling = {
    ":hover": {
      transform: "scale(1.05)",
    },
    transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
  }

  const [basePath, setBasePath] = useState('');
  const [isLargerThanMd] = useMediaQuery("(min-width: 48em)"); // 768px breakpoint

  const iconSize = isLargerThanMd ? 50 : 35;

  const router = useRouter();

  useEffect(() => {
      import('../../next.config.mjs')
        .then((config) => {
          setBasePath(config.default.basePath || '');
        })
        .catch((err) => console.error("Error loading config:", err));
    }, []);

  return (
    <Center
      as="footer"
      marginTop={25}
    >
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems='center'
      >
        <HStack
          gap={6}
          justify='center'
          marginBottom={2.5}
        >
          <Image
            w={
              {
                base: "22%",
                md: "12%"
              }
            }
            src={NSBECULogo.src}
            onClick={() => router.push(`${basePath}/`)}
            cursor="pointer"
            fallbackSrc=""
            alt="Logo of Cornell University National Society of Black Engineers"
          />
          <VStack
            as="div"
          >
            <Text
              as="address"
              sx={textStyle}
              fontStyle="normal"
              maxWidth={180}
              whiteSpace="pre-line"
            >
              146 Olin Hall{"\n"}
              Cornell University{"\n"}
              Ithaca, NY 14853
            </Text>
          </VStack>

          <Divider
            orientation='vertical'
            height={70}
            borderColor="#8D8D8D"
          />

          <HStack
            spacing="15px"
          >
            <Link
              sx={iconStyling}
              href="https://www.instagram.com/nsbe_cu/?hl=en"
            >
              <Icon.Instagram
                color="#8D8D8D"
                height={iconSize}
              />
            </Link>

            <Link
              sx={iconStyling}
              href="https://www.linkedin.com/company/cu-nsbe/posts/?feedView=all"
            >
              <Icon.Linkedin
                color="#8D8D8D"
                height={iconSize}
              />
            </Link>
          </HStack>
        </HStack>
        <Text
          sx={textStyle}
          textAlign={
            {
              base: "center",
              md: "inherit"
            }
          }
        >
          © 2024 Cornell University National Society of Black Engineers. All rights reserved.
        </Text>
      </Flex>
    </Center>
  );
}

export default Footer;