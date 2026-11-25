import { test, expect } from '@playwright/test'

test('home loads', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Jorge Román Palma/)
  await expect(page.getByRole('heading', { name: /Engineering software/ })).toBeVisible()
})

test('navigation works', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'Work' }).first().click()
  await expect(page).toHaveURL(/\/work/)
})

test('theme toggle', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: /Light|Dark|System/i }).first().click()
})
