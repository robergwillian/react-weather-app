import styled from 'styled-components'

export const Container = styled.header`
  background: var(--main-dark);
  height:100px;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width:1200px;
  padding: 2rem 1rem 12rem;
`;

export const Search = styled.div`
  height:40px;
  max-width:605px;
  display:flex;
  

    input {
        width:530px;
        height:40px;
        outline:0;
        border-radius: 5px 0px 0px 5px;
        border: 0px;
        padding:20px;
    }

    button {
        width:73px;
        height:40px;
        background: var(--red);
        border:0px;
        border-radius: 0px 5px 5px 0px;

        &:hover{
            filter:brightness(0.9);
        }
    }


`;

export const TempSwitch = styled.div`
    width:170px;
    height:40px;
    background: #ffffff;
    border-radius:5px;
    display:flex;
    align-items:center;
    justify-items:center;
    font-size:18px;

        .celsius{
            width:50%;
            text-align:right;
            padding-right:5px;
        }

        .fahrenheit{
            width:50%;
            text-align:left;
            padding-left:5px;
        }

        .active {
            font-weight:700;
        }


`;
