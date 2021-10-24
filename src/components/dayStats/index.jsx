import { Container, Stats, StatsCard } from "./styles";


export function DayStats() {
    return (
        <Container>
            <div>Now</div>
            <Stats>
                <StatsCard>
                    <p>Chance of Rain</p>
                    <h2>12%</h2>
                </StatsCard>

                <StatsCard>
                    <p>Humidity</p>
                    <h2>60%</h2>
                </StatsCard>

                <StatsCard>
                    <p>Wind Speed</p>
                    <h2>10 k/h</h2>
                </StatsCard>

                <StatsCard>
                    <p>Visibility</p>
                    <h2>100km</h2>    
                </StatsCard>

                <StatsCard>
                    <p>Pressure</p>
                    <h2>1015 hPa</h2>    
                </StatsCard>
            </Stats>
        </Container>
    )
}