import React, { Component } from 'react'
import ThingContext from '../../contexts/ThingContext'
import ThingApiService from '../../services/thing-api-service'
import { Section } from '../../components/Utils/Utils'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import './ThingPage.css'
import { Button } from '../../components/Utils/Utils'
// import jwtDecode from 'jwt-decode'
// import TokenService from '../../services/token-service'
import { Link } from 'react-router-dom'

export default class ThingPage extends Component {

  static defaultProps = {
    match: { params: {} },
  }

  static contextType = ThingContext

  componentDidMount() {
    const { thingId } = this.props.match.params

    this.context.clearError()
    ThingApiService.getThing(thingId)
      .then(this.context.setThing)
      .catch(this.context.setError)
    ThingApiService.getThingReviews(thingId)
      .then(this.context.setReviews)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearThing()
  }

  renderThing() {
    const { thing, reviews } = this.context
    console.log(thing.image)
    return <>
      <div className='ThingPage__image' style={{ backgroundImage: `url(${thing.image})` }} />
      <h2>{thing.title}</h2>
      <ThingContent thing={thing} />
      <ThingReviews reviews={reviews} thing={thing} onDelete={id => this.context.deleteReview(id)} />
      <ReviewForm {...this.props} />
    </>
  }

  render() {
    const { error, thing } = this.context

    let content
    if (error) {
      content = (error.error === `Thing doesn't exist`)
        ? <p className='red'>Thing not found</p>
        : <p className='red'>There was an error</p>
    } else if (!thing.id) {
      content = <div className='loading' />
    } else {
      content = this.renderThing()
    }
    console.log(content)
    return (
      <Section className='ThingPage'>
        {content}
      </Section>
    )
  }
}

function ThingContent({ thing }) {
  return (
    <p className='ThingPage__content'>
      {thing.content}
    </p>
  )
}


function ThingReviews({ thing = {}, reviews = [], onDelete }) {

  const revByMID = reviews.filter(rev => rev.mood_id === thing.id)

  return (
    <ul className='ThingPage__review-list'>
      {revByMID.map(review =>
        <li key={review.id} className='ThingPage__review'>
          <p className='ThingPage__review-text'>
            {review.title}
          </p>
          <p>
            {review.content}
          </p>
          {/* <Link
            to='/edit'>
            <Button >Edit</Button>
          </Link> */}

          <Button onClick={() => ThingApiService.deleteReview(review.id).then(() => onDelete(review.id))}>Delete</Button>
        </li>
      )}
    </ul>
  )
}
