const Trailer = props => {

    let _src = "https://www.youtube.com/embed/" + props.trailerLink;

    return (
        <iframe width={800} height={450} src={_src} title="YouTube video player" frameborder="0" allowfullscreen></iframe>
    );
  }
  
  export default Trailer;