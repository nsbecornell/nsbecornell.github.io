import styles from "@/app/page.module.css";

import {Image, Text, Box, Heading, VStack, Center, UnorderedList, ListItem, Flex} from '@chakra-ui/react';

import PointsContainer from "@/components/PointsContainer";
import PointsSideContainer from "@/components/PointsSideContainer";

function Points() {
    return (
        <Flex mx="2%">
            <PointsSideContainer />
            <PointsContainer />
        </Flex>
        
    );
}

export default Points;