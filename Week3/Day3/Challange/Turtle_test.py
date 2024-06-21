import math
import turtle


class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2

    @property
    def diameter(self):
        return self.radius * 2
    
    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2
    
    @property
    def area(self):
        return math.pi * self.radius ** 2
    
    def __str__(self):
        return f"Circle with radius: {self.radius}"
    
    def __repr__(self):
        return f"Circle({self.radius})"
    
    def __add__(self, other):
        return Circle(self.radius + other.radius)
    
    def __lt__(self, other):
        return self.radius < other.radius
    
    def __eq__(self, other):
        return self.radius == other.radius
    
    def draw(self, turtle_instance, x, y):
        turtle_instance.penup()
        turtle_instance.goto(x, y - self.radius)
        turtle_instance.pendown()
        turtle_instance.circle(self.radius)
        turtle_instance.penup()
    
    def sort_key(self):
        return self.radius



def draw_sorted_circles(circles):
    screen = turtle.Screen()
    screen.title("Sorted Circles")
    t = turtle.Turtle()
    t.speed(0)
    t.penup()
    
 
    circles.sort(key=lambda x: x.sort_key())
    
 
    num_circles = len(circles)
    start_x = -num_circles * 30
    start_y = 0
    
    for i, circle in enumerate(circles):
        circle.draw(t, start_x + i * 60, start_y)
    
    t.hideturtle()
    screen.mainloop()



if __name__ == "__main__":
    circle1 = Circle(radius=40)
    circle2 = Circle(diameter=50)
    circle3 = Circle(radius=80)
    
    circles = [circle1, circle2, circle3]
    

    draw_sorted_circles(circles)