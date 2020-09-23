import React, {useState, useEffect} from 'react';

import {Alert, Button} from 'react-native';



export default function Click() {

	const [count, setCount] = useState(0);

	let countString = "count:"+count;

	useEffect(()=>Alert.alert("count:"+count));

	return (

	  <Button title={countString} onPress={()=>{setCount(count+1);}}/> 
  );
  function showCount(){

  	Alert.alert("count:"+count);

  };


}