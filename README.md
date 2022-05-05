# **AUTO-XPRESS**

## _An automobile inventory management webapp_

---

- This full-stack application is built using `React`, `Node`,`Mongodb`,`Express`,`Firebase`,`React Router`,`React Firebase Hook`.

* `React Bootstrap` css framework was used in frontend UI designing.
* The website shows 6 cards with Car Image, Quantity, Price, Supplier's name , each card has two button one is `Update` and other is `Select`
* By clicking on `Update` button if the user is logged in he/she will be redirected to the /inventory/:id (detail) page where he/she can Deliver/Restock the selected item's quantity.
* By clicking on the `Select` button user can choose his/her items
* Selected Items will be displayed in the `My Items` page, where user can see those items if he/she is logged in.
* On `Manage Items` page a logged in user will see all of the items he/she can delete any of these items
* By clicking on `Add Items` button the user will be redirected to Add Items page , where he/she can add any item
* Clicking on `Manage Items` button will redirect user to Manage Items page.
* The website has a `Blog` section and an `About` section, user can visit these pages without logging in.
* Email/ Password based firebase authentication is implemented.
* Google Login system is also included
* Email verification will be sent if user is registered for the first time
* User can reset his/her password if he/she forgets the Password, in this case Password reset email will be sent to user's email address
* Verified user's data is secured with JWT token.
* Website's data is protected from Unauthorized users.
* Suggested strong password feature is added.
