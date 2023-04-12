import { default as puppeteer, Page } from "puppeteer"

export const getAuthedPage = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto("https://nattee.net/grader")

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 })

  // Type into search box
  await page.type("#login", "6430014321")
  await page.type(
    "#password",
    "--------------------------------------------------------"
  )
  // Wait and click on first result
  console.log("#33")
  const searchResultSelector = ".btn.btn-primary"
  await page.waitForSelector(searchResultSelector)
  console.log("Afafda")
  await page.click(searchResultSelector)
  await page.waitForSelector("#compiler")
  console.log("fFFFfasd")
  return page
}

export const getProblemsList = async (page: Page) => {
  const tipusArray = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".select2.form-control")).map(
      (element) => element.innerHTML
    )
  )
  console.log(tipusArray)
  console.log("done")

  // console.log(await option)
}
