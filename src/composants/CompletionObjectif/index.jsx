import PropTypes from 'prop-types'
import { useFetch } from '../../utils/hooks'
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts'

/**
 * Displays the Daily Goal Completion using a RadialBarChart
 * @param {object} props
 * @returns {jsx}
 */
function CompletionObjectif(props) {
    const { donnees, isLoading, erreur } = useFetch('http://localhost:3000/user/' + props.utilisateur)
  
  if (erreur) {
    return <div>Une erreur s'est produite ! {erreur}</div>;
  }
    
  var monScore

  function chargeScore() {
      if(donnees.data.hasOwnProperty('todayScore')) {
        monScore = [{valeur: donnees.data.todayScore * 100, fill: 'red'}] // Karl
    } else {
        monScore = [{valeur: donnees.data.score * 100, fill: 'red'}] // Cecilia
    }
  }

    return (
        <div className='graphesDeuxiemeRangee'>
            {isLoading ? (
            <div>
            <div>Chargement des données…</div>
            </div>
            ) : (
            <div className='conteneurScore'>
                {chargeScore()}
                <ResponsiveContainer width="100%" height={190} >
                    <RadialBarChart                        
                        innerRadius={80}
                        outerRadius={100}
                        data={monScore}
                        barSize={10}
                        startAngle={90}
                        endAngle={450}
                        >
                        <PolarAngleAxis
                            type="number"
                            domain={[0, 100]}
                            angleAxisId={0}
                            tick={false}
                        />
                        <RadialBar                            
                            cornerRadius={10}
                            clockwise
                            dataKey="valeur"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <h2 id="titreScore">Score</h2>
                <div id="scoreMilieux">
                    <p id="pScore"><span id="score">{monScore[0].valeur}%</span><br /> de votre objectif</p>
                </div>
            </div>
            )}
        </div>
    )
}

CompletionObjectif.propTypes = {
    sessions: PropTypes.object
}

export default CompletionObjectif