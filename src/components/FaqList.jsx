import "../css/styles.css";
import Card from "./Card";
import React from "react";
import Image from "./Image";

export default function FaqList() {
  const arr = [
    [
      "./images/thumbnail.png",
      "What is Saturday Hacknight?",
      "Saturday Hacknight",
      "Saturday Hack Night is a bi-weekly hackathon that gives tech-savvy learners an opportunity to explore all the latest technology.",
    ],
    [
      "./images/thumbnail2.png",
      "Who can Participate?",
      "Online Hacknight",
      "Anyone who is interested in learning and building something new. You can be a student, a professional, or a hobbyist.",
    ],
    [
      "./images/thumbnail3.png",
      "What should be the team size?",
      "Info",
      "A Team should have a minimum of 2 Members & can be a maximum of 4 Members.",
    ],
    [
      "./images/thumbnail4.png",
      "Is it Online/Offline?",
      "Info",
      "The first 5 hacknights will be conducted online & the 6th one will be conducted at TinkerSpace.",
    ],
    [
      "./images/thumbnail5.png",
      "How do I participate in an Offline Hacknight?",
      "Info",
      "Physical HackNight is restricted to the teams who have submitted their projects in the Online HackNights.",
    ],
    [
      "./images/thumbnail6.png",
      "Still have questions?",
      "More Info",
      "Feel free to reach out to us at hi@tinkerhub.org or in our Discord server.",
    ],
  ];

  const formatDescription = (description) => {
    const replacements = [
      {
        keyword: "TinkerSpace",
        style: { fontWeight: "bold", color: "#d8e825" },
      },
      { keyword: "hi@tinkerhub.org", style: { color: "#bee61e" } },
      { keyword: "Discord", style: { color: "#2389f7" } },
    ];

    const regexPattern = replacements.map(({ keyword }) => keyword).join("|");
    const regex = new RegExp(`(${regexPattern})`, "gi");

    const formattedDescription = description.split(regex).map((part, index) => {
      const match = replacements.find(
        ({ keyword }) => keyword.toLowerCase() === part.toLowerCase()
      );

      if (match) {
        return (
          <span key={index} style={match.style}>
            {part}
          </span>
        );
      } else {
        return part;
      }
    });

    return <>{formattedDescription}</>;
  };

  return (
    <div className="App">
      <h2>FAQs</h2>
      <div className="card-container">
        <Image
          src="./images/faq.png"
          alt="tinkerSHN"
          className="custom-image"
          style={{ borderRadius: "8px" }}
        />
        {arr.map((item, index) => (
          <Card
            key={index}
            image={item[0]}
            title={item[1]}
            subtitle={item[2]}
            description={formatDescription(item[3])}
          />
        ))}
      </div>
    </div>
  );
}
