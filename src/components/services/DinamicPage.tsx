'use client'
import React, { useState } from "react";
import Container from "../Container";
import Box from "../Box";
import { services } from "@/constant/data";
import BoxHeadding from "../BoxHeadding";
import Services from "../Services";
function DinamicPage({ data }: any) {
  return (
    <main>
      <Container>
        <Box className=" bg-lightBackground">

          {services.map((i) => i.id == data && (
            <div key={i.id}>
              <BoxHeadding headding={i.titel}/>
              <p>{i.detail}</p>
            </div>
          ))}
        </Box>
        <Box className={'bg-lightBackground mt-10'}>
          <Services/>
        </Box>
      </Container>
    </main>
  );
}

export default DinamicPage;
