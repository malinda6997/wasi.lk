import 'cypress-xpath';

describe('login wasi.lk', () => {
  it('passes', () => {
    cy.visit('https://www.wasi.lk/')
    cy.title().should('eq','Online Shopping Sri Lanka: Bicycles, Phones, Electronics & Laptops | Wasi.lk')
    cy.get('[id="menu-extra-register"]').click()

    cy.get('[id="username"]').type('malindaprabath876@gmail.com')
    cy.get('[id="password"]').type('malinda1234')
    cy.get('[name="login"]').click()
    
    cy.title().should('eq','My Account | Wasi.lk | Best Prices In Sri Lanka')
   

    cy.get('[class="site-logo"]').click()
    cy.title().should('eq','Online Shopping Sri Lanka: Bicycles, Phones, Electronics & Laptops | Wasi.lk')

    cy.get('.header-extras > .product-extra-search > .products-search > .psearch-content > .search-wrapper > .search-field').type('Apple AirPods 2 With Charging Case')
    cy.xpath('//*[@id="site-header"]/div[1]/div/div/div/div[2]/div/form/div/button').click()
    

    cy.xpath('//*[@id="mf-shop-content"]/ul/li[1]/div/div[2]').click()
    cy.title().should('eq','Buy Apple AirPods 2 with Charging Case at Best Price in Sri Lanka')

    cy.get('[name="add-to-cart"]').click()

    cy.get('[class="icon-bag2 extra-icon"]').click()
    cy.title().should('eq','Cart | Wasi.lk | Best Prices in Sri Lanka')

    cy.get('a[href="https://www.wasi.lk/checkout/"]').contains('Proceed to checkout').click()
     cy.title().should('eq','Checkout | Wasi.lk | Best Prices in Sri Lanka')


      





     

    
     





    





  })
})