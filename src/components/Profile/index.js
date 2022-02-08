import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as S from "./styled";
import Avatar from "../Avatar";

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description }
    }
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }    
  `);

  return (
    <S.ProfileWrapper>
      <S.Profile to='/'>
        <Avatar />
        <S.About>
          <S.Name>{title}</S.Name>
          <S.Position>{position}</S.Position>
        </S.About>
      </S.Profile>
      <S.Description>{description}</S.Description>
    </S.ProfileWrapper>
  );
};

export default Profile