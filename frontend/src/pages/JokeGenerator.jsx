import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
// background-image: radial-gradient(circle at center center, rgba(33,33,33,0),rgb(33,33,33)),repeating-linear-gradient(135deg, rgb(33,33,33) 0px, rgb(33,33,33) 1px,transparent 1px, transparent 4px),repeating-linear-gradient(45deg, rgb(56,56,56) 0px, rgb(56,56,56) 5px,transparent 5px, transparent 6px),linear-gradient(90deg, rgb(33,33,33),rgb(33,33,33));

const JokeGenerator = () => {
  const [jokes, setJokes] = useState("");

  const heandleSearch = async() => {
    // const res= await axios.post
  };
  return (
    <>
      <Box
        minH="89.7vh"
        w={"100%"}
        padding={"2rem"}
        backgroundImage={
          "radial-gradient(circle at center center, rgba(33,33,33,0),rgb(33,33,33)),repeating-linear-gradient(135deg, rgb(33,33,33) 0px, rgb(33,33,33) 1px,transparent 1px, transparent 4px),repeating-linear-gradient(45deg, rgb(56,56,56) 0px, rgb(56,56,56) 5px,transparent 5px, transparent 6px),linear-gradient(90deg, rgb(33,33,33),rgb(33,33,33))"
        }
      >
        <Flex w={"40%"} m={"auto"} justifyContent={"center"} gap={3}>
          <Input
            type="text"
            placeholder="Search Jokes"
            value={jokes}
            onChange={(e) => setJokes(e.target.value)}
          />
          <Button onClick={heandleSearch}>Generate</Button>
        </Flex>
      </Box>
    </>
  );
};

export default JokeGenerator;
