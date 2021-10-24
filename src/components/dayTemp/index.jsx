import { CityCard, Container, Content, GridContainer, HourTemp } from "./styles";
import { WiDayRainMix, WiDaySunny } from 'react-icons/wi'

export function DayTemp () {
    return (
        <Container>
            <GridContainer>
                <CityCard>
                    <div className="city">London</div>
                    <div className="date">Sunday 13:43</div>
                    <div className="temp">12°C</div>
                </CityCard>
                <HourTemp>
                    <div className="hour">8:00</div>
                    <WiDaySunny size="60" />
                    <div className="hourTemp">13 °C</div>
                </HourTemp>

                <HourTemp>
                    <div className="hour">9:00</div>
                    <WiDayRainMix size="60" />
                    <div className="hourTemp">13 °C</div>
                </HourTemp>

                <HourTemp>
                    <div className="hour">10:00</div>
                    <WiDaySunny size="60"y />
                    <div className="hourTemp">13 °C</div>
                </HourTemp>

                <HourTemp>
                    <div className="hour">11:00</div>
                    <WiDayRainMix size="60" />
                    <div className="hourTemp">13 °C</div>
                </HourTemp>



            </GridContainer>
        </Container>

    )

}