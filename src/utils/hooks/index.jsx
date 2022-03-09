import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

/**
 * Fetch asynchronsouly the data given at <adresse>
 * @param {string} adresse
 * @returns {jsx}
 */
export function useFetch(adresse) {
  const [donnees, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [erreur, seterreur] = useState(false)

  useEffect(() => {
      
    if (!adresse) {
      seterreur(true)
      setLoading(false)
      return
    }
    
    const fetchData = async () => {
      try {
        const response = await fetch(adresse)
        const mesDonnees = await response.json()
        setData(mesDonnees)
      } catch (err) {
        console.log(err)
        seterreur(true)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    if(adresse !== ''){
        fetchData()
    }
  }, [adresse])
  return { isLoading, donnees, erreur }
}

useFetch.propTypes = {
  adresse: PropTypes.string
}