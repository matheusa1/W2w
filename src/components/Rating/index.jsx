import { Rate } from 'antd';
import {HeartFilled} from '@ant-design/icons';
import {useState} from 'react'

const Rating = props =>{

    const [heartCol,setColor] = useState("#243827")
    let is_fav = false;
    
    function checkFav(color) {
        if (color === "#243827"){
            setColor("#3bd465")
            is_fav = true;
        }
        else{
            setColor("#243827")
            is_fav = false;
        }
    }

    return(
        <>
            <>
                <HeartFilled 
                style={{fontSize:30, color:heartCol}}
                onClick={() => checkFav(heartCol)}
                />
                    <b>Favoritar filme</b>
            </>
            <div>
                <Rate allowHalf />
            </div>
            <div>
                <h1>
                    Where 2 watch?
                    <li>
                        <a target="_blank" href="https://tv.apple.com/br/movie/magnolia/umc.cmc.mbdys1lghcq89larr77nlxnb?action=play">
                            Apple TV
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.primevideo.com/dp/amzn1.dv.gti.70b528b4-0182-17a9-603a-df6959536dd5?autoplay=1&ref_=atv_cf_strg_wb">
                            Amazon Prime Video
                        </a>
                    </li>
                </h1>
                
            </div>
        </>
    )
}

export default Rating;