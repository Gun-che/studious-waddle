import React from 'react'
import { shallow, mount } from 'enzyme'
import { NewsContainer } from '../containers/NewsContainer'

describe('News container', () => {
  const props = {
    message: '',
    isFetching: false,
    handlerRequest: () => { },
    data: [],
  }
  describe('News container init', () => {
    const newsContainer = shallow(<NewsContainer {...props} />)

    it('renders properly', () => {
      expect(newsContainer).toMatchSnapshot()
    })
  })

  describe('News container loading', () => {
    const nextProps = {
      ...props,
      isFetching: true,
    }

    const newsContainer = shallow(<NewsContainer {...nextProps} />)

    it('render preloader', () => {
      expect(newsContainer.find('Loading')).toHaveLength(1)
    })

    it('renders properly', () => {
      expect(newsContainer).toMatchSnapshot()
    })
  })

  describe('News container render <News>', () => {
    const nextProps = {
      ...props,
      data: [1]
    }

    const newsContainer = shallow(<NewsContainer {...nextProps} />)

    it('render <News>', () => {
      expect(newsContainer.find('News')).toHaveLength(1)
    })

    it('renders properly', () => {
      expect(newsContainer).toMatchSnapshot()
    })
  })

  describe('News container with error', () => {
    const nextProps = {
      ...props,
      message: 'Something going wrong'
    }

    const newsContainer = shallow(<NewsContainer {...nextProps} />)

    it('render message', () => {
      expect(newsContainer.find('h2').text()).toEqual(nextProps.message)
    })

    it('renders properly', () => {
      expect(newsContainer).toMatchSnapshot()
    })
  })

  describe('News container init', () => {

    const mockFetchGetNews = jest.fn()
    const nextProps = {
      ...props,
      handlerRequest: mockFetchGetNews,
    }

    const newsContainer = mount(<NewsContainer {...nextProps} />)

    it('renders properly', () => {
      expect(newsContainer).toMatchSnapshot()
    })

    it('dispatches the handlerRequest method it receives from props', () => {

      expect(mockFetchGetNews).toHaveBeenCalled()
    })
  })
})