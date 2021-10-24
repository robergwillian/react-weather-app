import styled from 'styled-components'

export const Container = styled.div`
  background: var(--main-dark);
  height:178px;
  color:#ffffff;
  padding: 22px 0 0 15px;

`;

export const Stats = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:25px auto;
    max-width:1170px;
`;

export const StatsCard = styled.div`
    text-align:center;

        p{
            margin-bottom: 15px;
        }
`;