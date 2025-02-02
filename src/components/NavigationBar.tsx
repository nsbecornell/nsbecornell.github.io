'use client';

import { Image, Flex, Link, Spacer, HStack} from '@chakra-ui/react';
import NSBECULogo from '@/images/nsbe-cu logo.png'
import {useState, useEffect} from 'react';

const NavigationBar = () => {

  const linkStyles = {
    color: "white",
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "bold",
    ':hover': {
      color: "gray",
      transform: "scale(1.05)",
      textDecoration: "none",
    },
    transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
    minWidth: "fit-content"
  }

  const [basePath, setBasePath] = useState('');

  useEffect(() => {
    import('../../next.config.mjs')
      .then((config) => {
        setBasePath(config.default.basePath || '');
      })
      .catch((err) => console.error("Error loading config:", err));
  }, []);

  return (
      <Flex as="nav" gap={10} my={10} mx="3.25%">
        {/* Consider fallback image*/}
        <Link href={`${basePath}/`}>
          <Image w="15%" minW='100px' src={NSBECULogo.src} alt="Logo of Cornell University National Society of Black Engineers"/>
        </Link>
        <Spacer />

        <HStack spacing={14}>
          <Link sx={linkStyles} href={`${basePath}/about-us`}>About Us</Link>
          <Link sx={linkStyles} href={`${basePath}/leadership`}>Leadership</Link>
          {/* <Link sx={linkStyles} href=''>Events</Link> */}
          {/* <Link sx={linkStyles} href=''>Points</Link> */}
          {/* <Link sx={linkStyles} href=''>Gallery</Link> */}
          <Link sx={linkStyles} href={`${basePath}/getting-involved/alumni`}>Alumni</Link>
          <Link sx={linkStyles} href={`${basePath}/getting-involved/students`}>Students</Link>
          <Link sx={linkStyles} href={`${basePath}/getting-involved/corporate`}>Corporate</Link>
        </HStack>
      </Flex>
  );
}

export default NavigationBar;