"use client";

import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  text-align: left;
  background-color: #1b1326;
  min-width: auto;
  max-width: 45%;
  min-height: 10%;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    max-width: 100%;
    margin: 10px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
  color: #fff;
`;

const CardTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 1.25rem;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const CardSubtitle = styled.h4`
  margin: 0 0 10px 0;
  font-size: 0.8rem;
  text-align: left;
  border-radius: 5px;
  background-color: #f5f5f5;
  display: inline-block;
  padding: 2px;
  color: #666;

  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
`;

const CardDescription = styled.p`
  margin: 0;
  text-align: justify;

  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
`;

const Card = ({ image, title, subtitle, description }) => {
  return (
    <CardContainer>
      <div className="card-container">
        <CardImage src={image} alt={title} />
        <CardContent>
          <CardTitle>{title}</CardTitle>
          {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </div>
    </CardContainer>
  );
};

export default Card;
