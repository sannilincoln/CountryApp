import { View, Text,StyleSheet,TouchableOpacity, SafeAreaView, TextInput, ActivityIndicator,ScrollView } from 'react-native'
import React, {useState,useEffect } from 'react'
import { APIDATA, initial } from '../services/apiService';
import { useQuery } from '@apollo/client';





const Home = () => {


    const { loading, error, data } = useQuery(APIDATA);
     const [Continent, setContinent] = useState(0);
     const [contName, setContName] = useState('All Countries');
     const [masterData, setMasterData] = useState([]);
    const [search, setSearch] = useState('')
   
  if (loading){  
      return(
                <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
                <ActivityIndicator size="large" color="#00ff00" />
                    <Text style ={{textAlign:'center'}}>Loading...</Text>
                </View>
            )
    }   
    
   

    const waiting = () => {
        return( <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
         <ActivityIndicator size="large" color="#00ff00" />
                 <Text style ={{textAlign:'center'}}>Loading...</Text>
            </View>)
            }
        const err = () =>{
            return( 
                <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
                    <Text style ={{textAlign:'center'}}> error: {error}</Text>
                </View>
                    )} 

    const allData = [
        data.countries,
        data.continents[0].countries, // Africa
     data.continents[2].countries,      // Asia
     data.continents[3].countries,      // Europe
     data.continents[4].countries,      // North America
     data.continents[6].countries,        // South America
    ]
   

 const searhFilter = (text) => {
     if (text) {
         const newData = masterData.filter((item) =>{
             const itemData = item.name ? item.name.toUpperCase() 
             : ' '.toUpperCase()
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
         });
            // set allData[Continent] = newDAta
            allData[Continent] = allData[Continent]=[].push(newData)
            
            
            setSearch(text)
     }else{
        // setContinent(masterData)
        // set allData[Continent] = masterData
        allData[Continent] = allData[Continent]=[].push(masterData)

         setSearch(text);
     }
 }

 const EuropeFilter = () =>{
     setContinent(3);
     setContName(data.continents[3].name);
     setMasterData(allData[3])  
 }
 const AfricaFilter = () =>{
    setContinent(1)
     setContName(data.continents[0].name);
    setMasterData(allData[1])

 }
 const AsiaFilter = () =>{
     setContinent(2)
     setContName(data.continents[2].name);
    setMasterData([2])


 }
 const NorthAmericaFilter = () =>{
     setContinent(4)
     setContName(data.continents[4].name);
    setMasterData([4])


 }
 const SouthAmericaFilter = () =>{
     setContinent(5)
     setContName(data.continents[6].name);
    setMasterData([5])


 }
  


  return (
    <View style={styles.container}>
        

        <Text  style={styles.headerText} >List of Continent with their Countries</Text>
        <View style={styles.searchBox}>
           <TextInput
           placeholder='Search Countries'
           value ={search}
           onChangeText={(text)=> searhFilter(text)}
           />
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        
          

           <TouchableOpacity 
           onPress={AfricaFilter}
           >
            <View style={styles.filter}>
                <Text style={styles.filterText}>Africa</Text>
            </View>
            </TouchableOpacity>

           <TouchableOpacity 
           onPress={AsiaFilter}
           >
            <View style={styles.filter}>
                <Text style={styles.filterText}>Asia</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity 
           onPress={EuropeFilter}
           >
            <View style={styles.filter}>
                <Text style={styles.filterText}>Europe</Text>
            </View>
            </TouchableOpacity>

           <TouchableOpacity 
           onPress={NorthAmericaFilter}
           >
            <View style={styles.filter}>
                <Text style={styles.filterText}>North</Text>
                <Text style={styles.filterText}>America</Text>

            </View>
            </TouchableOpacity>

           <TouchableOpacity 
           onPress={SouthAmericaFilter}
           >
            <View style={styles.filter}>
                <Text style={styles.filterText}>South</Text>
                <Text style={styles.filterText}>America</Text>
            </View>
            </TouchableOpacity>
        </View>

        <View style={styles.grouping}>
            <Text style={styles.groupingText}>{contName}</Text>
        </View>

        <ScrollView>
        { allData[Continent].map(({name,phone,currency,emoji})=>{
            return(                       
                <View style={styles.content}
                key={emoji}
                >                
                   <View style={styles.dataField}>
                        <Text   style={{fontWeight:'700'}}>Name: {name}</Text>
                        <Text>Currency: {currency}</Text>
                        <Text>Flag: {emoji}</Text>
                    </View>
                    
                </View>                    
            )
        })}


        </ScrollView>
           
   
    </View>
  ) }

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal:10,
        // backgroundColor: '#eee'
    },
    searchBox:{ 
        height:40,
        padding:5,
        width:'100%',
        // marginTop:60,
        borderWidth:0,
        backgroundColor: '#9dc9c5',
        //borderColor:'#9dc9c5',
        borderRadius:15,
        marginBottom: 5
    },
    content:{ 
        flexDirection: 'row',
        marginTop:5
        // justifyContent:'space-between',
        // alignItems:'center',
        },
    grouping:{
        justifyContent:'center',
        alignItems:'center',        
        height:40,
        //  width:120,
        borderRadius:15,
        // padding:5,
        borderWidth:0,
        backgroundColor: '#0a9184',
        //borderColor:'red',
        marginVertical:5
    },
    groupingText:{
        fontWeight:'700',
        fontSize:15,
        color: '#0f2422',
        letterSpacing:2,
    },
    dataField:{
        width:'100%',
        // height: 65,
        // backgroundColor:'green',
        // marginLeft:5,
        padding:5,
        borderWidth:1,
        borderColor:'#0a9184',
        borderRadius:10

        
        },
    small:{
        width:'20%',
        // height:65,
        backgroundColor:'blue'
        },
    filter:{
        width: 65,
        height:65,
        // marginLeft:15,
        justifyContent:'center',
        borderRadius:10,
        padding:5,
        borderWidth:2,
        borderColor:'#0a9184',
        marginVertical:5
    },
    filterText:{
        fontSize: 12,
        textAlign:'center', 
        color: '#545959', 
        fontWeight:'700', 
        letterSpacing: 0.8
    },
    headerText:{
        color: '#545959',
        marginTop:50,
        textAlign:'center',
        fontWeight:'700',
        marginBottom:10,
        fontSize:20

    }
    
    
})
export default Home





{/* <FlatList 
          data={missions}
          renderItem={(({item})  =>{
          return(
                <>
                <View style={styles.content}>
                        
                        <View style={styles.dataField}>
                            <Text   style={{fontWeight:'700'}}> {item.name}</Text>
                            <Text
                            numberOfLines={3}
                            >{item.description}</Text>
                            </View>
                </View>                 
                </>
            )
          })}
          keyExtractor={item => item.id}
        /> */}

         // setCapsules(data.capsules);
    // setMissions(data.issions);
    // setShips(data.ships);
    // setRockets(data.rockets);
    // setHistoriesResult(data.);


    // { 
        //     return(
        //         <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
        //         <ActivityIndicator size="large" color="#00ff00" />
        //             <Text style ={{textAlign:'center'}}>Loading...</Text>
        //         </View>
        //     )
        //     } else if (error){
        //         return( 
        //             <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
        //                 <Text style ={{textAlign:'center'}}> error: {error}</Text>
        //             </View>
        //         )
        //     } else

            //  const [Europe, setEurope] = useState(data.continents[3].countries);
    //  const [Asia, setAsia] = useState(data.continents[2].countries);
    //  const [Africa, setAfrica] = useState(data.continents[0].countries);
    //  const [NorthAmerica, setNorthAmerica] = useState(data.continents[4].countries);
    //  const [SouthAmerica, setSouthAmerica] = useState(data.continents[6].countries);
    //  const [Continent, setContinent] = useState(Europe);
    //  const [contName, setContName] = useState(data.continents[3].name);

    //  const [masterData, setMasterData] = useState(Continent);
    // const [search, setSearch] = useState('')   

     // const Africa = data.continents[0].countries;
    // const Asia = data.continents[2].countries;
    // const NorthAmerica = data.continents[4].countries;
    // const Oceania = data.continents[5].countries;
    // const SouthAmerica = data.continents[6].countries;

    // if (error) return <Text>Error... </Text>;


     // useEffect(()=> {
    //     if (data){
    //         const  all = data.countries
    //          incomingData(all)
    //     }else if (error){
    //         err();
            
    //     }},[data]) 
    
    // const incomingData = (all) => {
    //                 setCountries(all)
    //     setAfrica(data.continents[0].countries);
    //     setAsia(data.continents[2].countries);
    //     setEurope(data.continents[3].countries);
    //     setNorthAmerica(data.continents[4].countries);
    //     setSouthAmerica(data.continents[6].countries);
    //     setMasterData(Continent);
    // }
   

    // console.log(data.countries);