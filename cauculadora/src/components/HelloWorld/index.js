import './styles.css';



export const HelloWorld = () =>{
    let Hello = 'Hello';
    let World = 'World;'
    const HWArray = [];
    for(let i; HWArray.length < 10; i++){
        HWArray.push('Hello World')
    }
    function reverseString(str) {
        let reversedString = ''
        for (let i = str.length - 1; i >= 0; i--) {
          reversedString += str[i]
        }
        return reversedString
      }
    let reversedHelloWorld = reverseString("HelloWorld")
    return(
        <div className ="helloWorld">
            <span className="easier">Hello World</span>
            {HWArray.map((hw) =>(
                <div>
                    {hw}
                </div>
            ))}
            <span>{HWArray[0].toUpperCase()}</span>
            <span>{HWArray[1].toLowerCase()}</span>
            <span>{reversedHelloWorld}</span>
            <span>{`${Hello}+${World}`}</span>
        </div>
    )
}

