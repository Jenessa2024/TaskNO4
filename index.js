
import { StyleSheet, Text, View,SafeAreaView,Platform ,ScrollView} from 'react-native';
import PokemonCard from './components/PokemonCard';
export default function App() {


  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/Bulbasaur.jpg"),
    type: "Grass", 
    hp:45,
    moves: ["Tackle","Vine Whip","Leech Seed","Growl"],
    weaknesses:["Fire","Ice","Flying","Psychic"], 
  };


  const charmanderData = {
    name: "Charmander",
    image: require("./assets/Charmander.jpg"),
    type: "Fire",
    hp:39,
    moves: ["Scratch","Ember","Growl","Leer"],
    weaknesses:["Water","Rock"], 
  };

  const squirtData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"),
    type: "Water",
    hp:44,
    moves: ["Tackle","Water Gun","Tail Whip","Withdraw"],
    weaknesses:["Electric","Gass"], 
  };

  const sandshrewData = {
    name: "Sandshrew",
    image: require("./assets/sandshrew.png"),
    type: "Ground",
    hp:50,
    moves: ["Defense Curl","Scratch","Rollout","Bulldoze"],
    weaknesses:["Water","Grass","Ice"], 
  };



  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.jpg"),
    type: "Electric",
    hp:35,
    moves: ["Quick Attack","Thunder Bolt","Tail Whip","Growl"],
    weaknesses:["Ground"], 
  };

  const bedrillData = {
    name: "Beedrill",
    image: require("./assets/beedrill.jpg"),
    type: "Poison",
    hp:65,
    moves: ["Bug Bite","String Shot","	Focus Energy","Venoshock"],
    weaknesses:[" Psychic","Rock"], 
  };

  const suicuneData = {
    name: "Suicune",
    image: require("./assets/suicune.jpg"),
    type: "Water",
    hp:100,
    moves: ["Bite "," Calm Mind ","Roar","Ice"],
    weaknesses:["Electric","Grass"], 
  };
  
  const KyogreData = {
    name: "Kyogre",
    image: require("./assets/suicune.jpg"),
    type: "Water",
    hp:400,
    moves: [" Ancient Power"," Rock"],
    weaknesses:["Electric","Grass"], 
  };


  const ArticunoData = {
    name: "Articuno",
    image: require("./assets/articuno.jpg"),
    type: "Ice",
    hp:90	,
    moves: [" Tailwind"," Freeze-Dry","	Roost","	Ice Beam"],
    weaknesses:["Electric","Rock","Fire","Steel"], 
  };

  const RaikouData = {
    name: "Raikou",
    image: require("./assets/Raikou.jpg"),
    type: "Electric",
    hp:90	,
    moves: ["Bite ","Calm Min","	 Roar","	Psychic"],
    weaknesses:["Ground"], 
  };
  return (
    <View style={styles.container}>
      <ScrollView>
      <PokemonCard {...pikachuData}/>
      <PokemonCard {...squirtData}/>
      <PokemonCard {...charmanderData}/>
      <PokemonCard {...bulbasaurData}/>
      <PokemonCard {...sandshrewData}/>
      <PokemonCard {...bedrillData}/>
      <PokemonCard {...suicuneData}/>
      <PokemonCard {...KyogreData}/>
      <PokemonCard {...ArticunoData}/>
      <PokemonCard {...RaikouData}/>



      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop:Platform.OS ==='android' ? 25:0,
    
  },
});
