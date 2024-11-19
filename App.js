// ======================== Exercise1 ========================
// import React from 'react';
// import {View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar} from 'react-native';
//
// const datasource = [
//     {key: 'a'},
//     {key: 'b'},
//     {key: 'c'},
//     {key: 'd'},
//     {key: 'e'},
//     {key: 'f'},
//     {key: 'g'},
//     {key: 'h'},
//     {key: 'i'},
//     {key: 'j'},
//     {key: 'k'},
//     {key: 'l'},
//     {key: 'm'},
//     {key: 'n'},
//     {key: 'o'},
//     {key: 'p'},
//     {key: 'q'},
//     {key: 'r'},
//     {key: 's'},
//     {key: 't'},
//     {key: 'u'},
//     {key: 'v'},
//     {key: 'w'},
//     {key: 'x'},
//     {key: 'y'},
//     {key: 'z'}
// ];
//
// const styles = StyleSheet.create({
//     opacityStyle: {
//         borderWidth: 1
//     },
//     textStyle: {
//         fontSize: 15,
//         margin: 10,
//         textAlign: 'left'
//     }
// });
//
// const renderItem = ({item}) => {
//     return(
//         <TouchableOpacity style={styles.opacityStyle}>
//             <Text style={styles.textStyle}>{item.key}</Text>
//         </TouchableOpacity>
//     );
// };
//
// const App = () => {
//     return (
//         <View style={{marginBottom: 20}}>
//             <StatusBar hidden={true}/>
//             <FlatList data={datasource} renderItem={renderItem} />
//         </View>
//     )
// };
//
// export default App;

// ======================== Exercise2 ========================
// import React from 'react';
// import {View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar, SectionList} from 'react-native';
//
// const datasource = [
//     {
//         data: [
//             {key: 'a'},
//             {key: 'e'},
//             {key: 'i'},
//             {key: 'o'},
//             {key: 'u'}
//         ],
//         title: 'Vowels', bgColor: 'skyblue'
//     },
//     {
//         data: [
//             {key: 'b'},
//             {key: 'c'},
//             {key: 'd'},
//             {key: 'f'},
//             {key: 'g'},
//             {key: 'h'},
//             {key: 'j'},
//             {key: 'k'},
//             {key: 'l'},
//             {key: 'm'},
//             {key: 'n'},
//             {key: 'p'},
//             {key: 'q'},
//             {key: 'r'},
//             {key: 's'},
//             {key: 't'},
//             {key: 'v'},
//             {key: 'w'},
//             {key: 'x'},
//             {key: 'y'},
//             {key: 'z'},
//         ],
//         title: 'Consonants', bgColor: 'yellow'
//     }
// ];
//
// const styles = StyleSheet.create({
//     headerText: {
//         fontSize: 20,
//         margin: 10,
//         textAlign: 'center',
//         fontWeight: 'bold',
//     },
//     opacityStyle: {
//         borderWidth: 1
//     },
//     textStyle: {
//         fontSize: 15,
//         margin: 10,
//         textAlign: 'left'
//     }
//
// });
//
// const renderItem = ({item}) => {
//     return(
//         <TouchableOpacity style = {styles.opacityStyle}>
//             <Text style={styles.textStyle}>{item.key}</Text>
//         </TouchableOpacity>
//     );
// };
//
// const App = () => {
//     return (
//         <View style={{marginBottom: 50, margin: 10, marginTop: 35}}>
//             <StatusBar hidden={true}/>
//             <SectionList sections={datasource} renderItem={renderItem}
//                 renderSectionHeader={({section:{title, bgColor}})=>(
//                     <Text style={[styles.headerText, {backgroundColor: bgColor}]}>{title}</Text>
//                 )}
//             />
//         </View>
//     )
// };
//
// export default App;

// ======================== Exercise3 ========================
import React from 'react';
import { View, Button, Alert, StyleSheet, ScrollView, Image, Text, StatusBar, SectionList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const datasource = [
    {
        data: [
            {key: 'Venusaur', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_3-2x.png'},
            {key: 'Metapod', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_11-2x.png'}
        ],
        type: 'Grass', bgColor: 'green', icon: 'leaf'
    },
    {
        data: [
            {key: 'Blastoise', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_9-2x.png'},
            {key: 'Kingler', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_99-2x.png'},
        ],
        type: 'Water', bgColor: 'blue', icon: 'water'
    },
    {
        data: [
            {key: 'Charizard', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_6-2x.png'},
            {key: 'Arcanine', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_59-2x.png'},
        ],
        type: 'Fire', bgColor: 'red', icon: 'fire'
    }
];

const styles = StyleSheet.create({
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },

    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    opacityStyle: {
        flexDirection: 'row',
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor: 'lavender',
        borderRadius: 10,
        marginVertical: 2,
    },
    imageStyle: {
        width: 225,
        height: 310,
        margin: 10,
    },
    buttonStyle: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 1,
        padding: 20,
    },
});


const renderItem = ({ item }) => {
    return (
        <TouchableOpacity style = {styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
            <Image source = {{uri: item.image}} style = {styles.imageStyle} />
        </TouchableOpacity>
    )
};

const App = () => {
    return (
        <View style={{ marginBottom: 50, margin: 10, marginTop: 35, paddingBottom: 100 }}>
            <StatusBar hidden={true} />
            <View style={styles.buttonStyle}>
                <Button title="ADD POKEMON" onPress={() => Alert.alert("To be implemented during next lesson!")} />
            </View>
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { type, bgColor, icon } }) => (
                    <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
                        <Icon name={icon} size={20} color="white" />
                        <Text style={styles.headerText}>{type}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default App;

