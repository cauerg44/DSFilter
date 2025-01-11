import { useState } from "react";
import Header from "./components/Header";
import ListingBody from "./components/ListingBody";
import { ContextItemCount } from "./utils/context-count";


export default function App() {

  const [contextItemCount, setContextItemCount] = useState<number>(0)

  return (
    <ContextItemCount.Provider value={{contextItemCount, setContextItemCount}}>
      <>
      <Header />
      <main>
        <ListingBody />
      </main>
    </>
    </ContextItemCount.Provider>
  )
}