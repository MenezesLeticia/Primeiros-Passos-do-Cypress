class MyInfoPage {
    selectorsList(){
        const selectors = {
            genericField: ".oxd-input--active",
            middleName:"input.orangehrm-middlename",
            dataField:"[placeholder='yyyy-dd-mm']",
            dataCloseButton:'.--close',
            submitButton: "[type='submit']",
            genericComboBox:'.oxd-select-text-input',
            optionsComboBox:'.oxd-select-dropdown',
            gender: '.--gender-grouped-field .oxd-input-group',
        }
        return selectors
    }
        fillPersonalDetails(firstName, middleName, lastName){
            cy.get(this.selectorsList().genericField).eq(1).clear().type(firstName)
            cy.get(this.selectorsList().middleName).clear().type(middleName)
            cy.get(this.selectorsList().genericField).eq(2).clear().type(lastName)
        }

        fillEmployeeDetails(employeeId, otherID, driversLicense, data) {
            cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
            cy.get(this.selectorsList().genericField).eq(4).clear().type(otherID)
            cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense)
            cy.get(this.selectorsList().dataField).eq(0).clear().type(data)
            cy.get(this.selectorsList().dataCloseButton).click()
        }
        
        fillStatus(data){
            cy.get(this.selectorsList().genericComboBox).eq(0).click()
            cy.get(this.selectorsList().optionsComboBox).contains('Brazilian').click()
            cy.get(this.selectorsList().genericComboBox).eq(1).click()
            cy.get(this.selectorsList().optionsComboBox).contains('Married').click()
            cy.get(this.selectorsList().dataField).eq(1).clear().type(data)
            cy.get(this.selectorsList().gender).eq(1).click()
        }

        saveForm(){
            cy.get(this.selectorsList().submitButton).eq(0).click()
            cy.get('body').should('contain', 'Successfully Updated')
            cy.get('.oxd-toast-close') 
        }

        
}

export default MyInfoPage