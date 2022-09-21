// Code Keypad Component Here

function Keypad(){

    function handlePassword(){
        console.log("Entering password...");
    }

    return (
        <input type="Password" onChange={handlePassword}/>
    )
}

export default Keypad;