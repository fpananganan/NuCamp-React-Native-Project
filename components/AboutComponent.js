import React, { Component } from 'react'; 
import { ScrollView } from 'react-native'; 
import { FlatList } from 'react-native'; 
import { PARTNERS } from '../shared/partners'; 
import { ListItem } from 'react-native-elements'; 

class About extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            partners: PARTNERS
        }; 
    }

    static navigationOptions = {
        title: 'About Us'
    }

    renderPartner({item}) {
        return (
            <ListItem 
                title={item.name}
                subtitle={item.description}
                leftAvatar={{ source: require ('./images/bootstrap-logo.png')}}
            />    
        ); 
    };  

    render() {
        return (
            <ScrollView>
                <Mission />

                <Card title='Community Partners'>
                    <FlatList
                        data={this.state.partners}
                        renderItem={renderPartnerItem}
                        keyExtractor={item => item.id.toString()}
                    />    
                </Card>
            </ScrollView>     
        ); 
    }   
}

export default About; 