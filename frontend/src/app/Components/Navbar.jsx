import React from 'react';
import CardNav from '@/blocks/Components/CardNav/CardNav';

const Navbar = () => {
  const items = [
    {
      label: "Your Page", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Your Page", ariaLabel: "Featured Projects"},
      ]
    },
    {
      label: "Contact Us",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Github", ariaLabel: "Form" },
        { label: "LinkedIn", ariaLabel: "Form" },
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

export default Navbar