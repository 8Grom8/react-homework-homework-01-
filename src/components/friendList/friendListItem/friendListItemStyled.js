import styled from 'styled-components';

export const FriendlistNav = styled.li`

    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 20px;
  
  .avatar {
    width: 30px;
    height: 30px;
    fill: green;
  }
    .status{
     display:block;
     border-radius:50%; 
     width: 15px;
     height: 15px;
     background-color:${(props) =>
    props.status ? "green" : "red"}
  }
  
`;