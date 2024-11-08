// Chakra UI Components
import { Flex, Image, Center } from '@chakra-ui/react'

function ImageContainer(props: {src: string, alt: string, containerWidth: number, containerHeight: number, imageWidth: number, imageHeight: number, color?: string}) {
  const boxStyling = {
    bg:  props.color ? props.color : "#2C2C2C",
    w: props.containerWidth,
    h: props.containerHeight,
    borderRadius: 25,
    my: 15
  };

  const imageStyling = {
    w: props.imageWidth,
    h: props.imageHeight
  }

  return (
    <Flex sx={boxStyling} justify="center">
      <Center>
        <Image sx={imageStyling} src={props.src} alt={props.alt} />
      </Center>
    </Flex>
  );
}

export default ImageContainer;