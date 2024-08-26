import { Image, Flex, Link, Spacer, HStack} from '@chakra-ui/react';
import NSBECULogo from '@/images/nsbe-cu logo.png'

const NavigationBar = () => {

  const linkStyles = {
    color: "white",
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "bold",
    ':hover': {
      color: "gray"
    }
  }

  return (
      <Flex as="nav" gap={10} my={15} mx={30}>
        {/* Consider fallback image*/}
        <Link href='/'>
          <Image w={180} src={NSBECULogo.src} alt="Logo of Cornell University National Society of Black Engineers"/>
        </Link>
        <Spacer />

        <HStack spacing={32}>
          <Link sx={linkStyles} href='/about'>About</Link>
          <Link sx={linkStyles} href='/leadership'>Leadership</Link>
          {/* <Link sx={linkStyles} href=''>Events</Link> */}
          {/* <Link sx={linkStyles} href=''>Points</Link> */}
          {/* <Link sx={linkStyles} href=''>Gallery</Link> */}
          <Link sx={linkStyles} href='/getting-involved/students'>Getting Involved</Link>
        </HStack>
      </Flex>
  );
}

export default NavigationBar;