const { describe, it, before, afterEach } = require('mocha')
const { expect } = require('chai')
const TodoRepository = require('../src/todoRepository')
const { createSandbox } = require('sinon')

describe('todoRepository', () => {
  let todoRepository
  let sandbox
  before(() => {
    todoRepository = new TodoRepository()
    sandbox = createSandbox()
  })
  afterEach(() => {
    sandbox.restore()
  })
  describe('methods signature', () => {
    it('shoud call find from lokijs', () => {
      const mockDataBase = [
        {
          name: 'Xuxa da Silva',
          age: 90,
          meta: { revision: 0, created: 1611589470819, version: 0 },
          $loki: 1
        }
      ]

      const functionName = "find"
      const expectedReturn = mockDataBase
      sandbox.stub(
        todoRepository.schedule,
        functionName
      ).returns(expectedReturn)

      const result = todoRepository.list()
      expect(result).to.be.deep.equal(expectedReturn)
      expect(todoRepository.schedule[functionName].calledOnce).to.be.ok
    })
    it('shoud call insertOne from lokijs', () => {

    })
  })
})


