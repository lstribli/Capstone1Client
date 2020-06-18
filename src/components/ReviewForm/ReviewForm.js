import React, { Component } from 'react'
import ThingContext from '../../contexts/ThingContext'
import ThingApiService from '../../services/thing-api-service'
import { Textarea } from '../Utils/Utils'
import './ReviewForm.css'
import TokenService from '../../services/token-service'
import jwtDecode from 'jwt-decode'
import { Button } from '../Utils/Utils'


export default class ReviewForm extends Component {
  static contextType = ThingContext

  handleSubmit = ev => {
    ev.preventDefault()
    // const e = ev.nativeEvent
    // console.log(e)
    const user_id = jwtDecode(TokenService.getAuthToken()).id
    const { title, content } = ev.target
    const { thingId } = this.props.match.params

    // console.log('reviewForm: handlesubmit: ev:', ev)
    ThingApiService.postReview(title.value, content.value, thingId, user_id)
      .then(this.context.addReview)
      .then(() => {
        title.value = ''
        content.value = ''
        // console.log(content.value)
      })
      .catch(this.context.setError)
  }

  render() {
    const thing = this.context.thing
    // console.log(thing)
    // const { thingId } = this.props.match.params
    // console.log('THE DROIDSYOURELOOKINGFOR', thingId)
    // console.log(this.context.thing)
    return (
      <form
        className='ReviewForm'
        onSubmit={this.handleSubmit}
      >
        <div className='text'>
          <Textarea
            required
            aria-label='Type a review...'
            title='title'
            id='title'
            cols='30'
            rows='1'
            placeholder='Title..'>
          </Textarea>
        </div>
        <div className='text'>
          <Textarea
            required
            aria-label='Type a review...'
            content='content'
            id='content'
            cols='30'
            rows='3'
            placeholder='Reflect..'>
          </Textarea>
        </div>

        <Button onClick={() => ThingApiService.postReview(thing)} type='submit'>
          Post Note
        </Button>
      </form>
    )
  }
}
