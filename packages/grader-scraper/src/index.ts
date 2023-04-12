import puppeteer from "puppeteer"
import { getAuthedPage, getProblemsList } from "./puppeteer"

getAuthedPage().then((page) => {
  getProblemsList(page)
})

