import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { Logo } from './Logo';
import { NotificationsNav } from './Notification';
import { Profile } from './Profile';
import { Seach } from './SearchBox';

export default function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return(
    <Flex 
      as="header" 
      w="100%" 
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
     
        { !isWideVersion && (
          <IconButton
            arial-label="Open navigation"
            icon={<Icon as={RiMenuLine} />}
            fontSize="24"
            variant="unstyled"
            onClick={onOpen}
            mr="2"
          >
            
          </IconButton>
        )}
        <Logo />

        { isWideVersion && <Seach /> }

        <NotificationsNav />
        
        <Profile showProfileDate={isWideVersion}/>
    </Flex>
    
  );
};
