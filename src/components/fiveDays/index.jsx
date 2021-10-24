import { Container } from './styles'


export function FiveDays() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <td className="left">DAY</td>
                        <td>CHANCE OF RAIN</td>
                        <td>HUMIDITY</td>
                        <td>WIND</td>
                        <td>TEMPERATURE</td>
                    </tr>
                </thead>
            
                <tbody>
                    <tr>
                        <td className="left">Monday</td>
                        <td>9%</td>
                        <td>57%</td>
                        <td>10 km/h</td>
                        <td>19º</td>
                    </tr>

                    <tr>
                        <td className="left">Tuesday</td>
                        <td>9%</td>
                        <td>57%</td>
                        <td>10 km/h</td>
                        <td>19º</td>
                    </tr>

                    <tr>
                        <td className="left">Wednesday</td>
                        <td>9%</td>
                        <td>57%</td>
                        <td>10 km/h</td>
                        <td>19º</td>
                    </tr>

                    <tr>
                        <td className="left">Thursday</td>
                        <td>9%</td>
                        <td>57%</td>
                        <td>10 km/h</td>
                        <td>19º</td>
                    </tr>

                    <tr>
                        <td className="left">Friday</td>
                        <td>9%</td>
                        <td>57%</td>
                        <td>10 km/h</td>
                        <td>19º</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}