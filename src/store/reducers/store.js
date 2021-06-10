import Images from '../../components/exportFiles/exportImages';
import {useSelector} from 'react-redux';
let images = new Images();
let initialState = [
    {id:5,itemName:"Beats Solo On Ear Headphones - Black" ,image:images.BeatsSoloBlack1(),price:parseInt(499)},
    {id:6,itemName:"Apple Mac Pro" ,image:images.AppleMac(),price:parseInt(499)},
    {id:7,itemName:"Beats Solo On Ear Headphones - Red" ,image:images.BeatsSoloRed1(),price:parseInt(499)},
    {id:8,itemName:"Netatmo Rain Gauge" ,image:images.RainGauge(),price:parseInt(499)},
    {id:9,itemName:"Go Pro" ,image:images.GoPro(),price:parseInt(499)},
    {id:10,itemName:"Occulus Rift" ,image:images.OcculusRift(),price:parseInt(499)}
];

const Store = (state = initialState,action) => {
    switch(action.type){        
        default:
            return state;
    }
}

export default Store;