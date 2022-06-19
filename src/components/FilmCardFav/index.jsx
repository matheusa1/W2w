import './index.css'

const FilmCardFav = props => {

    <link rel="stylesheet" href="./index.css"/>

    return (
        <div className="image">
            <img class="image__img" style={{width: 150, height: 220}} alt="" src={props.Poster}/>
            <div className="image__overlay">
                <div className="image__title">{props.Title}</div>
            </div>
        </div>
    )
}

export default FilmCardFav;