import styles from "@/app/page.module.css";

// Chakra UI Imports
import {Image, Text, Box, Container, Heading} from '@chakra-ui/react';

// Images
import Eboard from '@/images/NSBE EBoard.jpg';

const Leadership = () => {
  const textStyle = {
    color: "white",
    fontSize: "17",
  };


  return (
    <main className={styles.main}>
      <Image w={1248} h={675} objectFit="cover" src={Eboard.src} fallbackSrc="" alt="Group photo of the chapter's executive board of 2023-2024"/>
      <Box as="section">
          <Heading color='white'>The Executive Board</Heading>
          <Text sx={textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum eget lacus gravida lacinia. Suspendisse viverra tellus a justo finibus, eu blandit purus egestas. Aliquam porttitor volutpat tellus eget scelerisque. In lobortis quis nisi vel malesuada. Quisque lectus est, suscipit ut sapien eu, pharetra accumsan mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In sagittis justo pulvinar urna posuere posuere. Integer dui magna, feugiat eu arcu et, placerat feugiat turpis. Praesent lacinia enim vel pretium cursus. Integer sodales turpis nibh, vehicula elementum magna iaculis id. Phasellus sapien libero, imperdiet sed faucibus vitae, feugiat vel nulla. Integer eleifend orci sit amet enim dignissim, vitae pharetra neque cursus.</Text>
          <Text sx={textStyle}>Nullam commodo sapien quis malesuada posuere. Nunc laoreet ipsum risus, id sagittis tortor blandit nec. Vivamus sollicitudin nisl sed quam lacinia molestie. Etiam mauris arcu, sodales dapibus maximus quis, bibendum at dui. Phasellus vel ante eu lacus ultricies pellentesque sed non sapien. Maecenas placerat ut tortor vitae laoreet. Praesent sagittis orci turpis, et pulvinar ipsum auctor a. Fusce id consectetur turpis, a tempus nulla. Cras auctor tincidunt velit, lobortis dapibus tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur molestie iaculis orci rhoncus imperdiet. Vestibulum ac nunc mattis, rutrum odio sed, suscipit arcu.</Text>
      </Box>
    </main>
  );
}

export default Leadership;