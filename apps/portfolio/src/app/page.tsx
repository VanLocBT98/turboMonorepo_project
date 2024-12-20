import { HeaderSectionEnum } from "@/common/enums";
import { InfoMocks } from "@/common/mocks";
import SectionSummary from "@/components/organisms/Section-Summary";
import SectionContact from "@/components/organisms/SectionContact";
import SectionExperience from "@/components/organisms/SectionExperience";
import SectionInfo from "@/components/organisms/SectionInfo";
import SectionProject from "@/components/organisms/SectionProject";
import SectionSkills from "@/components/organisms/SectionSkills";
import SectionUI from "@/components/templates/section";
import { Container } from "@mui/material";
import { pick } from "lodash";
export default function Home() {
  const sections = [
    {
      key: "info",
      id: HeaderSectionEnum.Home,
      component: (
        <>
          <SectionInfo {...pick(InfoMocks, "name", "role")} />
          <SectionSummary
            {...pick(InfoMocks, "summary", "resume", "socials")}
          />
        </>
      ),
    },
    {
      key: "skills",
      id: HeaderSectionEnum.Skills,
      component: <SectionSkills {...pick(InfoMocks, "techStacks")} />,
    },
    {
      key: "experiences",
      id: HeaderSectionEnum.Experiences,
      component: <SectionExperience {...pick(InfoMocks, "experiences")} />,
    },
    {
      key: "projects",
      id: HeaderSectionEnum.Projects,
      component: (
        <SectionProject {...pick(InfoMocks, "projects", "moreLink")} />
      ),
    },
    {
      key: "contact",
      id: HeaderSectionEnum.Contact,
      component: <SectionContact {...pick(InfoMocks, "contact")} />,
    },
  ];
  return (
    <>
      <Container maxWidth="lg">
        {sections.map((section) => (
          <SectionUI
            id={section.id}
            key={section.key}
            component={section.component}
          />
        ))}
      </Container>
    </>
  );
}
