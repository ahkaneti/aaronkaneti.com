import styled from 'styled-components/macro';

import { TEXT_SIZES, ICON_SIZES } from 'tokens/text';
import { TEXT_COLORS } from 'tokens/colors';

export const ProjectHolder = styled.div`
  width: inherit;
  background: ${({ palette }) => palette.LIGHT};
  height: ${({ showProject, small }) =>
    showProject ? (small ? `525px` : `635px;`) : `0px;`};
  flex-direction: column;
  transition: 500ms;
  overflow: hidden;
`;

export const UpperHolder = styled.div`
  ${({ color, palette }) =>
    `background: ${color};${color === '#CECECE' && `color: black;`};
    ${color === '#176482' && `border: 1px solid #f2f2f2`};
    `}

  border-radius: 10px;
  display: flex;
  flex-direction: row;
  margin: 20px 10%;
  padding: 15px;
`;
export const LogoHolder = styled.div`
  height: 200px;
  img {
    width: 200px;
    height: 200px;
  }
`;
export const DescHolder = styled.p``;
export const InfoHolder = styled.div`
  align-items: flex-start;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: relative;
  width: -webkit-fill-available;
  margin-left: 20px;
`;
export const NameHolder = styled.p`
  font-size: ${TEXT_SIZES.MEDIUM_LARGE}px;
`;
export const TechStackHolder = styled.p`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
export const LowerHolder = styled.div`
  display: flex;
  flex-direction: row;
  ${({ small }) => (small ? `flex-direction: column;` : ``)}
  margin: 20px 10%;
  height: 54%;
`;
export const RightHolder = styled.div`
  float: right;
  margin-left: 10px;
  ${({ small }) => small && `margin-left: 0;`}
`;
export const LeftHolder = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-around;
  i {
    font-size: ${ICON_SIZES.LARGE}px;
    cursor: pointer;
    position: absolute;
    bottom: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
export const ButtonHolder = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  margin: 10px 0px;
`;
export const WebsiteButton = styled.button`
  background: ${({ palette }) => palette.DARKEST};
  height: 50px;
  width: 250px;
  font-size: ${TEXT_SIZES.LABEL}px;
  color: ${TEXT_COLORS.DEFAULT};
  outline: none;
  cursor: pointer;
  transition: 500ms;
  border: 1px solid ${({ palette }) => palette.VIBRANT};
`;

export const VideoHolder = styled.div``;
export const Description = styled.p`
  width: auto;
  font-size: ${TEXT_SIZES.DEFAULT}px;
`;
export const Contributor = styled.p`
  margin-bottom: 30px;
  ${({ small }) => small && `margin-top: 15px;`}
`;
