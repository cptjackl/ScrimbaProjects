import Header from "/src/components/Header"
import Entry from "/src/components/Entry"
import data from "/src/data/data.js"

export default function App() {
  
  const entries = data.map(function(entry){
    return (
      <Entry 
          key = {entry.id}
          {...entry}
      />
    )
  })

  return (
    <>
      <Header />
      <main>
      {entries}
      </main>
    </>
  )
}


