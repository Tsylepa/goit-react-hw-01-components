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
  background-color: var(--light-color);
  gap: 12px;
  padding: 10px;
  border-radius: 4px;
  box-shadow: var(--shadow-small);
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isOnline }) =>
    isOnline ? 'var(--status-online)' : 'var(--status-offline)'};
`;

export const Avatar = styled.img``;

export const Name = styled.p`
  font-size: 24px;
`;
