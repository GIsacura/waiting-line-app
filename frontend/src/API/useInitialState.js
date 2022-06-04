import { useState } from "react"

let updateList = ''

const useInitialState = () => {
  const [line1, setLine1] = useState([])
  const [line2, setLine2] = useState([])

  const addClient1 = (payload) => {
    setLine1(payload)
  }

  const addClient2 = (payload) => {
    setLine2(payload)
  }


  return {
    line1,
    line2,
    updateList,
    addClient1,
    addClient2,
  }
}

export default useInitialState