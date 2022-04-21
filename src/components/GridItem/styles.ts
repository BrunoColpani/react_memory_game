import styled from "styled-components";

type ContainerProps = {
  showBackground: boolean;
};

export const Container = styled.div<ContainerProps>`
  height: 100px;
  background-color: ${(props) =>
    props.showBackground ? "#1550FF" : "#E2E3E3"};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
type IconProps = {
  opacity?: number;
};
export const Icon = styled.img<IconProps>`
  width: 40px;
  height: 40px;
  opacity: ${(porps) => porps.opacity ?? 1};
`;
