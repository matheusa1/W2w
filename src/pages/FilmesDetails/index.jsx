import { useParams } from "react-router";

const FilmeDetailsPage = props =>{
  const params = useParams();
  console.log(params);
  const {id} = params;

  return (
    <div>
      <h1>FilmeDetailsPage</h1>
      <h2>filme {id}</h2>
    </div>
  )
}

export default FilmeDetailsPage