import React from 'react'
import allClubs from '../data/AllClubs'
import { Link } from 'react-router-dom'
import ClubCard from '../components/ClubCard'
import AllClubsCard from '../components/AllClubsCard'

const Clubs = () => {
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
            {allClubs.map((club) => (
                
                    <AllClubsCard club={club}  />
                
            ))}
        </div>
    </div>
  )
}

export default Clubs