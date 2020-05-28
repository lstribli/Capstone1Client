import React, { Component } from 'react'

export const nullThing = {
  author: {},
  tags: [],
}

const ThingContext = React.createContext({
  thing: nullThing,
  reviews: {},
  error: null,
  setError: () => { },
  clearError: () => { },
  setThing: () => { },
  clearThing: () => { },
  setReviews: () => { },
  addReview: () => { },
})

export default ThingContext

export class ThingProvider extends Component {
  state = {
    thing: nullThing,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setThing = thing => {
    this.setState({ thing })
  }

  setReviews = reviews => {
    this.setState({ reviews })
  }

  clearThing = () => {
    this.setThing(nullThing)
    this.setReviews([])
  }

  addReview = review => {
    this.setReviews([
      ...this.state.reviews,
      review
    ])
  }

  deleteReview = review_id => {
    this.setReviews(this.state.reviews.filter(review => review.id !== review_id))
  }

  render() {
    const value = {
      thing: this.state.thing,
      reviews: this.state.reviews,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setThing: this.setThing,
      setReviews: this.setReviews,
      clearThing: this.clearThing,
      addReview: this.addReview,
      deleteReview: this.deleteReview
    }
    return (
      <ThingContext.Provider value={value}>
        {this.props.children}
      </ThingContext.Provider>
    )
  }
}
