const ApiTest = () => {

    const throwingMoney = ()=> {
        console.log('Rick rolled');
    }

    return ( 
        <div>
            <h2>We shall test APIs here maybe?!</h2>
            <button onClick={throwingMoney}>Click me for moniess!</button>
        </div>
     );
}
 
export default ApiTest;