import React, {useState, createContext} from 'react'

export const OwnProfileContext = createContext()

const OwnProfileProvider = ({children}) =>{
    const [ownProfile, setToggleOwnProfile] = useState(false)

    const toggleOwnProfile = () => {
        setToggleOwnProfile(!ownProfile)
    }

    return(
        <OwnProfileContext.Provider value={{ ownProfile, toggleOwnProfile }}>
            {children}
        </OwnProfileContext.Provider>
    )
}

export default OwnProfileProvider 