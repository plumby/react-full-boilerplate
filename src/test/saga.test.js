import {expect} from 'chai'
import {getRandomNumber} from 'sagas'
import * as api from 'api'
import * as actions from 'actions'
import { call, put } from 'redux-saga/effects'



describe('saga', () => {
  describe('getRandomNumber', () => {
    const generator = getRandomNumber(actions.requestRandomNumber())

    const nextAction=generator.next().value;
    // Need to get action id from return value, as it's randomly generated
    const id=nextAction.PUT.action.id

    it('should PUT action to flag waiting for number', () => {
      expect(nextAction)
        .to.deep.equal(put(actions.awaitingRandomNumber(id)))
    })

    it('should CALL the generate random number API', () => {
      expect(generator.next().value)
        .to.deep.equal(call(api.generateRandomNumber))
    })

    it('should PUT a request to add the random number', () => {
      const number=25;
      expect(generator.next(number).value)
        .to.deep.equal(put(actions.addRandomNumber(id,number)))
    })
  })
})
