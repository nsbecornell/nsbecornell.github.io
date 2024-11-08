// Chakra UI Components
import { Center, Flex, Heading, HStack } from '@chakra-ui/react'

// Custom Components
import GalleryBox from '@/components/GalleryBox'

function GalleryRow( props : {title : string, members: {id: number, name: string, position: string, image: string}[]}) {
  return (
    <Flex direction="column">
      <Center>
        <Heading as="h3" color="white" fontSize={25}>{props.title}</Heading>
      </Center>
      <Center>
      <Flex direction='row' wrap='wrap' justifyContent='center'>
        {
          props.members.map((member) => {
            return(
              <GalleryBox
                key={member.id}
                name={member.name}
                position={member.position}
                image={member.image}
              />
            );
          })
        }
      </Flex>
      </Center>
    </Flex>
  )
}

export default GalleryRow;