import { useParams } from 'react-router-dom';


function CatigoryDescription() {
    let categoryName = useParams();
    return (
        <>
         <a href ='/cat'> </a>
          <h1>Catigory : {categoryName}</h1>
      
        </>
    )
}

export default CatigoryDescription;