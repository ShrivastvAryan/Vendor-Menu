import React from 'react';
import CardNav from '@/blocks/Components/CardNav/CardNav';


const Navbar = () => {
  const items = [
    {
      label: "Your Page",
      bgColor: "#FFDE21",
      textColor: "#000000",
      links: [
        { label: "Home", href: "/Home", ariaLabel: "Go to Home" },
        { label: "Your Page", href: "/YourPage", ariaLabel: "View Projects" },
      ]
    },
    {
      label: "Contact Us",
      bgColor: "#FFDE21",
      textColor: "#000000",
      links: [
        { label: "Email", href: "mailto:reachtoaryan29@gmail.com", ariaLabel: "Email us" },
        { label: "GitHub", href: "https://github.com/ShrivastvAryan?tab=overview&from=2025-08-01&to=2025-08-29", ariaLabel: "Visit GitHub" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/aryanshrivastava290605/", ariaLabel: "Visit LinkedIn" },
      ]
    }
  ];

  return (
    <CardNav
      logo='/name.png'
      logoAlt="DIGIMENU"
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
