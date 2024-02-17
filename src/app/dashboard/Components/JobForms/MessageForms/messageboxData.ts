interface MessageProps {
  label: string;
  subtext: string;
}
export const messageData: MessageProps[] = [
  {
    label: "About Job",
    subtext:
      "Provide a breif summary of the job responsibilities and requirements",
  },
  {
    label: "What we are looking for",
    subtext:
      "Indicate the key qualities, knowledge, and expertise that you are seeking in a candidate",
  },

  {
    label: "What you will be doing",
    subtext: "Describe the day-to-day",
  },
  {
    label: "Nice to have",
    subtext:
      "Mention any desirable traits, abilities. or knowledge that would make a candidate stand out, but are not mandatory",
  },
  {
    label: "Preferred candidate data",
    subtext:
      "List any preferred qualifications, skills or expereince that would be beneficial for the candidate to have, but are not strictly required",
  },
  {
    label: "Skills",
    subtext:
      "List the technical skills, software knowledge, and other abilities required for this role",
  },
];
