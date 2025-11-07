import { useEffect, useState, type JSX } from "react";


export default function Playgrount():JSX.Element {
    const [numberOfDogs, setNumberOfDogs] = useState<number>(0);
     const [numberOfBirds, setNumberOfBirds] = useState<number>(10);
     
     function handleAddDog():void{
        setNumberOfDogs(numberOfDogs+1)
     }
     
     function handleAddBird():void{
        setNumberOfBirds(numberOfBirds+10)
     }
     // useEffect
  // позволяет вызвать функцию
  // на каком-нибудь из этапов жизни компонента
  // - принимает колбек функцию и второй опиональный параметр -
  // массив зависимостей

  //пример 1 пустой массив
     useEffect(()=>{
      console.log("UseEffect 1 - только при первой отрисовке=== mount");
      
     },[])

     //пример 2 без массив
     useEffect(()=>{
      console.log("UseEffect 2 - при первой отрисовке(mount), при  любых изменениях");
      
     })
     //пример 3 с указанием зависимостей
     useEffect(()=>{
      console.log("UseEffect 3 - при первичной отрисовке(mount), при изменении переменной numberOfDogs ");
      
     }, [numberOfDogs])
  
  
     return (
      
   
    <div>
      <h1>Playground</h1>
      <p>Number of dogs: {numberOfDogs}</p>
      <p>Number of birds: {numberOfBirds}</p>
      <button type="button" onClick={handleAddDog}>Let the dog in </button>
      <button type="button" onClick={handleAddBird}>Let the bird in </button>
       {/* Кнопка для GitHub кода */}
      <a
  style={{
    display: 'inline-block',
    padding: '10px 20px',
    textDecoration: 'none', 
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: '#24292e', 
    border: '2px solid #24292e',
    borderRadius: '6px',
    marginTop: '15px' 
  }}
  target="_blank"
  href="https://github.com/dmitrined/FrontEndReact/blob/main/vite-project/src/components/Lecture/L4/Playground/Playgrount.tsx"
>
  Посмотреть код этой страницы на GitHub
</a>
    </div>
  )
}
