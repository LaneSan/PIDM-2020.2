import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export default function Dados({resultado}) {
    
    const [maisVotada, setMaisVotada] = useState([]);
    const [menosVotada, setMenosVotada] = useState([]);
   
    useEffect(() => {
	    const arr = resultado.map(item =>{
		    return item.votos;
        });
        
	    const valoresOrdenado = arr.sort((a,b) => {return a-b});
	    const min = valoresOrdenado[0];
        const max = valoresOrdenado[valoresOrdenado.length-1];
        
        let mais = [];
        let menos = [];
	
	    resultado.find( (cidade)=>{
		    if(cidade.votos === max && max !== 0){
			    mais.push(cidade.cidade);
		    }
	    });
	
	    resultado.find( (cidade)=>{
		    if(cidade.votos === min && min !== max){
			    menos.push(cidade.cidade);
		    }
        });
        
        setMaisVotada(mais);
        setMenosVotada(menos);

    }, [resultado]);

    return (
        <View>
            <Text>Mais votada(s): {maisVotada.join(" / ")}</Text>
            <Text>Menos votada(s): {menosVotada.join(" / ")}</Text>
        </View>        
    );
}