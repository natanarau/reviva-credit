import styled from "styled-components";

interface progressProps {
  progress: number
}

export const Progress = styled.div<progressProps> `
display: flex;
  --limitedUsed: ${props => props.progress};
  width: 19.87rem;
  height: 1rem;
  border-radius: .3rem;
  background-color: #06D6A0;
  &::before {
    content: "";
    width: calc(var(--limitedUsed) * 1%);
    background-color: #E83151;
    transition: all 0.2s ease;
    border-radius: .3rem;
  }
`
export const TextH3 = styled.h3 `
  font-size: 1rem;
  margin: .62rem;
  font-weight: 400;
`
export const Strong = styled.strong `
  font-weight: 700;
`