import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

interface jokeType {
  id: number;
  title: string;
  content: string;
}

const App: React.FC = () => {
  console.log('my frontedn to backedn application: ')
  const [jokes, setJokes] = useState<jokeType[]>([]);

  const getJokes = async (): Promise<jokeType[]> => {
    try {
      const endURL = "http://localhost:3000/jokes";
      const response = await axios.get(endURL);
      const data = response.data;
      console.log(data);
      setJokes(data);
      return data;
    } catch (error) {
      console.error("Error fetching jokes:", error);
      setJokes([]);
      return [];
    }
  };

  useEffect(() => {
    const fetchJokes = async () => {
      await getJokes();
    };
    fetchJokes();
  }, []);

  return (
    <>
      <h1>Jokes Table</h1>
      {jokes.length === 0 ? (
        <p>No jokes available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Joke Title</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {jokes.map((joke) => (
              <tr key={joke.id}>
                <td title={joke.title}>{joke.id}</td>
                <td>{joke.title}</td>
                <td>{joke.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default App;



// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import axios from 'axios'
// import './App.css'
// interface jokeType  {
//     id: number;
//     title: string;
//     content: string;
// }
// function App() {
//   const [jokes, setJokes] = useState<jokeType[]>([]);

//   const getJokes = async (): Promise<jokeType[]> => {
//     const endURL = "http://localhost:3000/jokes";
//     const response = await axios.get(endURL);
//     const data = await response.data;
//     console.log(data)
//     setJokes(data);
//     return data;
//   }

//   useEffect(()=>{
//     //setJokes(jokes)
//     getJokes()
//   })

//   return (
//     <>
     
//       <h1>Jokes Table</h1>
//     <table>
//         <thead>
//             <tr>
//                 <th>ID</th>
//                 <th>Joke Title</th>
//                 <th>Content</th>
//             </tr>
//         </thead>
//         <tbody>
//           {jokes.length === 0 && <tr><td colSpan={3}>No jokes available</td></tr>}
//           {
//             jokes.map((joke)=>{
//               return (
//                 <tr key={joke.id}>
//                   <td title={joke.title}>{joke.id}</td>
//                   {/* applied the tooltip aswell */}
//                   <td>{joke.title}</td>
//                   <td>{joke.content}</td>
//                 </tr>
//               )
//             })
//           }
//         </tbody>
//     </table>

//     </>
//   )
// }

// export default App
