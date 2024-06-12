import {
  FormControl,
  FormLabel,
  Box,
  FormHelperText,
  Input,
  VStack,
  InputRightElement,
  IconButton,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showpass, setShowpass] = useState(false);
  const navigate = useNavigate();

  const handlePasswordVisibility = () => {
    setShowpass(!showpass);
  };

  const handleLogIn = () => {
    if (username === "admin" && password === "password") {
      localStorage.setItem("auth", "true");
      
      navigate("/orders"); //will change it to Home after creating home.jsx
      
    } else {
      alert("Invalid Username & Password ");
      
    }
  };



  return (
    <Box
      bgImage="url('/bg_img.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      height="100vh"
      width="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
      breakpoints={["0em", "30em", "48em", "62em", "80em", "96em"]} //ResponsiveNess
    >
      <Box
        bg="rgba(65, 171, 139, 0.3)" // Transparent background
        p={10}
        borderRadius={30}
        border="2px"
        borderColor="#201c3c"
        borderStyle="solid"
        color="black"
        w={500}
        h={400}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <VStack spacing={15}>
          {/* //Username */}
          <FormControl isRequired>
            <FormLabel fontSize={20}>Username</FormLabel>

            <Input
              type="text"
              bg={"#201c3c" ? "true" : "false"}
              textColor={"#13BFC6"}
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FormHelperText >We'll never share your Username.</FormHelperText>
          </FormControl>

          {/* //password */}
          <FormControl isRequired>
            <FormLabel fontSize={20}>Password</FormLabel>
            <InputGroup>
              <Input
                type={showpass ? "text" : "password"}
                bg={"#201c3c" ? "true" : "false"}
                textColor={"#13BFC6"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  h="1.75rem"
                  size="sm"
                  onClick={handlePasswordVisibility}
                  icon={password ? <ViewOffIcon /> : <ViewIcon />}
                />
              </InputRightElement>
            </InputGroup>
            <FormHelperText>We'll never share your Password.</FormHelperText>
          </FormControl>

          {/* //Login Button */}

          <Button onClick={handleLogIn} textColor={"#13BFC6"} bg={"#201c3c"}>
            Login
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

export default Login;
