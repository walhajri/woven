import React, { useState, useEffect } from 'react';

async function profileListData(num) {
  console.log('here');
  
  //TODO: put all string in one place
  let DATA = [
    {
      //id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      
      title: 'My Account',
      iconName: 'person',
      description: 'Click here to edit your account',
      numberOf: 'None',
      
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Number of Jobs',
      iconName: 'briefcase',
      description: 'None',
      numberOf: num+'',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Logout',
      iconName: 'exit-outline',
      description: 'None',
      numberOf: 'None',
    },
  ];  
  console.log('data ',DATA.length);
  return DATA;
}

export default profileListData;