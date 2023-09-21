import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const FrameFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &>.firstFloor {
    display: flex;
    gap: 15px;
  }
  &>.secondFloor {
    display: flex;
    gap: 20px;
  }
`;

function Footer() {
  return (
    <FrameFooter>
      <div className="firstFloor">
        <Link to={''} className="wrapSns">
          <img src={`${process.env.PUBLIC_URL}/images/footer/facebook.png`} />
        </Link>
        <Link to={''} className="wrapSns">
          <img src={`${process.env.PUBLIC_URL}/images/footer/instagram.png`} />
        </Link>
        <Link to={''} className="wrapSns">
          <img src={`${process.env.PUBLIC_URL}/images/footer/twitter.png`} />
        </Link>
        <Link to={''} className="wrapSns">
          <img src={`${process.env.PUBLIC_URL}/images/footer/youtube.png`} />
        </Link>
      </div>
      <div className="secondFloor">
        <div className="text">Conditions of Use</div>
        <div className="text">Privacy & Policy</div>
        <div className="text">Press Room</div>
      </div>
      <div className="thirdFloor">
        &copy; 2023 GReen ComputerArt by WEB303  
      </div>
    </FrameFooter>
  )
}

export default Footer