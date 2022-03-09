import PropTypes from 'prop-types'
import { useFetch } from '../../utils/hooks'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const MonToolTip = ({ active, payload }) => {
// Source : https://codesandbox.io/s/tooltip-with-customized-content-lyxvs?file=/src/App.tsx
    if (active && payload && payload.length) {
        return (
            <div className="MonToolTip">
                <p>{`${payload[1].value} kg`}</p>
                <p>{`${payload[0].value} Kcal`}</p>
            </div>
        )
    }
    return null
}

/**
 * Displays the Daily Activities using a BarChart
 * @param {object} props
 * @returns {jsx}
 */
function ActiviteQuotidienne(props) {
    const { donnees, isLoading, erreur } = useFetch('http://localhost:3000/user/' + props.utilisateur + '/activity')
  
    if (erreur) {
        return <div>Une erreur s'est produite ! {erreur}</div>;
    }

    const mesSessions = []
    if(!isLoading) {
        let i = 1
        for (const session of donnees.data.sessions) {
            mesSessions.push({
                calories: session.calories,
                jour: i++, // Afin d'afficher les successions de jours plutôt que de dates
                kilogramme: session.kilogram
            })
        }
    }

    return (
        <div className="activiteQuotidienne">
            {isLoading ? (
            <div>
            <div>Chargement des données…</div>
            </div>
            ) : (
                <div className='conteneurActivite'>
                    <div className='legendeActivite'>
                        <h2>Activité quotidienne</h2>
                        <div className='legende'>
                            <div className='legendePoint'>
                                <span className='pointLegende pointPoids'></span>
                                <h3>Poids (kg)</h3>
                            </div>
                            <div className='legendePoint'>
                                <span className='pointLegende pointCalories'></span>
                                <h3>Calories brûlées (kCal)</h3>
                            </div>
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={180}>
                        <BarChart
                                data={mesSessions}
                                barGap={8}
                                margin={{
                                    top: 0,
                                    right: 4,
                                    left: 0,
                                    bottom: 8,
                                }}>
                        <CartesianGrid vertical={false} strokeDasharray="2 2" stroke="#dedede" />
                        <XAxis dy={15}
                            dataKey="jour"
                            stroke="#dedede"
                            tick={{ fontSize: 14, fill: '#9b9eac'}}
                            tickLine={false} />
                        <YAxis
                            dataKey="calories"
                            domain={[150, "auto"]}
                            hide={true}
                            orientation="right"
                            tick={{ fontSize: 14, fill: '#74798c', strokeWidth: 6}}
                            tickLine={false}
                            yAxisId="kCal" />    
                        <YAxis
                            allowDecimals={false}
                            axisLine={false}
                            dataKey="kilogramme"
                            domain={[65, "auto"]}
                            dx={40}
                            interval="number"
                            orientation="right"
                            tick={{ fontSize: 14, fill: '#9b9eac', strokeWidth: 6}}
                            tickLine={false}
                            yAxisId="kg"
                        />
                        <Tooltip
                            content={<MonToolTip />}
                            cursor={{background: "rgba(196, 196, 196, 0.5)", opacity:"0.5"}} />
                        <Bar
                            barSize={9}
                            dataKey="kilogramme"
                            fill="#282D30" 
                            radius={[10, 10, 0, 0]}
                            yAxisId="kg"
                            />
                        <Bar
                            barSize={9}
                            dataKey="calories" 
                            fill="#e60000" 
                            radius={[10, 10, 0, 0]}
                            yAxisId="kCal" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    )
}

ActiviteQuotidienne.propTypes = {
    props: PropTypes.object
}

export default ActiviteQuotidienne