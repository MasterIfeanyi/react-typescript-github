import {useState} from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Content from "./components/Content"
import WelcomeNote from "./components/WelcomeNote"
import Form from "./components/Form"
import {DataType} from "./types/Data"

function App() {

  const [data, setData] = useState<DataType>({} as DataType)



  return (
    <main className="App">
      <Header />
      <section className="section">
        <WelcomeNote />
        {(data.name) ? (
          <Content
            data={data}
          />
        ) : (
          <Form 
            setData={setData}
          />
        )}
      </section>
      <Footer />
    </main>
  );
}

export default App;
