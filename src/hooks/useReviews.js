import { useEffect, useState } from "react"

const useReviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('dateReviewData.json')
            .then(req => req.json())
            .then(data => setReviews(data))
    }, [])

    return [reviews, setReviews]
}

export default useReviews