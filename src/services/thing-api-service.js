import config from '../config'
import TokenService from './token-service';
// const userName = config.userName;
// const password = config.password;

const ThingApiService = {
  getThings() {
    return fetch(`${config.API_ENDPOINT}/meditations`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getThing(thingId) {
    return fetch(`${config.API_ENDPOINT}/meditations/${thingId}`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getThingReviews(thingId) {
    return fetch(`${config.API_ENDPOINT}/notes`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postReview(title, content, thing_id, user_id) {

    // console.log('PostReview: mood_id', thing_id)
    // console.log('postReview: user_id', user_id)

    return fetch(`${config.API_ENDPOINT}/notes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        title,
        content,

        user_id,
        mood_id: thing_id
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  deleteReview(review, next) {
    console.log(review)
    return fetch(`${config.API_ENDPOINT}/notes/${review}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
    }).then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.status
    )
      .catch(next)
  },
  editReview(review, next, title, content, user_id, ) {
    console.log(review)
    const newReview = {
      body: JSON.stringify({
        title,
        content,
        user_id,
        mood_id: 1
      })
    }
    return fetch(`${config.API_ENDPOINT}/notes/${review.id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: newReview
    }).then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e)) : res.status)
  }
}

export default ThingApiService
