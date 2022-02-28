import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-s.jpg"
        leftBtnText="Customer Order"
        rightBtnText="Existing Investory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-x.jpg"
        leftBtnText="Customer Order"
        rightBtnText="Existing Investory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-3.jpg"
        leftBtnText="Customer Order"
        rightBtnText="Existing Investory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-y.jpg"
        leftBtnText="Customer Order"
        rightBtnText="Existing Investory"
      />

      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImage="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />

      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImage="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />

      <Section
        title="Accessories"
        description=""
        backgroundImage="accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
