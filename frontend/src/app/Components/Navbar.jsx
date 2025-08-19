import React from 'react';
import CardNav from '@/blocks/Components/CardNav/CardNav';


const Navbar = () => {
  const items = [
    {
      label: "Your Page",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Home", href: "/Home", ariaLabel: "Go to Home" },
        { label: "Your Page", href: "/YourPage", ariaLabel: "View Projects" },
      ]
    },
    {
      label: "Contact Us",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", href: "mailto:someone@example.com", ariaLabel: "Email us" },
        { label: "GitHub", href: "https://github.com/yourusername", ariaLabel: "Visit GitHub" },
        { label: "LinkedIn", href: "https://linkedin.com/in/yourprofile", ariaLabel: "Visit LinkedIn" },
      ]
    }
  ];

  return (
    <CardNav
      logo=''
      logoAlt="VENDORS"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};



export default Navbar;
