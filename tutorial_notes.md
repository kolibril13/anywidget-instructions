# Intro

# Preview
Message with a "Hello" message

# Structure

Requirements 
The widget model 
Building a simple widget
Building an advanced widget with npm

# Knowledge requirements:

Basic knowledge in Python, JavaScript and CSS.
Free tutorials:
https://www.w3schools.com/python/
https://www.w3schools.com/js/
https://www.w3schools.com/css/

# Installation requirements:

* Python 3.12 (or any other version)
I've made a video to installation on Mac
https://x.com/kolibril13/status/1779887288266133634

Optional

* NPM (for JavaScript Setup)
* hatch (for publishing)


# try yourself at

https://py.cafe/kolibril13/HelloWidget

In tutorial: using Jupyter, but you can also use the interactive playground


# Start with
ANYWIDGET_HMR=1 jupyter lab





Outcome:

People have seen how to setup an anywidget project
People know how to use simple communication



Anywidget Tutorial Part 1: Project setup and understanding the widget model




The first step now is to install anywidget, as described on the anywdiget website.
Now we can install jupyterlab.
After that's done we can start jupyterlab and create a file for CSS, JavaScript and a notebook.
Here, we create the widget class, and make an instance of that widget.
In order to display the widget, we add some css styling and append a button in the javascript render function.
Now we have a button that displays hi.


The next step is to send data from the python side to the javascript side.
We use traitlets for that, think of them as python variables that can also be used in JavaScript.

Now that we have the traitlet for our message   in place, we can get the value with a model.get function.
Calling set_message in the notebook will now update the text.

We can also add a custom message when the widget is initilized.
Adding the parameter alone won't work, we also have to update the javascript file and this works correctly.

We now add an eventlisteer so that clikcing the button will change the color of the button.
To access this value in python, we introduce another traitlet for that purpose in the notebook and add a model.set function in javascript.

Now we have a widget app that can get and set variables!

Feel free to like and subscribe to this channel if you found this short tutorial useful!