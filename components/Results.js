const { Thumbnail } = require("./Thumbnail")

export const Results = ({results}) =>{
    return(
        <div>
        {results.map(result=>(
            <Thumbnail key={result.id} result={result}/>
        ))}
        </div>
    )
}