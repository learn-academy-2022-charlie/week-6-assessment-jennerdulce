# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: Luckily this is an easy fix. I have fixed a problem like this by using a migration. Migrations are a tool Active Record in order to make changes to the structure of your database. A few examples are, deleting columns, changing data types of columns, changin columns names and a few others. You also have to provide an area to hold the `foreign key`. The foreign key is used to create a relationship between instances from other tables. Creating a foreign key has a naming convention of the table name that you want followed by `_id`. Here is an example: `student_id`. The foreign key will automatically be updated depending on what student you are creating a new entry for. The foreign key correlates to the `Primary Key` of the desired instance.

  Researched answer: Luckily this is an easy fix. I have fixed a problem like this by using a migration. Migrations are a tool Active Record in order to make changes to the structure of your database. A few examples are, deleting columns, changing data types of columns, changin columns names and a few others. You also have to provide an area to hold the `foreign key`. The foreign key is used to create a relationship between instances from other tables. Creating a foreign key has a naming convention of the table name that you want followed by `_id`. Here is an example: `student_id`. The foreign key will automatically be updated depending on what student you are creating a new entry for. The foreign key correlates to the `Primary Key` of the desired instance. Furthermore, a few things have to happen in order to implement a migration.

  ```
  add_column :table_name, :column_name, :datatype
  change_column :table_name, :column_name, :datatype
  rename_column :table, :old_column, :new_column
  remove_column :table_name, :column_name
  ```
  - After you generate a migration, a new ruby fill will be created. In here, this is where you use a method along with some arguments (examples displayed above)
  - Changes are not made until a `rails db:migrate` command has been used. This command 'saves' and finialize this migration

  - Reference: [Active Record Migrations](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/rails/migrations.md)

2. Which RESTful routes must always be passed params? Why?

  Your answer: From experience, I know that routes that need parameters are routes where specific instances are wanted such as: 
  - get / show route which retrieves a single instance from a database
  - get / edit route which edits a specific post
  - patch / update route works in conjuntion with the get / edit route in order to make changes
  - delete / destory route where the id is needed to target a specific instance within a database
  - Without these parameters, the modifications cannot be made

  Researched answer: From experience, any route that creates or makes any modifications to the database requires a parameter to be able to target a specific instance within the table.
  - get / show route which retrieves a single instance from a database
  - get / edit route which edits a specific post
  - patch / update route works in conjuntion with the get / edit route in order to make changes
  - delete / destory route where the id is needed to target a specific instance within a database
  - Without these parameters, the modifications cannot be made

 - Reference: [Rails RESTful Routes and CRUD Actions](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/rails/restful-routes-crud.md)

3. Name three rails generator commands. What is created by each?

  Your answer:
  - `rails g model`
    - Creates a new table
  - `rails g migration`
    - Creates new migration files
  - `rails g controller`
    - Creates files needed for MVC

  Researched answer:
  - Each of these generator commands create a couple of files and directories
  - `rails g model`
    - This generator command allows us to create a new model / table for out database
    - With this a few things are created:
      - db > migrate, creates a new ruby file for the model. This file is made to add certain validations to the model
      - app > models, also creates a new table for this model to be used
  - `rails g migration`
    - db > migrate, a new ruby file that will hold a new migrate command to be performed on the database
  - `rails g controller`
    - app > views > main, creates a new directory to store all the views for a specific controller
    - app > helpers, helper files
    - app > assets > stylesheets, a scss file to style views

  - Reference: [Active Record](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/rails/active-record-intro.md)
  - Reference: [Active Record Migrations](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/rails/migrations.md)
  - Reference: [Rails Controllers, Routes, and Views](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/rails/controllers-routes-views.md)



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students          
- `student#index`
- Display the index page
- We have been using this route and controller method in order to display all of the instances in a table and perform a Read action

action: "POST"   location: /students
- `student#create`      
- Creates a new instance within the table

action: "GET"    location: /students/new
- `student#new`
- Renders a form that will take the data entered and be used to perform a Create action

action: "GET"    location: /students/2  
- `student#show`
- Uses the query passed in the route in order to perform a Read action

action: "GET"    location: /students/2/edit    
- `student#edit`
- Used to perform an Update action

action: "PATCH"  location: /students/2      
- `student#update`
- Used in conjunction with `student#edit` in order to perform an Update action

action: "DELETE" location: /students/2      
- `student#destory`
- Uses the query passed in the route in order to perform a `Delete` action


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a developer, my list item can have a title, description, and status.
2. As a developer, I can add a new list item directly to my database
3. As a developer, I can ensure that all of my list item titles are unique
4. As a user, I can see all of the list items on the home page
5. As a user, I can click a list item and be routed to a page where I can see the title, description, and status of this specific list item
6. As a user, I can click a button to edit a list item
7. As a user, I can click a button to delete a list item
8. As a user, I can see a form where I can create a new list item
9. As a user, I will be directed back to the home page after editing, deleting, or creating a new list item
10. As a user, I can click a button that will bring me back to the home page, when I am on any other page besides the home page
