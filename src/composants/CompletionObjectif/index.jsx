import PropTypes from 'prop-types'
import { useFetch } from '../../utils/hooks'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

/**
 * Displays the Daily Goal Completion using a PieChart
 * @param {object} props
 * @returns {jsx}
 */
function CompletionObjectif(props) {
    const { donnees, isLoading, erreur } = useFetch('http://localhost:3000/user/' + props.utilisateur)
  
  if (erreur) {
    return <div>Une erreur s'est produite ! {erreur}</div>;
  }
    
  var monScore
  var camembert

  function chargeScore() {
      if(donnees.data.hasOwnProperty('todayScore')) {
        monScore = donnees.data.todayScore // Karl
    } else {
        monScore = donnees.data.score // Cecilia
    }
    camembert = [
        { score:  monScore},
        { score: 1 - monScore },
    ]
  }

  var camembertInterieur = [
    { score:  1},
    { score: 0 }
]

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
                <PieChart width={170} height={170} >
                    
                    <Pie // This pie is just used to paint a white circle inside the second pie
                        data={camembertInterieur}
                        dataKey="score"
                        innerRadius={0} outerRadius={85}
                    >
                        <Cell // % done
                            fill="#ffffff"
                            cornerRadius="50%"
                        />
                        <Cell // % undone
                        fill="#ffffff"
                        cornerRadius="50%"
                        />
                    </Pie>
                    <Pie
                        data={camembert}
                        paddingAngle={5}
                        dataKey="score"
                        innerRadius={85}
                        outerRadius={95}
                        startAngle={90}
                        endAngle={360}
                    >
                        <Cell // % done
                            fill="#ff0000"
                            cornerRadius="50%"
                            stroke="#fbfbfb"
                        />
                        <Cell // % undone
                            fill="transparent"
                            cornerRadius="50%"
                            stroke="#fbfbfb"
                        />
                    </Pie>
                </PieChart>
                </ResponsiveContainer>
                <h2 id="titreScore">Score</h2>
                <div id="scoreMilieux">
                    <p id="pScore"><span id="score">{monScore*100}%</span><br /> de votre objectif</p>
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