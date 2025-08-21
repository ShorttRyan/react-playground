import React from "react";
import { Box } from "@mui/material";
import { useMyContext } from "../contexts/my-context";

const RootComponent: React.FC = () => {
  const myContext = useMyContext();
  console.log(myContext);
  return <Box>Root Component</Box>;
};

export default RootComponent;
