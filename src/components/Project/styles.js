import styled from 'styled-components';

export const ProjectHolder = styled.div`
  width: inherit;
  background: #2f3640;
`;

export const UpperHolder = styled.div`
  ${({ color }) => `background: ${color};`}
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  margin: 20px 10%;
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
  font-size: 50px;
`;
export const TechStackHolder = styled.p`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
export const LowerHolder = styled.div`
  /* ${({ color }) => `color: ${color};`} */
  display: flex;
  flex-direction: row;
  margin: 20px 10%;
`;
export const RightHolder = styled.div`
  float: right;
`;
export const LeftHolder = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  i {
    font-size: 50px;
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
    position: absolute;
    bottom: 0;
  }
`;
export const VideoHolder = styled.div`
  background: black;
`;
export const Description = styled.p`
  width: 50%;
  font-size: 20px;
`;
export const Contributor = styled.p``;
