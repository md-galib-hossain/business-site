// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoIosCheckmarkCircle,
} from "react-icons/io";

// import images
import Features1Img from "./assets/img/features-1.png";
import Apartment1Img from "./assets/img/apartment.png";
import Apartment2Img from "./assets/img/apartment2.png";
import Apartment3Img from "./assets/img/apartment3.png";
import Apartment4Img from "./assets/img/apartment4.png";
// service images
import Service1Img from "./assets/img/service1.png";
import Service2Img from "./assets/img/service2.png";
import Service3Img from "./assets/img/service3.png";
import Service4Img from "./assets/img/service4.png";
import Service5Img from "./assets/img/service5.png";
import Service6Img from "./assets/img/service6.png";
import Contactimg from "./assets/img/contact.svg";

export const contactimg = {
  image: <Contactimg></Contactimg>,
};
export const services = [
  {
    name: "Buy",
    image: <Service5Img />,
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Sell",
    image: <Service6Img />,
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Rent",
    image: <Service4Img />,
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Emi",
    image: <Service2Img />,
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Clean settlement",
    image: <Service1Img />,
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "24/7 support",
    image: <Service3Img />,
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export const navigation = [
  {
    name: "home",
    href: "home",
  },

  {
    name: "contact",
    href: "contact",
  },
];

export const hero = {
  title: "Discover Your New Home",
  subtitle:
    "Discover a place you'll love to live,Get the best real estate deals first,before they hit the mass market!",
  buttonText: "Get Started",
};

export const stats = [
  {
    value: "9",
    text: "Years Experience",
  },
  {
    value: "2",
    text: "Opened in the country",
  },
  {
    value: "10k+",
    text: "Deals Done",
  },
  {
    value: "30+",
    text: "Agents to service",
  },
];

export const features = {
  image: <Features1Img />,
  title: "Why us?",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi",
  buttonText: "Show Now",
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Perfect match",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Easy payment",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas",
    },
  ],
};

export const newInStore = {
  title: "Popular deals Now",
  subtitle: "Get the latest assets immediately with agent support",

  products: [
    {
      name: "Austin",
      image: <Apartment1Img />,
    },
    {
      name: "San francisco",
      image: <Apartment2Img />,
    },
    {
      name: "Denver",
      image: <Apartment3Img />,
    },
    {
      name: "Seattle",
      image: <Apartment4Img />,
    },
  ],
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: "#",
    },
    {
      icon: <IoLogoInstagram />,
      href: "#",
    },
    {
      icon: <IoLogoGithub />,
      href: "#",
    },
    {
      icon: <IoLogoFacebook />,
      href: "#",
    },
  ],
  copyright: "Real Estate 2023 - All Rights Reserved.",
};
