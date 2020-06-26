import React from 'react'
import ThingApiService from '../../services/thing-api-service'
import thingContext from '../../contexts/ThingContext'
import { Link } from 'react-router-dom'


export default class EditNotePage extends React.Component {
  static contextType = thingContext
  render() {
    const { reviews } = this.context
    // console.log(this.context)

    return (
      <form
        className='ReviewForm'
        onSubmit={() => ThingApiService.editReview(reviews)}
      >
        <div className='text'>
          <textarea
            required
            aria-label='Type a title...'
            title='title'
            id='title'
            cols='30'
            rows='1'
            placeholder='Title..'>
          </textarea>
        </div>
        <div className='text'>
          <textarea
            required
            aria-label='Type a review...'
            content='content'
            id='content'
            cols='30'
            rows='3'
            placeholder='Reflect..'>
          </textarea>
        </div>
        <Link
          to='/thing/thingId'>
          <button type='submit'>
            Submit
          </button>
        </Link>
      </form >
    )
  }
}
