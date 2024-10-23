import VectorImg from "../assets/Vector.png";
import checkCircleIcon from "../assets/check-circle-2.png";
import MaskGroup1 from "../assets/mask1.png";
import MaskGroup2 from "../assets/mask2.png";
import MaskGroup3 from "../assets/mask3.png";
import MaskGroup4 from "../assets/mask4.png";
import checkCircle2 from "../assets/check_circle.png";
import crossIcon from "../assets/close_icon.png";
import feverIcon from "../assets/icon-fever.png";
import ladyImg from "../assets/lady-mask.png";
import manImg from "../assets/man-mask.png";
import userCircleIcon from "../assets/supervised_user_circle.png";
import dateFrame1 from "../assets/5dec-frame.png";
import dateFrame2 from "../assets/10-dec-frame.png";

export const statisticsNum = [
  {
    id: 1,
    number: 9585625,
    scenario: "active case",
    img: VectorImg,
  },
  {
    id: 2,
    number: 9585625,
    scenario: "death case",
    img: VectorImg,
  },
  {
    id: 1,
    number: 9585625,
    scenario: "recovered case",
    img: VectorImg,
  },
];

export const coronaList = [
  {
    id: 1,
    para: "Amet minim mollit non deserunt",
    img: checkCircleIcon,
  },
  {
    id: 2,
    para: "Deserunt ullamco est sit",
    img: checkCircleIcon,
  },
  {
    id: 3,
    para: "Velit officia consequat duis enim ",
    img: checkCircleIcon,
  },
];

export const coronaSteps = [
  {
    id: 1,
    heading: "symptoms",
    logo: MaskGroup1,
    para: "Amet minim mollit non",
  },
  {
    id: 2,
    heading: "protection",
    logo: MaskGroup2,
    para: "Amet minim mollit non",
  },
  {
    id: 3,
    heading: "security",
    logo: MaskGroup3,
    para: "Amet minim mollit non",
  },
  {
    id: 4,
    heading: "treatment",
    logo: MaskGroup4,
    para: "Amet minim mollit non",
  },
];

export const shouldDo = [
  { img: checkCircle2, text: "Stay at home" },
  { img: checkCircle2, text: "Wear mask" },
  { img: checkCircle2, text: "Use Sanitizer" },
  { img: checkCircle2, text: "Disinfect your home" },
  { img: checkCircle2, text: "Wash your hands" },
  { img: checkCircle2, text: "Frequent self-isolation" },
];

export const shouldAvoid = [
  { img: crossIcon, text: "Avoid Infected people" },
  { img: crossIcon, text: "Avoid animals" },
  { img: crossIcon, text: "Avoid handshaking" },
  { img: crossIcon, text: "Avoid infected surfaces" },
  { img: crossIcon, text: "Avoid touching your face" },
  { img: crossIcon, text: "Avoid droplets" },
];

export const symptomsItems = [
  {
    id: 1,
    img: feverIcon,
    heading: "High Fever",
    description:
      "Amet minim mollit non deserunt ullam est sit aliqua dolor do amet sint. Velit  consequat duis enim velit mollit.",
  },
  {
    id: 2,
    img: feverIcon,
    heading: "Cough",
    description:
      "Amet minim mollit non deserunt ullam est sit aliqua dolor do amet sint. Velit  consequat duis enim velit mollit.",
  },
  {
    id: 3,
    img: feverIcon,
    heading: "Sore Troath",
    description:
      "Amet minim mollit non deserunt ullam est sit aliqua dolor do amet sint. Velit  consequat duis enim velit mollit.",
  },
  {
    id: 4,
    img: feverIcon,
    heading: "Headache",
    description:
      "Amet minim mollit non deserunt ullam est sit aliqua dolor do amet sint. Velit  consequat duis enim velit mollit.",
  },
];

export const newsArticle = [
  {
    id: 1,
    mainImg: ladyImg,
    dateIcon: dateFrame1,
    icon: userCircleIcon,
    para1: "admin",
    para2: "2 comments",
    description: "How coronavirus very contigous",
  },
  {
    id: 2,
    mainImg: manImg,
    dateIcon: dateFrame2,
    icon: userCircleIcon,
    para1: "admin",
    para2: "5 comments",
    description: "How coronavirus very contigous",
  },
  {
    id: 3,
    mainImg: ladyImg,
    dateIcon: dateFrame1,
    icon: userCircleIcon,
    para1: "admin",
    para2: "2 comments",
    description: "How coronavirus very contigous",
  },
];

export const quickLinks = [
  {
    id: 1,
    heading: "Quick Links",
    list1: "Symptoms",
    list2: "Prevention",
    list3: "FAQs",
    list4: "About Coronavirus",
    list5: "Contact Us",
  },
  {
    id: 2,
    heading: "Helpful Links",
    list1: "Healthcare Professional",
    list2: "LGU Facilities",
    list3: "FAQs",
    list4: "Protect Your Family",
    list5: "World Health",
  },
  {
    id: 3,
    heading: "Resources",
    list1: "WHO Website",
    list2: "CDC Website",
    list3: "Gov Website",
    list4: "About Coronavirus",
    list5: "DOH Website",
  },
];
