# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# 
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # This method is typically used to represent a websites home page
    # There is an instance variable named 'posts' that is retrieving all of the contents withing the BlogPost table withing the database
    @posts = BlogPost.all
  end

  # ---3)
  def show
    # This method is typically used when trying to retrieve a single instance within a table
    # The route itself has a query parameter that has a symbol of ':id' which give the route dynamic capabilities
    # params[:id] correlates with the route '/posts/:id'
    # The data passed in as a query is accessed by 'params[:id]' and is being used in conjunction with the .find() method as an argument to retrieve a specific Blog Post
    # An instance variable named post is created to store a specific instance of data
    @post = BlogPost.find(params[:id])
  end

  # ---4)
    # This method is used to create a new entry for a database
    # An instance variable 'post' is created that will be used toward a form in order to create a new instance for the table
    # The new method will also render a view of a form that will allow users to input information
    # The form requires a model to be based off of, this is where the 'post' instance variable comes in
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # Used in conjuction wnith the 'new' method, after a user has completed the form and clicks submit, Rails will look for and execute this method to create the new instance
    # Uses the 'post' HTTP verb as part of the route
    # Within this method, we are creating an instance variable 'post'
    # Somehow, the contents within the form are carried through and are able to be used within the strong parameter named 'blog_post_params'
    # 'blog_post_params' adds a layer of security and verifies that valid information is passed
    # After the data has been put through the strong parameter, a conditional is used to check and see if a new instance has been sucessfully created which will redirect the user accodringly
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    # This method is used to update an existing entry for a database
    # This method will render a view of a form with contents of the desired instance already displayed on the form
    # The form displayed on the 'edit' view is different than the form on the 'new' view
    @post = BlogPost.find(params[:id])
  end

  def update
    # This method acts in conjunction with the edit method
    # Uses the 'patch' HTTP verb as part of the route
    # After the user has clicked 'submit' after making the desired changes on the 'edit' view, Rails will find and execute this 'update' method
    # Within this method, we are creating an instance variable 'post'
    # Somehow, the contents within the form are carried through and are able to be used within the strong parameter named 'blog_post_params'
    # 'blog_post_params' adds a layer of security and verifies that valid information is passed
    # After the data has been put through the strong parameter, a conditional is used to check and see if a new instance has been sucessfully created which will redirect the user accodringly
    @post = BlogPost.find(params[:id])
    # ---7)
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    # The destory method is used to remove instances from a database
    # This method is accessed with a link with a 'button_to' method which then routes where a 'delete' HTTP verb is utilized. This route will also invoke this 'destory' method.
    # The method works by using the information passed in as a query to find the desired instance, the instance is destoryed using the .destory Active Record method and the user is rerouted accodringly
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # This private keyword adds a layer of security to your back end applcation
  # Any method below this keyword is unable to be accessed through any other part of the applciation
  # i.e. The methods above are all accessed within the config > routes.rb file
  # This method cannot be called outside of this file
  private
  def blog_post_params
    # ---10)
    # This is what is known as a 'strong parameter'
    # This is another way to add some security to your application
    # It reads: By using this method, a table is required (blog_post) and only permits two columns to be accessed (title and content) and nothing else
    # If the data is accepted, the contents (title and content) are verified and can be further used to perform actions on the databse
    params.require(:blog_post).permit(:title, :content)
  end
end
