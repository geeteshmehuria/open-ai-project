import { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authLinLout, setName } from "../redux/authSlice";
// import { url } from "../assets/Extra";

const Login = () => {
  const dispatch = useDispatch();
  //   const auth = useSelector((state) => state.auth.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`http://localhost:8080/users/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("name", response.data.name);
        await Promise.all([
          dispatch(authLinLout(true)),
          dispatch(setName(response.data.name)),
        ]);
        setModalMessage("Login successful");
        setShowModal(true);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      setModalMessage("Please register yourself");
      setShowModal(true);
      console.error("Error:", error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    if (modalMessage === "Login successful") {
      navigate("/");
    }
  };

  return (
    <Flex
      color="black"
      minH="89.7vh"
      alignItems="center"
      justifyContent="center"
      // marginTop="-70px"
      backgroundImage={
        "radial-gradient(circle at center center, rgba(33,33,33,0),rgb(33,33,33)),repeating-linear-gradient(135deg, rgb(33,33,33) 0px, rgb(33,33,33) 1px,transparent 1px, transparent 4px),repeating-linear-gradient(45deg, rgb(56,56,56) 0px, rgb(56,56,56) 5px,transparent 5px, transparent 6px),linear-gradient(90deg, rgb(33,33,33),rgb(33,33,33))"
      }
    >
      <Box
        p={8}
        width={{ base: "80%", sm: "80%", md: "60%", lg: "40%" }}
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        className="glass"
        color={"white"}
      >
        <Box textAlign="center" mb={4}>
          <h1 style={{ fontSize: "40px", fontWeight: "700" }}>Login</h1>
        </Box>
        <form onSubmit={handleSubmit}>
          <FormControl id="email" mb={4}>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" mb={6}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button width="full" type="submit" colorScheme="teal">
            Log In
          </Button>
        </form>
      </Box>

      {/* Modal */}
      <Modal isOpen={showModal} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login Status</ModalHeader>
          <ModalBody>{modalMessage}</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Login;
