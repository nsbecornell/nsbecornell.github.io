'use client';

// import {useState} from 'react'

// import {Image, Text, Box, FormControl, Heading, Input, VStack, Center, Container, UnorderedList, ListItem, Flex} from '@chakra-ui/react';

// function PointsContainer() {

//     const textStyling = {
//         color: "white",
//         fontSize: "17",
//         textIndent: "3%",
//         lineHeight: 1.8
//       };

//     const boxStyling = {
//     w: "80%",
//     bg: "#2C2C2C",
//     borderRadius: 22,
//     _hover: {
//         bg: "#3A3A3A",
//         transform: "scale(1.05)",
//         },
//     transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
//     paddingBottom: 3
//     }

//     const headingStyling = {
//         fontWeight: "bold",
//         color: "white",
//         fontSize: "30",
//         my: 6,
//         textAlign: 'center'
//       };

//     return (
//         <Container sx={boxStyling} alignContent='center' justifyContent='center'>
//             <Heading sx={headingStyling}>Point Look Up</Heading>
//             {/* <Flex bg='red'> */}
//             <FormControl isRequired alignContent='center'>
//                 <Input sx={{
//                             ...textStyling,
//                             "::placeholder": {
//                                 color: "white",
//                                 opacity: 0.6,
//                                 position: "relative",
//                                 left: "3%",
//                             },
//                             _hover: {
//                                 // bg: "#3A3A3A",
//                                 transform: "scale(1.05)",
//                                 },
//                                 transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
//                             }}
//                             type="text"
//                             id="netid"
//                             name="netid"
//                             placeholder="Enter Cornell netID"
//                             bg="#656565"
//                             borderWidth={0}
//                             borderRadius={6}
//                             padding="2%"
//                             variant="subtle"
//                             />
                            
//             </FormControl>  
//             {/* </Flex>       */}
//         </Container>
//     );
// }

// export default PointsContainer;


import {useState, useEffect, ChangeEvent, FormEvent} from 'react'

import {Text, FormControl, Heading, Input, Container,Button} from '@chakra-ui/react';

// function PointsContainer() {
//   const [pointsData, setPointsData] = useState([]);
// //   const [topThree, setTopThree] = useState([]);
//   const [pointsDisplay, setPointsDisplay] = useState('');
//   const [netidInput, setNetidInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const textStyling = {
//     color: "white",
//     fontSize: "17",
//     textIndent: "3%",
//     lineHeight: 1.8
//   };

//   const boxStyling = {
//     w: "80%",
//     bg: "#2C2C2C",
//     borderRadius: 22,
//     _hover: {
//       bg: "#3A3A3A",
//       transform: "scale(1.05)",
//     },
//     transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
//     paddingBottom: 3
//   };

//   const headingStyling = {
//     fontWeight: "bold",
//     color: "white",
//     fontSize: "30",
//     my: 6,
//     textAlign: 'center'
//   };

//   async function loadPoints() {
//     const apiKey = "AIzaSyBN2UN6x4LarJ8gY3CawcQr7V3gHjSRenk";
//     const spreadsheetId = "1XeOgI-GL3ZCD8aC8BAM0LvNUwKGzrEFr_jRaTOhh6xM";

//     const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?includeGridData=true&key=${apiKey}`;

//     setIsLoading(true);

//     try {
//       const options = {
//         method: "GET",
//         headers: {
//           Authorization: "949665169248-629v4nfpdn230dmncs4gecbkmgk6coag.apps.googleusercontent.com",
//         },
//       };

//       const response = await fetch(url, options);
//       const data = await response.json();
//       const points_list = data.sheets[0].data;
//       const row_data = points_list[0].rowData;

//       const processedPointsData = [];
//       for (const entry of row_data) {
//         const values = entry.values;
//         const netId = values[0]?.effectiveValue?.stringValue?.toLowerCase();
//         const points = values[1]?.effectiveValue?.numberValue;
//         if (points !== undefined && points !== null && points < 500)
//           processedPointsData.push({ netId, points });
//       }

//       // Sort the array based on the 'points' property in descending order
//       processedPointsData.sort((a, b) => b.points - a.points);

//       setPointsData(processedPointsData);

//       // Set top three points
//     //   const topThreeUsers = processedPointsData.slice(0, 3).map((user, index) => 
//     //     `${index + 1}. ${user.netId}: ${user.points} points`
//     //   );
//     //   setTopThree(topThreeUsers);
//     } catch (error) {
//       console.error("Error loading points:", error);
//       setPointsDisplay("Error loading points");
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   function getPoints(inputNetID: string) {
//     if (!inputNetID) {
//       setPointsDisplay("Enter a NetID");
//       return null;
//     }

//     const netid = inputNetID.toLowerCase();
//     const record = pointsData.find((entry) => entry.netId === netid);

//     if (record) {
//       setPointsDisplay(`Points: ${record.points}`);
//       return record.points;
//     }

//     setPointsDisplay("NetID not found");
//     return null;
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     getPoints(netidInput);
//   };

//   useEffect(() => {
//     loadPoints();
//   }, []);

interface PointsRecord {
    netId: string;
    points: number;
  }
  
  const PointsContainer = () => {
    // Define state with types
    const [pointsData, setPointsData] = useState<PointsRecord[]>([]);
    const [pointsDisplay, setPointsDisplay] = useState<string>('');
    const [netidInput, setNetidInput] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
  
    // Styling objects are fine as they are but can be typed for clarity
    const textStyling: React.CSSProperties = {
      color: "white",
      fontSize: "17",
      textIndent: "3%",
      lineHeight: 1.8
    };
  
    const boxStyling = {
      w: "80%",
      h: 'fit-content',
      bg: "#2C2C2C",
      borderRadius: 22,
      _hover: {
        bg: "#3A3A3A",
        transform: "scale(1.05)",
      },
      transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
      paddingBottom: 3
    };
  
    const headingStyling = {
      fontWeight: "bold",
      color: "white",
      fontSize: "30",
      my: 6,
      textAlign: 'center'
    };
  
    // Asynchronous function to load points
    async function loadPoints(): Promise<void> {
      const apiKey = "AIzaSyBN2UN6x4LarJ8gY3CawcQr7V3gHjSRenk";
      const spreadsheetId = "1XeOgI-GL3ZCD8aC8BAM0LvNUwKGzrEFr_jRaTOhh6xM";
  
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?includeGridData=true&key=${apiKey}`;
  
      setIsLoading(true);
  
      try {
        const options = {
          method: "GET",
          headers: {
            Authorization: "949665169248-629v4nfpdn230dmncs4gecbkmgk6coag.apps.googleusercontent.com",
          },
        };
  
        const response = await fetch(url, options);
        const data = await response.json();
        const points_list = data.sheets[0].data;
        const row_data = points_list[0].rowData;
  
        const processedPointsData: PointsRecord[] = [];
        for (const entry of row_data) {
          const values = entry.values;
          const netId = values[0]?.effectiveValue?.stringValue?.toLowerCase();
          const points = values[1]?.effectiveValue?.numberValue;
          if (points !== undefined && points !== null && points < 500)
            processedPointsData.push({ netId, points });
        }
  
        // Sort the array based on the 'points' property in descending order
        processedPointsData.sort((a, b) => b.points - a.points);
  
        setPointsData(processedPointsData);
  
      } catch (error) {
        console.error("Error loading points:", error);
        setPointsDisplay("Error loading points");
      } finally {
        setIsLoading(false);
      }
    }
  
    // Function to get points for a specific NetID
    function getPoints(inputNetID: string): number | null {
      if (!inputNetID) {
        setPointsDisplay("Enter a NetID");
        return null;
      }
  
      const netid = inputNetID.toLowerCase();
      const record = pointsData.find((entry) => entry.netId === netid);
  
      if (record) {
        setPointsDisplay(`Points: ${record.points}`);
        return record.points;
      }
  
      setPointsDisplay("NetID not found");
      return null;
    }
  
    // Function to handle form submission
    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      getPoints(netidInput);
      setNetidInput('');
    };
  
    // UseEffect to load points on initial render
    useEffect(() => {
      loadPoints();
    }, []);

  return (
    <Container sx={boxStyling} alignContent='center' justifyContent='center'>
      <Heading sx={headingStyling}>Point Look Up</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl 
            isRequired 
            alignContent='center' 
            // onSubmit={handleSubmit}
        >
            <Input 
            sx={{
                ...textStyling,
                "::placeholder": {
                color: "white",
                opacity: 0.6,
                position: "relative",
                left: "3%",
                },
                _hover: {
                transform: "scale(1.025)",
                },
                transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
            }}
            type="text"
            id="netid"
            name="netid"
            placeholder="Enter Cornell netID"
            bg="#656565"
            borderWidth={0}
            borderRadius={6}
            padding="2%"
            variant="subtle"
            value={netidInput}
            onChange={(e) => setNetidInput(e.target.value)}
            />
            {/* <Button 
            type="submit" 
            mt={3}
            bg="#656565"
            color="white"
            _hover={{
                bg: "#3A3A3A",
                transform: "scale(1.05)"
            }}
            >
            Look Up Points
            </Button> */}
        </FormControl>
      </form>

      {isLoading && <Text sx={{textStyling, textAlign: 'center', my: 2, color: 'white', fontWeight: 'bold'}}>Loading...</Text>}
      
      {pointsDisplay && (
        <Text sx={{...textStyling, textAlign: 'center', my: 2, fontWeight: "bold"}}>{pointsDisplay}</Text>
      )}

    </Container>
  );
}

export default PointsContainer;