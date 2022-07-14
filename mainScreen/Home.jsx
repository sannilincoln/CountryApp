import { View, Text,StyleSheet,TouchableOpacity, SafeAreaView, TextInput, ActivityIndicator,ScrollView } from 'react-native'
import React, {useState,useEffect } from 'react'
import { APIDATA, initial } from '../services/apiService';
import { useQuery } from '@apollo/client';





const Home = () => {


    const { loading, error, data } = useQuery(APIDATA);
     const [Continent, setContinent] = useState(0);
     const [contName, setContName] = useState('All Countries');
     const [allCont,setAllCont ] = useState(true);
     const [contData, setcontData] = useState([]);
     const [masterData, setMasterData] = useState([]);
    const [search, setSearch] = useState('')
   
  if (loading){  
      return(
                <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
                <ActivityIndicator size="large" color="#00ff00" />
                    <Text style ={{textAlign:'center'}}>Loading...</Text>
                </View>
            )
    } else if (error){
            return( 
                <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
                    <Text style ={{textAlign:'center'}}> error: {error}</Text>
                </View>
         )} 

    

    
      
              
   
    

 const searchFilter = (text) => {
     if (text) {
         const newData = masterData.filter((item) =>{
             const itemData = item.name ? item.name.toUpperCase() 
             : ' '.toUpperCase()
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
         });
          
            setcontData(newData)
            setSearch(text)
     }else{
        
        setcontData(masterData)
         setSearch(text);
     }
 }

 const EuropeFilter = () =>{
     setAllCont(false) 
     setcontData(data.continents[3].countries)
     setContName(data.continents[3].name);
     setMasterData(data.continents[3].countries) 
 }
 const AfricaFilter = () =>{
    setAllCont(false) 
    setcontData(data.continents[0].countries)
     setContName(data.continents[0].name);
    setMasterData(data.continents[0].countries)

 }
 const AsiaFilter = () =>{
    setAllCont(false) 
    setcontData(data.continents[2].countries)
     setContName(data.continents[2].name);
    setMasterData(data.continents[2].countries)


 }
 const NorthAmericaFilter = () =>{
    setAllCont(false) 
    setcontData(data.continents[4].countries)
     setContName(data.continents[4].name);
    setMasterData(data.continents[4].countries)


 }
 const SouthAmericaFilter = () =>{
    setAllCont(false) 
    setcontData(data.continents[6].countries)
     setContName(data.continents[6].name);
    setMasterData(data.continents[6].countries)


 }
  


  return (
    <View style={styles.container}>
        

        <Text  style={styles.headerText} >List of Continent with their Countries</Text>
        <View style={styles.searchBox}>
           <TextInput
           placeholder='Search Countries'
           value ={search}
           onChangeText={(text)=> searchFilter(text)}
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
        { allCont ? data.countries.map(({name,phone,currency,emoji})=>{
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
        })
        : contData.map(({name,phone,currency,emoji})=>{
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
        })
        }


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

