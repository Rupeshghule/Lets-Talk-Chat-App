import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="rgba(255, 255, 255, 0.2)"
        boxShadow="0px 0px 10px black"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="0px"
        color="white"
        fontWeight="900"
        textShadow='1px 1px 8px black'

      >
        <Text fontSize="4xl" fontFamily="Work sans">
          Let's Talk
        </Text>
      </Box>
      <Box bg="rgba(255, 255, 255, 0.2)"
        boxShadow="0px 0px 10px black"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="0px"
        textShadow='1px 1px 8px white'>
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em" >
            <Tab color="white" textShadow='2px 2px 8px black'
            >Login</Tab>
            <Tab color="white" textShadow='2px 2px 8px black'
            >Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
