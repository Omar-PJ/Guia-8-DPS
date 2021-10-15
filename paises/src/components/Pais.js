import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, Image } from 'react-native'
import { Card} from 'react-native-elements'

const Pais = ({ resultado, id}) => {
    const [info, setInfo] = useState([]);
    const [nombre, setNombre] = useState([]);
    const [capital, setCapital] = useState([]);
    const [region, setRegion] = useState([]);
    const [lengua, setLengua] = useState([]);
    const [area, setArea] = useState([]);
    const [url, setUrl] = useState([]);

    useEffect(() => {
        setInfo(resultado);
        lengua.length = 0;
        Object.values(info).map( e =>{
            setNombre(e.nome.abreviado);
            setCapital(e.governo.capital.nome);
            setRegion(e.localizacao.regiao.nome);
            setArea( e.area.total * Math.pow(1000, 2))
            
            Object.values(e.linguas).map(l => {
                lengua.push(l.nome)
            });
        });
    });
    //API banderas https://www.banderas-mundo.es/descargar/api
    return(
        <Card style={{alignItems:'center', alignContent:'center'}}>
            <Card.Title>{nombre}</Card.Title>
            <Card.Divider />
            <Card.Image style={{width:100, height:70,alignItems:"center" ,alignContent:"center"}} source={{ uri: `https://flagcdn.com/256x192/${id}.png`}}></Card.Image>
            <View style={{justifyContent: 'center'}}>
                <Text>Capital: {capital}</Text>
                <Text>Región: {region}</Text>
                <Text>Lengua: {lengua.toString()}</Text>
                <Text>Área: {area.toString()} m2</Text>
                
            </View>
        </Card>
    );
}

export default Pais;