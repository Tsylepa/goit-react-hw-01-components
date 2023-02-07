import styled from '@emotion/styled';

export const Card = styled.div`
  display: inline-block;
  text-align: center;
  border-radius: 4px;
  color: var(--profile-card-color);
  text-transform: capitalize;
  font-size: 16px;
  background-color: var(--light-color);
  box-shadow: var(--shadow);
  overflow: hidden;
`;

export const Description = styled.div`
  padding: 20px;
`;

export const Avatar = styled.img`
  width: 180px;
  border-radius: 50%;
`;

export const Name = styled.p`
  color: initial;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Tag = styled.p``;

export const Location = styled.p``;
