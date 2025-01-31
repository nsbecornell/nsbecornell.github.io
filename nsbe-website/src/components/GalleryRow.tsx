// Chakra UI Components
import { Center, Flex, Heading, HStack } from '@chakra-ui/react'

// Custom Components
import GalleryBox from '@/components/GalleryBox'

function GalleryRow({member} : {member: {id: number, name: string, position: string, image: string}}) {
  return (
    <GalleryBox
            key={member.id}
            name={member.name}
            position={member.position}
            image={member.image}
          />
    // <Flex direction="column">
    //   <Center>
    //     <Flex direction='row' wrap='wrap' justifyContent='center'>
          
    //     </Flex>
    //   </Center>
    // </Flex>
  )
}

export default GalleryRow;