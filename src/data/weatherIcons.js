import sunny from '../images/sunny.png'
import sunClouds from '../images/sunClouds.png';
import fog from '../images/fog.png';
import cloudySnow from '../images/cloudySnow.png';
import cloudyLightRain from '../images/cloudyLightRain.png';
import ClodyHeavyRain from '../images/ClodyHeavyRain.png';
import hell from '../images/hell.png';
import CloudyHeavySnow from '../images/CloudyHeavySnow.png';
import rainShowers from '../images/rainShowers.png';
import heavyRainShower from '../images/heavyRainShower.png';
import lighSnowShower from '../images/lighSnowShower.png';
import heavySnowShower from '../images/heavySnowShower.png';
import ThunderStorm from '../images/ThunderStorm.png';



const setImg = (day) => {
  
  let img = ''
  
  switch (day) {
    case 0:
      img = sunny;
      break;
    case 1:
    case 2:
    case 3:
      img = sunClouds;
      break;
    case 45:
    case 48:
      img = fog;
      break;
    case 51:
    case 53:
    case 55:
      img =cloudySnow;
      break;
    case 56:
    case 57:
      img = cloudySnow;
      break;
    case 61:
    case 63:
      img = cloudyLightRain;
      break;
    case 65:
      img = ClodyHeavyRain;
      break;
    case 66:
    case 67:
      img = hell;
      break;
    case 71:
    case 73:
    case 77:
      img = cloudySnow;
      break;
    case 75:
      img = CloudyHeavySnow;
      break;
    case 80:
    case 81:
      img = rainShowers;
      break;
    case 82:
      img = heavyRainShower;
      break;
    case 85:
      img = lighSnowShower;
      break;
    case 86:
      img = heavySnowShower;
      break;
    case 95:
    case 96:
    case 99:
      img = ThunderStorm;
      break;
    default:
      break;
  }
  return img
}

export default setImg;