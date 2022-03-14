import PropTypes from 'prop-types'
import { useFetch } from '../../utils/hooks'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'

const sujets = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité']

/**
 * Displays a general activiyu chart using a RadarChart
 * @param {object} props
 * @returns {jsx}
 */
function RadarActivite(props) {
    const { donnees, isLoading, erreur } = useFetch('http://localhost:3000/user/' + props.utilisateur + '/performance')
  
    if (erreur) {
        return <div>Une erreur s'est produite ! {erreur}</div>;
    }
    
    let donneesRadar = []
    /**
     * Make the data fetched compatible with RadarChart's use
     */
    function prepareDonnes() {
        for (let i = 0; i < donnees.data.data.length; i++) {
            donneesRadar.splice(0,0, {
            sujet: sujets[i],
            valeur: donnees.data.data[i].value,
            fullMark: 300
            })
        }
    }

    return (
        <div className='graphesDeuxiemeRangee'>
            {isLoading ? (
            <div>
                <div>Chargement des données…</div>
            </div>
            ) : (
                <div className='conteneurRadar'>
                    {prepareDonnes()}
                    <ResponsiveContainer width="100%" height={268} border-radius="5px" >
                        <RadarChart 
                            cx="50%" 
                            cy="50%"                            
                            outerRadius={85}
                            data={donneesRadar}
                            className='radarchart'
                        >
                            <PolarGrid
                                radialLines={false}
                                polarRadius={[ 9, 22, 43, 66, 85 ]}
                            />
                            <PolarAngleAxis 
                                dataKey="sujet"
                                stroke="#ffffff"
                                dy={4}
                                tickLine={false}
                                tick={{
                                    fontSize: 12,
                                    fontWeight: 500,
                                }}    
                            />
                            <Radar name="Utilisateur" dataKey="valeur" fill="#ff0000" fillOpacity={0.7} />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    )
}

RadarActivite.propTypes = {
    utilisateur: PropTypes.string
}

export default RadarActivite