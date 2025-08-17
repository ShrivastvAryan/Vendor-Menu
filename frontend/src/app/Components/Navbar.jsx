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
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Form", ariaLabel: "Form" },
      ]
    }
  ];

  return (
    <CardNav
      logo=''
      logoAlt="Company Logo"
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