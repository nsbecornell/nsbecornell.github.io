// 'use client';

// import { Image, Flex, Link, Spacer, HStack} from '@chakra-ui/react';
// import NSBECULogo from '@/images/nsbe-cu logo.png'
// import {useState, useEffect} from 'react';

// const NavigationBar = () => {

//   const linkStyles = {
//     color: "white",
//     textDecoration: "none",
//     fontSize: "20px",
//     fontWeight: "bold",
//     ':hover': {
//       color: "gray",
//       transform: "scale(1.05)",
//       textDecoration: "none",
//     },
//     transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
//     minWidth: "fit-content"
//   }

//   const [basePath, setBasePath] = useState('');

//   useEffect(() => {
//     import('../../next.config.mjs')
//       .then((config) => {
//         setBasePath(config.default.basePath || '');
//       })
//       .catch((err) => console.error("Error loading config:", err));
//   }, []);

//   return (
//       <Flex as="nav" gap={10} my={10} mx="3.25%">
//         {/* Consider fallback image*/}
//         <Link href={`${basePath}/`}>
//           <Image w="15%" minW='100px' src={NSBECULogo.src} alt="Logo of Cornell University National Society of Black Engineers"/>
//         </Link>
//         <Spacer />

//         <HStack spacing={14}>
//           <Link sx={linkStyles} href={`${basePath}/about-us`}>About Us</Link>
//           <Link sx={linkStyles} href={`${basePath}/leadership`}>Leadership</Link>
//           {/* <Link sx={linkStyles} href=''>Events</Link> */}
//           <Link sx={linkStyles} href={`${basePath}/points`}>Points</Link>
//           {/* <Link sx={linkStyles} href=''>Gallery</Link> */}
//           <Link sx={linkStyles} href={`${basePath}/getting-involved/alumni`}>Alumni</Link>
//           <Link sx={linkStyles} href={`${basePath}/getting-involved/students`}>Students</Link>
//           <Link sx={linkStyles} href={`${basePath}/getting-involved/corporate`}>Corporate</Link>
//         </HStack>
//       </Flex>
//   );
// }

// export default NavigationBar;

'use client';

import { Image, Flex, Link, Spacer, HStack, IconButton, Menu, MenuButton, MenuList, MenuItem, useBreakpointValue } from '@chakra-ui/react';
import NSBECULogo from '@/images/nsbe-cu logo.png';
import { useState, useEffect } from 'react';

import HamburgerIcon from './HamburgerIcon';

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
  };

  const menuItemStyles = {
    fontSize: "18px",
    fontWeight: "bold",
    _hover: {
      bg: "#3A3A3A",
      textDecoration: "none"
    },
  };

  const [basePath, setBasePath] = useState('');
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  useEffect(() => {
    import('../../next.config.mjs')
      .then((config) => {
        setBasePath(config.default.basePath || '');
      })
      .catch((err) => console.error("Error loading config:", err));
  }, []);

  const navLinks = [
    { name: 'About Us', path: '/about-us' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Points', path: '/points' },
    { name: 'Alumni', path: '/getting-involved/alumni' },
    { name: 'Students', path: '/getting-involved/students' },
    { name: 'Corporate', path: '/getting-involved/corporate' }
  ];

  return (
    <Flex as="nav" gap={{ base: 2, md: 10 }} my={10} mx={{ base: "5%", md: "3.25%" }} align="center">
      <Link href={`${basePath}/`}>
        <Image w={{ base: "75px", md: "15%" }} minW={{ base: "75px", md: "100px" }} src={NSBECULogo.src} alt="Logo of Cornell University National Society of Black Engineers" />
      </Link>
      <Spacer />

      {isDesktop ? (
        <HStack spacing={{ md: 8, lg: 14 }}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              sx={linkStyles} 
              href={`${basePath}${link.path}`}
              fontSize={{ md: "18px", lg: "20px" }}
            >
              {link.name}
            </Link>
          ))}
        </HStack>
      ) : (
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Navigation Menu"
            // icon={Hamburger.src}
            icon={<HamburgerIcon />}
            variant="outline"
            color="white"
            size="lg"
            _hover={{ bg: "#3A3A3A" }}
            _active={{ bg: "#4A4A4A" }}
          />
          <MenuList bg="#2C2C2C" borderColor="#4A4A4A">
            {navLinks.map((link) => (
              <MenuItem 
                key={link.path} 
                as={Link}
                href={`${basePath}${link.path}`}
                sx={menuItemStyles}
                bg="#2C2C2C"
                color="white"
                _focus={{ bg: "#3A3A3A" }}
              >
                {link.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      )}
    </Flex>
  );
};

export default NavigationBar;