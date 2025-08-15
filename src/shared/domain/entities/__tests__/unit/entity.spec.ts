import { validate as uuidValidate } from 'uuid'
import { Entity } from '../../entity'

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> { }

describe('Entity unit tests', () => {
  it("Shold set props and id", () => {
    const props = {
      prop1: 'value',
      prop2: 15
    }
    const entity = new StubEntity(props)
    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(uuidValidate(entity._id)).toBeTruthy()
  })

  it("Shold accept a valid uuid", () => {
    const props = {
      prop1: 'value',
      prop2: 15
    }

    const id = '26253747-8a28-46b5-ac09-62d8d171c6c8'
    const entity = new StubEntity(props, id)

    expect(uuidValidate(entity._id)).toBeTruthy()
    expect(entity._id).toBe(id)
  })

  it("Shold convert entity to a javascript object", () => {
    const props = {
      prop1: 'value',
      prop2: 15
    }

    const id = '26253747-8a28-46b5-ac09-62d8d171c6c8'
    const entity = new StubEntity(props, id)


    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props
    })
  })
})

