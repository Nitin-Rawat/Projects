
import React from "react";
import { BeatLoader } from "react-spinners";
import { Box } from "@chakra-ui/react";

const Orders = () => {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <BeatLoader color="green" size={15} />
    </Box>
  );
};

export default Orders;
