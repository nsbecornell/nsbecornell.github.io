"use client";

import styles from "@/app/page.module.css";

// Chakra UI Components
import { Heading, Flex, Spacer, VStack } from '@chakra-ui/react';

// Custom Components
import SideContainer from '@/components/CorporateSideContainer'
import SponsorContainer from '@/components/SponsorContainer'
import CorporateForm from "@/components/CorporateForm";

// Sponsor Logos
import Corning from '@/images/sponsors/diamond-tier/corning.png'
import JaneStreet from '@/images/sponsors/gold-tier/jane-street.png'
import Sensata from '@/images/sponsors/gold-tier/sensata.png'
import Pepsi from '@/images/sponsors/gold-tier/pepsi.png'
import Accenture from '@/images/sponsors/gold-tier/accenture.png'
import CapitalOne from '@/images/sponsors/gold-tier/capital-one.png'
import Arcadis from '@/images/sponsors/gold-tier/arcadis logo.png'
import ClarkConstruction from '@/images/sponsors/gold-tier/clark.png'

const Corporate = () => {
  const headingStyle = {
    color: 'white',
    fontSize: 30
  }

  type Sponsor = {
    id: number,
    name: string,
    image: string,
    link: string
  }


  const diamondSponsors: Sponsor[] = [
    {
      id: 1,
      name: "Corning",
      image: Corning.src,
      link: "https://www.corning.com/worldwide/en.html"
    }
  ]


  const goldSponsors : Sponsor[] = [
    {
      id: 1,
      name: "Jane Street",
      image: JaneStreet.src,
      link: "https://www.janestreet.com/"
    },
    {
      id: 2,
      name: "Sensata",
      image: Sensata.src,
      link: "https://www.sensata.com/"
    },
    {
      id: 3,
      name: "Pepsi",
      image: Pepsi.src,
      link: "https://www.pepsico.com/"
    },
    {
      id: 4,
      name: "Accenture",
      image: Accenture.src,
      link: "https://www.accenture.com/us-en"
    },
    {
      id: 5,
      name: "Capital One",
      image: CapitalOne.src,
      link: "https://www.capitalone.com/"
    },
    {
      id: 6,
      name: "Arcadis",
      image: Arcadis.src,
      link: "https://www.arcadis.com/"
    },
    {
      id: 7,
      name: "Clark Construction",
      image: ClarkConstruction.src,
      link: "https://www.clarkconstruction.com/"
    }
  ]

  return (
    <main className={styles.main}>
      <Flex
        direction={
          {
            base: "column",
            md: "row",
          }
        }
        marginTop="1%"
      >
        <SideContainer />
        <Spacer/>
        <VStack>
          <Heading sx={headingStyle}>
            Our Sponsors
          </Heading>
          <SponsorContainer tier="diamond" sponsorList={diamondSponsors} />
          <SponsorContainer tier="gold" sponsorList={goldSponsors} />  
          <CorporateForm />    
        </VStack>
      </Flex>
      
    </main>
  )
}

export default Corporate;