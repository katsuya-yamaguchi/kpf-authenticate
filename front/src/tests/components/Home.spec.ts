import { shallow } from 'enzyme'
import Home from '../../components/Home'

describe('Home', () => {
  it('test', () => {
    const warpper = shallow(<Home />)
    console.log(warpper)
  })
})
