import React from 'react';
import { Container, Tab } from 'semantic-ui-react'
import {RechartsAreaChart} from "../Components/chart";
import Footer from '../Containers/footer/footer'

const panes = [
    { menuItem: 'Temp', render: () => <Tab.Pane><RechartsAreaChart/></Tab.Pane> },
    { menuItem: 'Hummidty', render: () => <Tab.Pane><RechartsAreaChart/></Tab.Pane> },
    { menuItem: 'PH', render: () => <Tab.Pane><RechartsAreaChart/></Tab.Pane> },
  ]
 export const Dashboard = () => {
    return (
        <>
        <div style={{"margin-top": "20px"}}>
            <Container>
            <Tab
                panes={panes}
                menu={{ fluid: true, vertical: true, tabular: true, color: 'green' }}
            />
            </Container>
        </div>
        <Footer/>
        </>
    )
}
  
  
  