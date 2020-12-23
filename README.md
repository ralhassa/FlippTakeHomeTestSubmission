Creating React App:
- react bootstrap install 
    npm install react-bootstrap-validation --save

Testing:
    UI (covered in App.test.js)
    - Are item cards being displayed on main page 
    - when "More Details" selected, is the user directed to the page that holds all the required information 
        - item name
        - item price
        - merchant
        - item category
        - item sub-category

    Other 
    - on home component, test that all 10 items are extracted from data source 
    - on home component, verify that for a given item card the name and picture are for the same item
    - on details component, verify that the item details retrieved match the item selected on the home page
