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
// import React from 'react';
// import { View, Button, Alert, StyleSheet, ScrollView, Image, Text, StatusBar, SectionList, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome6';
//
// const datasource = [
//     {
//         data: [
//             {key: 'Venusaur', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_3-2x.png'},
//             {key: 'Metapod', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_11-2x.png'}
//         ],
//         type: 'Grass', bgColor: 'green', icon: 'leaf'
//     },
//     {
//         data: [
//             {key: 'Blastoise', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_9-2x.png'},
//             {key: 'Kingler', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_99-2x.png'},
//         ],
//         type: 'Water', bgColor: 'blue', icon: 'water'
//     },
//     {
//         data: [
//             {key: 'Charizard', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_6-2x.png'},
//             {key: 'Arcanine', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_59-2x.png'},
//         ],
//         type: 'Fire', bgColor: 'red', icon: 'fire'
//     }
// ];
//
// const styles = StyleSheet.create({
//     headerText: {
//         fontSize: 22,
//         fontWeight: 'bold',
//         color: 'white',
//         marginLeft: 10,
//     },
//     headerContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 10,
//     },
//
//     textStyle: {
//         fontSize: 15,
//         margin: 10,
//         textAlign: 'left',
//         fontWeight: 'bold',
//     },
//     opacityStyle: {
//         flexDirection: 'row',
//         borderWidth: 1,
//         alignItems: 'center',
//         backgroundColor: 'lavender',
//         borderRadius: 10,
//         marginVertical: 2,
//     },
//     imageStyle: {
//         width: 225,
//         height: 310,
//         margin: 10,
//     },
//     buttonStyle: {
//         borderWidth: 1,
//         borderColor: 'black',
//         borderRadius: 1,
//         padding: 20,
//     },
// });
//
//
// const renderItem = ({ item }) => {
//     return (
//         <TouchableOpacity style = {styles.opacityStyle}>
//             <Text style={styles.textStyle}>{item.key}</Text>
//             <Image source = {{uri: item.image}} style = {styles.imageStyle} />
//         </TouchableOpacity>
//     )
// };
//
// const App = () => {
//     return (
//         <View style={{ marginBottom: 50, margin: 10, marginTop: 35, paddingBottom: 100 }}>
//             <StatusBar hidden={true} />
//             <View style={styles.buttonStyle}>
//                 <Button title="ADD POKEMON" onPress={() => Alert.alert("To be implemented during next lesson!")} />
//             </View>
//             <SectionList
//                 sections={datasource}
//                 renderItem={renderItem}
//                 renderSectionHeader={({ section: { type, bgColor, icon } }) => (
//                     <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
//                         <Icon name={icon} size={20} color="white" />
//                         <Text style={styles.headerText}>{type}</Text>
//                     </View>
//                 )}
//             />
//         </View>
//     );
// };
//
// export default App;

// ======================== Exercise4 ========================
import React from 'react';
import { View, Button, Alert, StyleSheet, ScrollView, Image, Text, StatusBar, SectionList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const datasource = [
    {
        data: [
            {key: 'Call of Duty: Modern Warfare', image: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Call_of_Duty_Modern_Warfare_%282019%29_cover.jpg'},
            {key: 'Overwatch', image: 'https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg'},
            {key: 'Counter-Strike 2', image: 'https://upload.wikimedia.org/wikipedia/en/f/f2/CS2_Cover_Art.jpg'}
        ],
        type: 'First Person Shooter', bgColor: 'green', icon: 'crosshairs'
    },
    {
        data: [
            {key: 'The Witcher 3: Wild Hunt', image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg'},
            {key: 'Elden Ring', image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg'},
            {key: 'Final Fantasy XV', image: 'https://upload.wikimedia.org/wikipedia/en/5/5a/FF_XV_cover_art.jpg'}
        ],
        type: 'RPG', bgColor: 'red', icon: 'dragon'
    },
    {
        data: [
            {key: 'Portal 2', image: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Portal2cover.jpg'},
            {key: 'Tetris Effect', image: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Tetris_Effect_cover.jpg'},
            {key: 'The Witness', image: 'https://upload.wikimedia.org/wikipedia/en/f/f4/The_Witness_cover.jpg'}
        ],
        type: 'Puzzle', bgColor: 'purple', icon: 'puzzle-piece'
    },
    {
        data: [
            {key: 'FIFA 23', image: 'https://upload.wikimedia.org/wikipedia/en/a/a6/FIFA_23_Cover.jpg'},
            {key: 'NBA 2K24', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/48/NBA_2K24_cover_art.jpg/220px-NBA_2K24_cover_art.jpg'},
            {key: 'Madden NFL 23', image: 'https://upload.wikimedia.org/wikipedia/en/7/71/Madden_23_cover.jpeg'},
        ],
        type: 'Sports', bgColor: 'blue', icon: 'football'
    }
];

const gameRatings = {
    'Call of Duty: Modern Warfare': '6/10',
    'Overwatch': '9/10',
    'Counter-Strike 2': '9.5/10',
    'The Witcher 3: Wild Hunt': '10/10',
    'Elden Ring': '100/10 !',
    'Final Fantasy XV': '9/10',
    'Portal 2': '9.5/10',
    'Tetris Effect': '6/10',
    'The Witness': '7/10',
    'FIFA 23': '6/10',
    'NBA 2K24': '4/10',
    'Madden NFL 23': '0/10',
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 35,
        backgroundColor: '#F5F5F5',
        paddingBottom: 50
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 15,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4A90E2',
        letterSpacing: 1.5,
        textShadowRadius: 4,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    sectionText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        marginVertical: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 3,
    },
    itemImage: {
        width: 120,
        height: 120,
    },
    itemText: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    statusBar: {
        hidden: true,
    },
});

const renderGameItem = ({ item }) => (
    <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => Alert.alert('Rating', `${item.key}: ${gameRatings[item.key]}`)}
    >
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <Text style={styles.itemText}>{item.key}</Text>
    </TouchableOpacity>
);

const renderSectionHeader = ({ section: { type, bgColor, icon } }) => (
    <View style={[styles.sectionHeader, { backgroundColor: bgColor }]}>
        <Icon name={icon} size={20} color="white" />
        <Text style={styles.sectionText}>{type}</Text>
    </View>
);

const App = () => {
    return (
        <View style={styles.container}>
            <StatusBar hidden={styles.statusBar.hidden} />

            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>🎮 VIDEO GAME CATEGORIES</Text>
            </View>

            <SectionList
                sections={datasource}
                renderItem={renderGameItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item, index) => item.key + index}
            />
        </View>
    );
};

export default App;
