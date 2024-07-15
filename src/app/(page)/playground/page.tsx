import Badge from "@/app/components/common/badge/badge";
import Button from "@/app/components/common/button";
import Wrapper from "@/app/components/common/wrapper";
import Footer from "@/app/components/display/footer";
import { Container } from "@/app/components/layout/container";
import React from "react";

function Page() {
  return (
    <Container flex flexDirection="row">
      <Wrapper
        title="Descritpion du milésime"
        content="Les vignes du Château Margaux sont travaillées avec le plus grand soin, à la main. Les cépages typiques du Médoc sont travaillés avec une majorité de cabernet sauvignon. Les vignes utilisées dans le grand vin sont âgées de 20 ans au minimum. Une équipe de 200 vendangeurs est nécessaire pour assurer la récolte chaque année. "
      />
    </Container>
  );
}

export default Page;
