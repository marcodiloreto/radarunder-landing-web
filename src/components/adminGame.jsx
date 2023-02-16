import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
export const AdminGame = () => {
    const [numbers, setNumbers] = useState('')

    const addNumber = (n) => {
        setNumbers(numbers + n)
    }

    useEffect( () => {
        if( /(.)\1{2}/.test(numbers)) {
            setNumbers('')
        }
        if(numbers === '12332122'){
//console.log!!
            window.location.port = 5173
            window.location.hash = ''
            //  = '127.0.0.1:3002';
        }
    }, [numbers])

return(
<div className="adminButtons" style={{zIndex:100, position:'relative', bottom:0 , width: (140 * 3), height:100}}>
<button style={styles.button} onClick={() => addNumber('1')}></button>
<button style={styles.button} onClick={() => addNumber('2')}></button>
<button style={styles.button} onClick={() => addNumber('3')}></button>
</div>
    )
}

const styles = {
    button: {
      backgroundColor: 'transparent',
      border: '1px solid white',
      width: '100px',
      height: '100px',
      marginLeft: 20,
      marginRight:20,
      zIndex:101,
      borderRadius: 15
    },
  };