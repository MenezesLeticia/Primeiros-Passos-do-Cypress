import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
 
  it('User Info Update - Sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    loginPage.checkAcessValid
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.last())
    myInfoPage.fillEmployeeDetails(chance.string({ length: 5 }),chance.string({ length: 5 }), chance.string({ length: 5 }), '2025-07-09')
    myInfoPage.fillStatus('2025-08-08')
    myInfoPage.saveForm()
    
  })
})