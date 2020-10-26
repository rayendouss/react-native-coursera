import React, { Component } from 'react';

import { 
    Card
} from 'react-native-elements';
import { Text, ScrollView, View } from 'react-native';

class Contact extends Component {
   render(){
       return(
        <Card title="Contact Information">
        <Text style={{ margin: 10, lineHeight: 50, fontSize: 18 }}>
          {`121, Clear Water Bay Road
        Clear Water Bay, Kowloon
        HONG KONG
        Tel: +852 1234 5678
        Fax: +852 8765 4321
        Email:confusion@food.net`}
        </Text>
      
        </Card>
       )
   }
}
export default Contact;