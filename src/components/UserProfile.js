import React from 'react'

import ProfileData from './ProfileData'


export default function(props){
    const { user} = props
    return(
        <>  
       
        <div style={{
            width: 320,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'}}
            >
            <br/>   
            <ProfileData
                textSize="h5"
                name={user.name}
                img={user.image}
            />
          </div>
        </>

    )
}