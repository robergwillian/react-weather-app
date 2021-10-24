import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  height:405px;
  padding-top:112px;
  padding-left:105px;
`;


export const GridContainer = styled.div`
    display: grid;
    grid-template-columns:2fr 1fr 1fr 1fr 1fr;
    padding: 10px;
`;

export const CityCard = styled.div`
    max-width: 256px;
    height: 177px;

        .city {
            font-size:32px;
            color: var(--main-dark);
            line-height:37.5px;
        }

        .date {
            font-size:18px;
            line-height:21.9px;

        }

        .temp {
            font-size: 96px;
            line-height:112.5px;
            font-weight:5m00;
        }
`;

export const HourTemp = styled.div`
        max-width: 88px;
        height: 161px;
        text-align:center;

            .hour, .hourTemp {
                font-size:32px;
                line-height:37.5px;
                margin-bottom:20px;
            }

            .hourTemp {
                margin-top:20px;
            }

`;