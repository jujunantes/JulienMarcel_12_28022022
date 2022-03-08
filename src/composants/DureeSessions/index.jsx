import { useFetch } from '../../utils/hooks'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const MonToolTip = ({ active, payload }) => {
// Source : https://codesandbox.io/s/tooltip-with-customized-content-lyxvs?file=/src/App.tsx
    if (active && payload && payload.length) {
        return (
            <div className="tooltipDureeSessions">
                <p className="texteDureeSession">{`${payload[0].value} min`}</p>
            </div>
        )
    }
    return null
}

function DureeSessions(props) {
    const { donnees, isLoading, erreur } = useFetch('http://localhost:3000/user/' + props.utilisateur + '/average-sessions')
  
    if (erreur) {
        return <div>Une erreur s'est produite ! {erreur}</div>;
    }    

    return (
        <div className='graphesDeuxiemeRangee'>
            {isLoading ? (
            <div>
            <div>Chargement des données…</div>
            </div>
            ) : (
                <div className='conteneurSessions'>
                    <div className='filtreHover' />
                    <h2>Durée moyenne des sessions</h2>
                        <ResponsiveContainer width="100%" height={180} >
                            <LineChart
                                data={donnees.data.sessions}
                                margin={{
                                    top: 0,
                                    right: 0,
                                    left: 0,
                                    bottom: 0,
                                }}>
                                <defs>
                                    <linearGradient
                                        id="linear"
                                        x1="0"
                                        y1="0"
                                        x2="1"
                                        y2="0" >
                                        <stop offset="0%" stopColor="#aaaaaa77" />
                                        <stop offset="100%" stopColor="#ffffffff" />
                                    </linearGradient>
                                </defs>
                                <XAxis 
                                    dataKey="day" 
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={30} // to hide the labels : we'll display them with a div in order to space them differently from the ticks
                                    padding={{ left: 0, right: 0 }}
                                    />
                                <YAxis 
                                    domain={[0, "dataMax + 20"]}
                                    hide={true}/>
                                <Tooltip 
                                    content={<MonToolTip />}
                                    className="tooltipLineChart"
                                    cursor={{
                                        strokeWidth: 0,
                                    }}
                                    />
                                <Line
                                    type="natural" 
                                    dataKey="sessionLength" 
                                    stroke="url(#linear)"
                                    strokeWidth={2}
                                    dot={false}
                                    activeDot={{ stroke: '#ffffff33', strokeWidth: 10, r: 5 }}
                                    strokeDashArray="4" />
                            </LineChart>
                        </ResponsiveContainer>
                    <div className='axeXDureeSessions'>
                        <span>L</span>
                        <span>M</span>
                        <span>M</span>
                        <span>J</span>
                        <span>V</span>
                        <span>S</span>
                        <span>D</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DureeSessions