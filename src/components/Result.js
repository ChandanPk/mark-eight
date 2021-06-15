const Result = ({meaning, emoji, handleClick, handleChange, emojies}) => {
    return ( 
        <div className="result">
      
            <h2 style={{fontSize: "3rem", margin: "10px"}}> {emoji} </h2>
            <h3> {meaning} </h3>
            {
        
                emojies.map((emoji) => (
                <span onClick={() => handleClick(emoji)} style={styles}> {" "} {emoji}{" "} </span>
                ))
            }
    </div>
     );
}
 
export default Result;

const styles = {
    fontSize: "2rem",
    padding: "0.5rem",
    cursor: "pointer"
}