import { useEffect, useState } from "react"

const useGraphData = () => {
    const [graphData, setGraphData] = useState([])

    useEffect(() => {
        fetch('chart-data.json')
            .then(req => req.json())
            .then(data => setGraphData(data))
    }, [])

    return [graphData, setGraphData]
}
export default useGraphData