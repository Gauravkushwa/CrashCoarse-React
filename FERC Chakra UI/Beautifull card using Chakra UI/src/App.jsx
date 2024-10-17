import './App.css'
import { Avatar, AvatarBadge, Box, Button, Flex, Stack, Text, Tag, TagLabel, Divider } from '@chakra-ui/react';

function App() {

  return (
    <>
      {/* <Stack direction='row' spacing={6} size='232x633'>
        <Avatar src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR-SRhRUH7PULn0IN_REZkVfGPy3wnZ6B0WTKT_pUhpvx4oRJ8h">
          <AvatarBadge boxSize='1.25em' bg='green.500'  />
        </Avatar>
      </Stack> */
      }
       <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      boxShadow="sm"
      p={6}
      textAlign="center"
    >
      {/* Avatar Section */}
      <Flex justify="center" mb={4} position="relative">
      <Avatar  size="1x1" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR-SRhRUH7PULn0IN_REZkVfGPy3wnZ6B0WTKT_pUhpvx4oRJ8h">
          <AvatarBadge boxSize='3.25em' bg='green.500'  />
        </Avatar>
        {/* Online Status Indicator */}
        <Box
         
        />
      </Flex>

      {/* Name and Username */}
      <Text fontWeight="bold" fontSize="lg" color="gray.800">
        Lindsey James
      </Text>
      <Text fontSize="sm" color="gray.500" mb={3}>
        @lindsey_jam3s
      </Text>

      {/* Description */}
      <Text fontSize="md" color="gray.600" mb={5}>
        Actress, musician, songwriter and artist. PM for work inquiries or{' '}
        <Text as="span" color="blue.400" fontWeight="bold">
          #tag
        </Text>{' '}
        me in your posts.
      </Text>

      <Divider borderColor="gray.200" mb={5} />

      {/* Tags */}
      <Stack direction="row" justify="center" spacing={2} mb={5}>
        <Tag size="lg"  colorScheme="gray">
          <TagLabel>#ART</TagLabel>
        </Tag>
        <Tag size="lg" colorScheme="gray">
          <TagLabel>#PHOTOGRAPHY</TagLabel>
        </Tag>
        <Tag size="lg"  colorScheme="gray">
          <TagLabel>#MUSIC</TagLabel>
        </Tag>
      </Stack>

      {/* Action Buttons */}
      <Flex justify="space-between">
        <Button colorScheme="gray" variant="outline" flex="1" mr={2}>
          Message
        </Button>
        <Button colorScheme="blue" flex="1" ml={2}>
          Follow
        </Button>
      </Flex>
    </Box>
  
    </>
  )
}

export default App
