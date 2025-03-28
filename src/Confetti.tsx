import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

const MyConfetti = () => {
    const { width, height } = useWindowSize()
    return (
      <Confetti
        width={width-50}
        height={height-50}
      />
    )
}

export default MyConfetti