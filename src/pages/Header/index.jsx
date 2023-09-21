import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Wrapper = styled.div`
  background: #000;
`;
function Header() {
  return (
    <>
      <Wrapper>
        <div className="navLeft">
          <Link to="">
            <img src={`${process.env.PUBLIC_URL}/images/header/logo.png`} alt="" />
          </Link>
          <Link to="/movies">Chart</Link>
          <Link to="">My Fav</Link>
        </div>
        <div className="navRight">
          <form>
            <input type="text" />
            <button formAction='submit'></button>
          </form>
        </div>
      </Wrapper>
    </>
  )
}

export default Header