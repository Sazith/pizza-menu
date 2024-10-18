
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Pizza from './Components/Pizza/Pizza';
import './index.css'
function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-4">
          <Pizza />
        </main>
        <Footer />
      </div>
    </>
  );
}


export default App;
