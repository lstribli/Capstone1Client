import config from '../config'
import TokenService from './token-service';
// import RegistrationForm from '../components/RegistrationForm/RegistrationForm'
// const userName = config.userName;
// const password = config.password;

const ThingApiService = {
  postCredentials(user_name, password) {

    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        user_name,
        password,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
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
  postReview(title, content, user_id, thing_id, next) {
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
        res.json()
      )
      .catch(next)
  },

  deleteReview(review, next) {
    // console.log(review)
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
  editReview(title, content, user_id, review,) {
    // console.log(review)
    const newReview = {
      body: JSON.stringify({
        title,
        content,
        user_id,
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
