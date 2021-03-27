import React, { Component } from 'react';

import { Tabs,Tab } from 'react-bootstrap';

import BusinessTab from './category_section/BusinessTab';
import CultureTab from './category_section/CultureTab';
import PoliticsTab from './category_section/PoliticsTab';
import SportsTab from './category_section/SportsTab';

class AllCategoryTab extends Component {
  render() {
    return (
        <div className="all-cat-tab">
            <Tabs defaultActiveKey="business" id="uncontrolled-tab-example">
                <Tab eventKey="business" title="Business">
                    <BusinessTab/>
                </Tab>
                <Tab eventKey="culture" title="Culture">
                    <CultureTab/>
                </Tab>
                <Tab eventKey="politics" title="Science">
                    <PoliticsTab/>
                </Tab>
                <Tab eventKey="sports" title="Sports">
                    <SportsTab/>
                </Tab>
            </Tabs>
        </div>
    );
  }
}

export default AllCategoryTab;
