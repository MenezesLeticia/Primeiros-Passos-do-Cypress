class MenuPage {

    selectorsList() {
        const selectors = {
            adminButton:"[href='/web/index.php/admin/viewAdminModule']",
            pimButton:"[href='/web/index.php/pim/viewPimModule']",
            leaveButton:"[href='/web/index.php/leave/viewLeaveModule']",
            timeButton:"[href='/web/index.php/time/viewTimeModule']",
            recruitmentButton:"[href='/web/index.php/recruitment/viewRecruitmentModule']",
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
            directoryButton:"[href='/web/index.php/directory/viewDirectory']",
            maintenanceButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            claimButton:"[href='/web/index.php/claim/viewClaimModule']",
            buzzButton: "[href='/web/index.php/buzz/viewBuzz']",
            
        }
        return selectors
    }

    acessAdmin(){
        cy.get(this.selectorsList().adminButton).click()
    }     
    acessPim(){
        cy.get(selectorsList().acessPim).click()
    }
    acessLeave(){
        cy.get(selectorsList().leaveButton).click()
    }
    acessTime(){
        cy.get(selectorsList().timeButton).click()
    }
    acessRecruitment(){ 
        cy.get(selectorsList().recruitmentButton).click()
    }
    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }
    accessPerformance() {
        cy.get(this.selectorsList().performanceButton).click()
    }
    acessDirectory(){
        cy.get(selectorsList().directoryButton).click()
    }
    acessMaintenance(){
        cy.get(selectorsList().maintenanceButton).click()
    }
    acessClain(){
        cy.get(selectorsList().claimButton).click()
    }
    acessBuzz(){
        cy.get(selectorsList().buzzButton).click()
    }    
    
}

export default MenuPage