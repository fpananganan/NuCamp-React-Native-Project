import React, { Component } from 'react'; 
import { Text, ScrollView } from 'react-native'; 
import { Card } from 'react-native-elements'; 

class Contact extends Component {

    render() {
        return (
            <ScrollView wrapperStyle={{margin:20}}>    
                <Card title='Contact Information'>
                    <Text> 
                        1 Nucamp Way {"\n"} 
                        Seattle, WA 98001 {"\n"}
                        U.S.A {"\n"}
                    </Text>
                    <Text>
                        Phone: 1-206-555-1234 {"\n"}
                        Email: campsites@nucamp.co
                    </Text>
                </Card>
            </ScrollView>
        ); 
    }

    static navigationOptions = {
        title: 'Contact Us'
    }
}

export default Contact; 