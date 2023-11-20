/**
    data map
*/

const logo = {
    a: {
      href: "/",
      appName: "LandingPage",
    },
    img: {
      src: "https://bootstrapmade.com/demo/templates/Bootslander/assets/img/hero-img.png",
      alt: "Logo Image",
    },
  };
  
const menus = [
    { name: "Home", link: "#hero", active: true },
    { name: "About", link: "#about", active: false },
    { name: "Featurees", link: "#features", active: false },
    { name: "Gallery", link: "#gallery", active: false },
    { name: "Pricing", link: "#pricing", active: false },
    { name: "F.A.Q", link: "#faq", active: false },
    { name: "Contact", link: "#contact", active: false },
  ];

const hero = {
    title: "App Landing page template",
    slogan: "We are team of talented designers making websites with Bootstrap",
    image: {
      src: "/img/hero-img.png",
      alt: "Hero Image",
      class: "img-fluid animated",
    },
    stores: [
      {
        name: "Google Play",
        icon_class: "bx bxl-play-store",
        link: "#",
      },
      {
        name: "App Store",
        icon_class: "bx bxl-apple",
        link: "#",
      },
    ],
  };

const about = {
    img: {
      link: "https://www.youtube.com/watch?v=StpBR2W8G5A",
      img_class: "glightbox play-btn mb-4",
    },
    title: "Enim quis est voluptatibus aliquid consequatur fugiat",
    subtitle:
      "Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.",
    list: [
      {
        heading: "Lorem Ipsum",
        description:
          "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
        icon_class: "bx bx-fingerprint",
      },
      {
        heading: "Nemo Enim",
        description:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
        icon_class: "bx bx-gift",
      },
      {
        heading: "Dine Pad",
        description:
          "Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis",
        icon_class: "bx bx-atom",
      },
    ],
  };

const features = {
  heading: "FEATURES",
  description: "CHECK THE FEATURES",
  list: [
    {
      title: "Lorem Ipsum",
      icon: "ri-store-line",
      div_class:"col-lg-3 col-md-4",
      delay:"50",
      dynamicColor:{color: "#ffbb2c"},
    },
    {
      title: "Dolor Sitema",
      icon: "ri-bar-chart-box-line",
      div_class:"col-lg-3 col-md-4 mt-4 mt-md-0",
      delay:"100",
      dynamicColor:{color: "#5578ff"},
    },
    {
      title: "Sed perspiciatis",
      icon: "ri-calendar-todo-line",
      div_class:"col-lg-3 col-md-4 mt-4 mt-md-0",
      delay:"150",
      dynamicColor:{color: "#e80368"},
    },
    {
      title: "Magni Dolores",
      icon: "ri-paint-brush-line",
      div_class:"col-lg-3 col-md-4 mt-4 mt-lg-0",
      delay:"200",
      dynamicColor:{color: "#e361ff"},
    },
    {
      title: "Nemo Enim",
      icon: "ri-database-2-line",
      div_class:"col-lg-3 col-md-4 mt-4",
      delay:"250",
      dynamicColor:{color: "#47aeff"},
    },
    {
      title: "Eiusmod Tempor",
      icon: "ri-gradienter-line",
      div_class:"col-lg-3 col-md-4 mt-4",
      delay:"300",
      dynamicColor:{color: "#ffa76e"},
    },
    {
      title: "Midela Teren",
      icon: "ri-file-list-3-line",
      div_class:"col-lg-3 col-md-4 mt-4",
      delay:"350",
      dynamicColor:{color: "#11dbcf"},
    },
    {
      title: "Pira Neve",
      icon: "ri-price-tag-2-line",
      div_class:"col-lg-3 col-md-4 mt-4",
      delay:"400",
      dynamicColor:{color: "#4233ff"},
    },
    {
      title: "Dirada Pack",
      icon: "ri-anchor-line",
      div_class:"col-lg-3 col-md-4 mt-4",
      delay:"450",
      dynamicColor:{color: "#b2904f"},
    },
    {
      title: "Moton Ideal",
      icon: "ri-disc-line",
      div_class:"col-lg-3 col-md-4 mt-4",
      delay:"500",
      dynamicColor:{color: "#b20969"},
    },
    {
      title: "Verdo Park",
      icon: "ri-base-station-line",
      div_class:"col-lg-3 col-md-4 mt-4",
      delay:"550",
      dynamicColor:{color: "#ff5828"},
    },
    {
      title: "Flavor Nivelanda",
      icon: "ri-fingerprint-line",
      div_class:"col-lg-3 col-md-4 mt-4",
      delay:"600",
      dynamicColor:{color: "#29cc61"},
    },
  ]
};

const count = {
    list: [
      {
        div_class:"col-lg-3 col-md-6",
        icon: "bi bi-emoji-smile",
        title:"Happy Clients",
        number: "232",
        number_class:"purecounter",
      },
      {
        div_class:"col-lg-3 col-md-6 mt-5 mt-md-0",
        icon: "bi bi-journal-richtext",
        title:"Projects",
        number: "521",
        number_class:"purecounter",
      },
      {
        div_class:"col-lg-3 col-md-6 mt-5 mt-lg-0",
        icon: "bi bi-headset",
        title:"Hours Of Support",
        number: "1463",
        number_class:"purecounter",
      },
      {
        div_class:"col-lg-3 col-md-6 mt-5 mt-lg-0",
        icon: "bi bi-people",
        title:"Hard Workers",
        number: "15",
        number_class:"purecounter",
      },
    ],
  };

const details = {
  title:
    "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: {
    src: "/img/details-1.png",
    class: "img-fluid",
    alt: "Details Photo",
  },
  lists: [
    "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit.",
    "Iure at voluptas aspernatur dignissimos doloribus repudiandae.",
    "Est ipsa assumenda id facilis nesciunt placeat sed doloribus praesentium.",
  ],
  footer:
    "Voluptas nisi in quia excepturi nihil voluptas nam et ut. Expedita omnis eum consequatur non. Sed in asperiores aut repellendus. Error quisquam ab maiores. Quibusdam sit in officia",
};

const gallery = {
    title:"GALLERY",
    subtitle:"Check our Gallery",
    images: [
        {
            src: "/img/gallery/gallery-1.jpg",
            class: "img-fluid",
            alt: "Details Photo",
            delay:"100",
        },
        {
            src: "/img/gallery/gallery-2.jpg",
            class: "img-fluid",
            alt: "Details Photo",
            delay:"150",
        },
        {
            src: "/img/gallery/gallery-3.jpg",
            class: "img-fluid",
            alt: "Details Photo",
            delay:"200",
        },
        {
            src: "/img/gallery/gallery-4.jpg",
            class: "img-fluid",
            alt: "Details Photo",
            delay:"250",
        },
        {
            src: "/img/gallery/gallery-5.jpg",
            class: "img-fluid",
            alt: "Details Photo",
            delay:"300",
        },
        {
            src: "/img/gallery/gallery-6.jpg",
            class: "img-fluid",
            alt: "Details Photo",
            delay:"350",
        },
        {
            src: "/img/gallery/gallery-7.jpg",
            class: "img-fluid",
            alt: "Details Photo",
            delay:"400",
        },
        {
            src: "/img/gallery/gallery-8.jpg",
            class: "img-fluid",
            alt: "Details Photo",
            delay:"450",
        },
    ],

  };

const pricing_plans = [
  {
    name: "Free",
    price: "0",
    div_class:"col-lg-3 col-md-6",
    delay:"100",
    box:"box",
    features:
        {
            one:"Aida dere",
            two:"Nec feugiat nisl",
            three:"Nulla at volutpat dola",
            four:"Pharetra massa",
            five:"Massa ultricies mi",
            na1:"na",
            na2:"na",
        },
    link: "#",
  },
  {
    name: "Business",
    price: "19",
    div_class:"col-lg-3 col-md-6 mt-4 mt-md-0",
    delay:"200",
    box:"box featured",
    features:
        {
            one:"Aida dere",
            two:"Nec feugiat nisl",
            three:"Nulla at volutpat dola",
            four:"Pharetra massa",
            five:"Massa ultricies mi",
            na1:"",
            na2:"na",
        },
    link: "#",
  },
  {
    name: "Developer",
    price: "29",
    div_class:"col-lg-3 col-md-6 mt-4 mt-lg-0",
    delay:"300",
    box:"box",
    features:
        {
            one:"Aida dere",
            two:"Nec feugiat nisl",
            three:"Nulla at volutpat dola",
            four:"Pharetra massa",
            five:"Massa ultricies mi",
            na1:"",
            na2:"",
        },
    link: "#",
  },
  {
    name: "Ultimate",
    price: "49",
    div_class:"col-lg-3 col-md-6 mt-4 mt-lg-0",
    delay:"400",
    box:"box",
    features:
        {
            one:"Aida dere",
            two:"Nec feugiat nisl",
            three:"Nulla at volutpat dola",
            four:"Pharetra massa",
            five:"Massa ultricies mi",
            na1:"",
            na2:"",
        },
    link: "#",
  },
];

const faqs = [
    {
      id: 1,
      delay:"",
      question: "Non consectetur a erat nam at lectus urna duis?",
      answer:
        "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
      id: 2,
      delay:"100",
      question: "Non consectetur a erat nam at lectus urna duis?",
      answer:
        "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
      id: 3,
      delay:"200",
      question: "Non consectetur a erat nam at lectus urna duis?",
      answer:
        "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
      id: 4,
      question: "Non consectetur a erat nam at lectus urna duis?",
      answer:
        "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
      id: 5,
      delay:"300",
      question: "Non consectetur a erat nam at lectus urna duis?",
      answer:
        "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
  ];

const contact = {
  address: "A108 Adam Street, New York, NY 535022",
  phone: "+1 5589 55488 55, +1 5589 22548 64",
  email: "contact@example.com info@example.com",
};



export {logo,menus,hero,about,features,details,gallery,count,faqs,pricing_plans,contact};
