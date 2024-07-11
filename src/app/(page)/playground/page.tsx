import Button from "@/app/components/common/button";
import Footer from "@/app/components/display/footer";
import { Container } from "@/app/components/layout/container";
import React from "react";

function Page() {
  return (
    <Container flex flexDirection="row">
      <Container flex flexDirection="column">
        <Button text="hello" type="button" tier="primary" large />
        <Button text="hello" type="button" tier="primary" />
      </Container>
      <Container flex flexDirection="column">
        <Button text="hello" type="button" tier="secondary" large />
        <Button text="hello" type="button" tier="secondary" />
      </Container>
      <Container flex flexDirection="column">
        <Button text="hello" type="button" tier="tertiary" large />
        <Button text="hello" type="button" tier="tertiary" />
      </Container>

      <Footer />
    </Container>
  );
}

export default Page;
