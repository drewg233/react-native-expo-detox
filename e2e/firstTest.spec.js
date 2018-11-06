const { reloadApp } = require('detox-expo-helpers')

describe('Example', () => {
  beforeEach(async () => {
    await reloadApp()
  })

  it('Should only show button', async () => {
    await expect(element(by.id('button-tap'))).toBeVisible()
    await expect(element(by.id('text-taps'))).toBeNotVisible()
    await expect(element(by.id('text-facts'))).toBeNotVisible()
  })

  it('Should show tap 1 and tap 3', async () => {
    await element(by.id('button-tap')).tap()
    await expect(element(by.id('text-taps'))).toBeVisible()
    await element(by.id('button-tap')).tap()
    await expect(element(by.id('text-taps'))).toBeNotVisible()
    await element(by.id('button-tap')).tap()
    await expect(element(by.id('text-taps'))).toBeVisible()
    await element(by.id('button-tap')).tap()
    await expect(element(by.id('text-taps'))).toBeNotVisible()
  })

  it('Should show cat fact on tap 5', async () => {
    await element(by.id('button-tap')).tap()
    await expect(element(by.id('text-fact'))).toBeNotVisible()
    await element(by.id('button-tap')).tap()
    await expect(element(by.id('text-fact'))).toBeNotVisible()
    await element(by.id('button-tap')).tap()
    await expect(element(by.id('text-fact'))).toBeNotVisible()
    await element(by.id('button-tap')).tap()
    await expect(element(by.id('text-fact'))).toBeNotVisible()
    await element(by.id('button-tap')).tap()
    await expect(element(by.id('text-fact'))).toBeVisible()
  })
})