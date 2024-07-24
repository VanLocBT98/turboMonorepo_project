import MouseBlob from "@/components/atoms/MouseBlob";
import DisplayLottie from "@/components/molecules/DisplayLottie";
import React from "react";
import * as S from "./styles";

export interface ISectionContactProps {
  contact: { icon: React.ReactNode; link: string; key: string }[];
}

const SectionContact: React.FC<ISectionContactProps> = ({ contact }) => {
  return (
    <S.SecContactWrap>
      <S.SecContactTitle variant="h3" color="white">
        Contact
      </S.SecContactTitle>
      <S.SecContactList>
        {contact.map((item) => (
          <MouseBlob borderWidth={4} radius={8} key={item.link}>
            <S.SecContactLink href={item.key + item.link}>
              {item.icon}
              {item.link}
            </S.SecContactLink>
          </MouseBlob>
        ))}
      </S.SecContactList>
      <DisplayLottie animationPath="/lottie/contact.json" />
    </S.SecContactWrap>
  );
};

export default SectionContact;
