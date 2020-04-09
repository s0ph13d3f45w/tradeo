import React from 'react'
import {Button} from '@material-ui/core'
import MainLayout from '../layouts/MainLayout'
import {firestore} from '../firebase'

const Admin = ()=>{
    // const { localData } = useContext(UserContext)


    // const sendData = async () =>{
    //     localData.map(async user =>{
    //         await firestore.collection('users').add({...user})
    //     })
    //     // await firestore.collection('users').add({...localData})
    //     console.log(localData)
    // }

    const getData = async() =>{
        const snapshot = await firestore.collection('users').get()
        const users = snapshot.docs.map(user => {return {...user.data()}})
        console.log(users)
    }
    return(
        <MainLayout>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 70}}>
                {/* <Button variant="outlined"
                    onClick={sendData}>Send Data</Button> */}
                <Button variant="outlined"
                    onClick={getData}>Get Data</Button>
            </div>
        </MainLayout>
    )
}

export default Admin