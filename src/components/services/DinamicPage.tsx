import React from "react";
import Container from "../Container";
import Box from "../Box";
import { services } from "@/constant/data";
function DinamicPage({ data }: any) {
  return (
    <main>
      <Container>
        <Box className=" bg-lightBackground">
          {services.map((i) => i.id == data && <p>{i.titel}</p>)}
        </Box>
      </Container>
      <button onClick={() => console.log(data)}>22clink</button>
    </main>
  );
}

export default DinamicPage;
