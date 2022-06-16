import Navbar from './components/Navbar';
import Travel from './components/Travel';
import data from './data';

function App() {
  const myData = data.map(data => {
    return(
      <Travel
      key={data.id}
      {...data} 
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <main className="container">
      {myData}
      </main>
    </div>
  );
}

export default App;
