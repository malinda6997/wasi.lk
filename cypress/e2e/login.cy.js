import 'cypress-xpath';

describe('login wasi.lk', () => {
  it('passes', () => {

    // visit tothe wasi.lk
    cy.visit('https://www.wasi.lk/')
    cy.title().should('eq','Online Shopping Sri Lanka: Bicycles, Phones, Electronics & Laptops | Wasi.lk')
    cy.get('[id="menu-extra-register"]').click()

    //Login wasi.lk using email and password
    cy.get('[id="username"]').type('malindaprabath876@gmail.com')
    cy.get('[id="password"]').type('malinda1234')
    cy.get('[name="login"]').click()
    
    //confirm login using title
    cy.title().should('eq','My Account | Wasi.lk | Best Prices In Sri Lanka')
   
    //Navigate to the home page using logo
    cy.get('[class="site-logo"]').click()
    cy.title().should('eq','Online Shopping Sri Lanka: Bicycles, Phones, Electronics & Laptops | Wasi.lk')

    // Search item using search bar
    cy.get('.header-extras > .product-extra-search > .products-search > .psearch-content > .search-wrapper > .search-field').type('Apple AirPods 2 With Charging Case')
    cy.xpath('//*[@id="site-header"]/div[1]/div/div/div/div[2]/div/form/div/button').click()
    
    //Select a item clicking by the name 
    cy.xpath('//*[@id="mf-shop-content"]/ul/li[1]/div/div[2]').click()
    cy.title().should('eq','Buy Apple AirPods 2 with Charging Case at Best Price in Sri Lanka')

    // click on the add to cart button
    cy.get('[name="add-to-cart"]').click()

    //navigate to the add to cart page
    cy.get('[class="icon-bag2 extra-icon"]').click()
    cy.title().should('eq','Cart | Wasi.lk | Best Prices in Sri Lanka')

    //click on the checkout button move to the checkout page
    cy.get('a[href="https://www.wasi.lk/checkout/"]').contains('Proceed to checkout').click()
     cy.title().should('eq','Checkout | Wasi.lk | Best Prices in Sri Lanka')
     cy.wait(2000)

     //after the checkout navigate to the home page
     cy.get('[class="site-logo"]').click()

    


      





     

    
     





    





  })
})