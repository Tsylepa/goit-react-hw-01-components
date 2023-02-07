import styled from '@emotion/styled';

export const AllFriends = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Friend = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  background-color: #fff;
  gap: 12px;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img``;

export const Name = styled.p`
  font-size: 24px;
`;
