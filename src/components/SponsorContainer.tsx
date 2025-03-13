// Chakra UI Imports
import { Link, Box, Image, Flex } from '@chakra-ui/react'
import { BorderStyle } from 'react-bootstrap-icons';

type SponsorTier = 'diamond' | 'gold' | 'platinum';

function SponsorBox( {tier, sponsorList}: {tier: SponsorTier; sponsorList: {id: number; name: string; image: string, link: string}[]} ) {
  const diamondStyling = {
    background: '#A3DEFF',
    border: '10px solid #2599DA',
  }

  const goldStyling = {
    background: "#FFE895",
    border: '10px solid #FFC700'
  }

  const boxStyling = {
    width: '80%',
    height: 'fit-content',
    borderRadius: 20,
    my: 5,
    ...(tier === 'diamond' ? diamondStyling : goldStyling),
    minHeight: 150,
    ":hover": {
      transform: "scale(1.05)",
    },
    transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out"
  }

  return (
    <Box
      sx={boxStyling}
    >
      <Flex
        flexDirection='row'
        flexWrap='wrap'
        justify='center'
        alignItems='center'
        height='100%'
      >
        {
          sponsorList.map((sponsor) => {
            return(
              <Link
                key={sponsor.id}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                >
                  <Image
                    key={sponsor.id}
                    src={sponsor.image}
                    alt={sponsor.name}
                    w={150}
                    mx={15}
                  />
              </Link>
            )
          })
        }
        
      </Flex>
    </Box>
  );
} 

export default SponsorBox;