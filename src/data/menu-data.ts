
const menu_data = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false,
    // sub_menus: [
    //   { link: "/", title: "Home 01", },
    //   { link: "/home-2", title: "Home 02", },
    // ]
  },
  {
    id: 2,
    title: "Expertise",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      // {
      //   link: "#",
      //   title: "Service",
      //   has_inner_dropdown: true,
      //   inner_submenu: [
      //     { link: "/service", title: "Service" },
      //     { link: "/service-details", title: "Service Details" },

      //   ]
      // },
          {
        link: "/service",
        title: "Services",
        has_inner_dropdown: false, 
      },
      // {
      //   link: "#",
      //   title: "Authentification",
      //   has_inner_dropdown: true,
      //   inner_submenu: [
      //     { link: "/register", title: "Register" }, 
      //     { link: "/login", title: "Login" }, 

      //   ]
      // },
      // {
      //   link: "/pricing-plan",
      //   title: "Pricing Plan",
      //   has_inner_dropdown: false, 
      // },
      // {
      //   link: "/faq",
      //   title: "FAQ",
      //   has_inner_dropdown: false, 
      // },
      // {
      //   link: "/team",
      //   title: "Team",
      //   has_inner_dropdown: false, 
      // },
      // {
      //   link: "/team-details",
      //   title: "Team Details",
      //   has_inner_dropdown: false, 
      // },
      // {
      //   link: "/404",
      //   title: "404 - Error",
      //   has_inner_dropdown: false, 
      // },
    ]
  },
  {
    id: 3,
    title: "About Us",
    link: "/about-us",
    has_dropdown: true,
    sub_menus: [
      { link: "/ourteam", title: "Our Team", },
    ]
  },
  {
    id: 4,
    title: "Blog",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/blog", title: "Blog", }
    ]
  },

]

export default menu_data