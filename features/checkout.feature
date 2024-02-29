Feature: Swag Labs - Add cart to checkout
   Scenario: Annisa purchases a product
    Given Annisa is on the login page
    When Annisa logs in with "standard_user" credential
    Then Annisa should see home page

    Given Annisa is on the product detail page
    When Annisa views the details of the product
    Then Annisa should see the product details page

    When Annisa adds the product to the cart
    Then Annisa should see the product in the cart

    Given Annisa is on the cart page
    When Annisa completes the checkout process with "<first name>", "<last name>", and "<postal code>"
    And Annisa clicks the finish button
    Then Annisa should see the order success message

   


