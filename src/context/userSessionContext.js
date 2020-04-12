import React, {useState,createContext, useEffect} from 'react';
import {auth, createUserProfileDocument} from '../firebase'

export const UserSessionContext = createContext()

const UserSessionProvider = ({children}) => {
    const [user, setUser] = useState(null)

    useEffect(() =>{
        auth.onAuthStateChanged(async userAuth =>{
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth)
                userRef.onSnapshot(snapshot =>{
                    setUser({uid: snapshot.uid, ...snapshot.data()})
                })

            }
            setUser(userAuth)
        })
    }, [setUser])

    return (
        <UserSessionContext.Provider value={{user}}>
            {children}
        </UserSessionContext.Provider>
    );
}

export default UserSessionProvider;
