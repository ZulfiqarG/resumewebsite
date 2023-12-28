import templateOneImg from "../Images/resumeOne.png";
import templateTwoImg from "../Images/resumeTwo.png";
import templateThreeImg from "../Images/resumeThree.png";
import templateFourImg from "../Images/resumeFour.png";
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import Template3 from "../Templates/Template3";
import Template4 from "../Templates/Template4";

// Array of resume templates
export const templates = [
  {
    id: 1,
    template_name: "Template One",
    template_img: templateOneImg,
    template: <Template1 />,
  },
  {
    id: 2,
    template_name: "Template Two",
    template_img: templateTwoImg,
    template: <Template2 />,
  },
  {
    id: 3,
    template_name: "Template Three",
    template_img: templateThreeImg,
    template: <Template3 />,
  },
  {
    id: 4,
    template_name: "Template Four",
    template_img: templateFourImg,
    template: <Template4 />,
  },
];
