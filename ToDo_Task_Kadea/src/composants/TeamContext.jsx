import React, { createContext } from 'react'

export const ProfilContext = createContext();

const TeamContext = ({children}) => {
  return (
    <ProfilContext.Provider value={{
      firstName:'Jethro',
      lastName:'Muluba',
      avatar:'ldskvkldfnvjkv',
      description:'dsnfjefkdnsvjf'
    }}>
      {children}
    </ProfilContext.Provider>
  )
}

export default TeamContext