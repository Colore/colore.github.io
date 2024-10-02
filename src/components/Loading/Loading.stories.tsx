import FillOutContainer from '../FillOutContainer/FillOutContainer'
import Loading from './Loading'

export default {
    title: 'Loading'
}

export const Default = () => (
    <FillOutContainer>
        <Loading />
    </FillOutContainer>
)

Default.story = {
    name: 'default'
}
