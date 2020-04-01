import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'

const Giver = ({t, skills, typeReturn}) =>
    typeReturn === 'skills' 
        ? (
       

           
            <Breadcrumbs>
                {skills.map((skills, index) =>
                <Typography 
                    variant="subtitle2"
                    key={index}
                    color="textSecondary">{t(skills)}</Typography>
                )}
            </Breadcrumbs>


        )

        : (
        <>
            <Typography variant="h6" component="h2">
                {t('offer')}
            </Typography>
            <Breadcrumbs>
                {skills.map((skills, index) =>
                <Typography 
                    key={index}
                    color="textSecondary">{t(skills)}</Typography>
                )}
            </Breadcrumbs>
      </>
    )

export default Giver