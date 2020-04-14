import React from 'react'
import {Breadcrumbs, Typography, List} from '@material-ui/core'

const Giver = ({t, skills, typeReturn, classObj}) =>
    typeReturn === 'skills' 
        ? (
    
            <Breadcrumbs 
                aria-label="breadcrumbs">
                <List className={classObj.crumbs}
                aria-label="typography">
                {skills.map((skills, index) =>
                <Typography 
                    align="center"
                    variant="subtitle2"
                    key={index}
                    color="textSecondary">{t(skills)}</Typography>
                )}
                </List>
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