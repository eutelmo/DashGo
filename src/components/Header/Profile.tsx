import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileDate?: boolean;
}

export function Profile({showProfileDate= true}: ProfileProps) {
  return(
    <Flex align="center" ml="4">
      { showProfileDate && (
        <Box mr="4" textAlign="right">
        <Text>Telmo J.Moura</Text>
          <Text color="gray.300" fontSize="small">
            telmop1999@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Telmo J. Moura" src="https://github.com/eutelmo.png"/>
    </Flex>
  );
}