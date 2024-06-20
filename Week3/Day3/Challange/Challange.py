import math
import turtle
class Circle():
    def __init__(self, diameter:int):
        self.diameter = diameter
        self.radius = diameter / 2
        
    def diameter_calc(self):
        return self.radius * 2
    def area_calc(self):
        return math.pi * self.radius ** 2
    
    
    
    def __str__(self):
        return f"Circle radius: {self.radius}"
    
    def __repr__(self):
        return f"Circle({self.radius})"
    
    def __add__(self, other):
        return Circle(self.radius + other.radius)
    
    def __lt__(self, other):
        return self.radius < other.radius
    
    def __eq__(self, other):
        return self.radius == other.radius
    
    def __gt__(self, other):
        return self.radius > other.radius
    
    def __le__(self, other):
        return self.radius <= other.radius
    
    def __ge__(self, other):
        return self.radius >= other.radius
    
    def sort_key(self):
        return self.radius
    
if __name__ == "__main__":
    circle1 = Circle(diameter=6)
    circle2 = Circle(diameter=3)
    
    print(circle1.diameter)
    
    print(circle1.area_calc())
    
    circle3 = circle1 + circle2
    print(circle3.radius)
    
    print(circle1 < circle2)
    print(circle1 == circle2)
    
    circles = [circle2, circle1, circle3]
    circles.sort(key=lambda x: x.sort_key())
    print(circles)