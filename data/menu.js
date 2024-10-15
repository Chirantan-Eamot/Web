export const menuItems = [
  {
    id: 1,
    text: "Solutions",
    url: "#",
    subMenu: [
      {
        text: "Monitoring",
        url: "/",
        isActive: true,
        subChild: [ 
          {
            text: "DGMS",
            url: "/solutions/monitoring/dgms",
            isActive: true,
          },
          {
            text: "Electricals",
            url: "/electricals",
            isActive: true,
          },
          {
            text: "Servo Stabilizer",
            url: "/servoStabilizer",
            isActive: true,
          },
          {
            text: "Transformers",
            url: "/transformers",
            isActive: true,
          },
          {
            text: "Electric Health Audit and Analysis",
            url: "/electricHealthAuditandAnalysis",
            isActive: true,
          },
          {
            text: "FAQ's",
            url: "/fAQ's",
            isActive: true,
          },
        ],
      },
      {
        text: "DG Services",
        url: "/home-2",
        subChild: [ 
          {
            text: "AMC",
            url: "/dgservicesamc",
            isActive: true,
          },
          {
            text: "DG Shifting",
            url: "/dgShifting",
            isActive: true,
          },
          {
            text: "DG Rental",
            url: "/dgrental",
            isActive: true,
          },
        ],
      },
      {
        text: "New Energy Initiativas",
        url: "/home-3",
        subChild: [ 
          {
            text: "Li-Ion batteries",
            url: "/liionbatteries",
            isActive: true,
          },
          {
            text: "Sodium Ion Batteries",
            url: "/sodiumionbatteries",
            isActive: true,
          },
          {
            text: "Dual Fuel Kits/RECDs",
            url: "/dualfuelkitsrecds",
            isActive: true,
          },
          {
            text: "CPCB IV DG Sets",
            url: "/cpcbivdgsets",
            isActive: true,
          },
          {
            text: "Gas GenSet",
            url: "/gasgenset",
            isActive: true,
          },
          {
            text: "Static Voltage Stabilizer",
            url: "/staticvoltagestabilizer",
            isActive: true,
          },
        ],
      },
      // {
      //   text: "Home AI Copywriting",
      //   url: "/home-4",
      // },
    ],
    hasChildren: true,
    isActive: true,
  },
  {
    id: 2,
    text: "Products",
    url: "#",
    subMenu: [
      {
        text: "Energy Meters",
        url: "/energymeters",
      },
      {
        text: "IoT Gateway",
        url: "/iotgateway",
      },
      {
        text: "Fuel Sensors",
        url: "/fuelsensors",
      },
      {
        text: "DG and Servo Spare",
        url: "/spareparts",
      },
      {
        text: "Inverter with Battery Storage",
        url: "/inverterstorage",
      }, {
        text: "Servo Voltage",
        url: "/servostabilizer",
      },
    ],
    hasChildren: true,
  },
  {
    id: 3,
    text: "Insights",
    url: "#",
    subMenu: [
      {
        text: "Whitepapers",
        url: "/whitepapers",
      },
      {
        text: "Directives",
        url: "/Directives",
      },
      {
        text: "Blogs",
        url: "/blogs",
      },
    ],
    hasChildren: true,
  },
  {
    id: 4,
    text: "Case Studies",
    url: "#",
    hasChildren: true,
  },
  {
    id: 5,
    text: "Company",
    url: "#",
    subMenu: [
      {
        text: "Company",
        url: "/company",
      },
      {
        text: "About Us",
        url: "/aboutus",
      },
      {
        text: "Our Team",
        url: "/ourteam",
      },
      {
        text: "Social Impact (SSRDP)",
        url: "/social impact",
      },
    ],
    hasChildren: true,
  },
  // {
  //   id: 6,
  //   text: "Contact",
  //   url: "/contact-us",
  // },
];
