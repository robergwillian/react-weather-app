import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  padding: 85px 105px;

    table {
        width:100%;
        border-collapse: collapse; 
    }

    thead tr{
        border-bottom: 1pt solid #343A40;
        height:40px;
        text-align: center;
    }

    .left{
        text-align:left;
    }

    tbody tr{
        height:40px;
        text-align:center;
    }
`;