import styled from "styled-components";
import media from "styled-media-query";

export const SocialWrapper = styled.nav`
  margin: 1rem auto;

  ${media.lessThan('large')`
    display: none;
  `}
`;

export const SocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SocialItem = styled.li`
  margin: 0 5px;
`;

export const SocialLink = styled.a`
  text-decoration: none;
`;

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`;