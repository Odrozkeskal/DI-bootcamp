# What is a class?
# Answer:
# Class is a structure which contains methods. We can get access to all methods of class/library, if we will
# instatiate class throw the variable. For example, we creating a variable, and make it equal to class.
# var = Class_name()
#
# What is an instance?
# Answer:
# It's calling of class, for getting access to it's methods.
#
# What is encapsulation?
# Answer:
# It's a conception that every variable, or every script (condition with functional), must be isolated, into
# methods, and it's must be called only if we want to call them.
#
# What is abstraction?
# Answer:
# It's conception that we should cover all hard processes in our code out from user. We should create a modules
# (consisting of classes and methods) which will make an actions, what will be easy understandeble to user,
# but same time, user shouldn't know how those modules actually works, to be able to use it.
#
# What is inheritance?
# Answer:
# It's a conception that each object may have a "parent" which it connect with. And parent object can also have
# a parent, and when we instantiate the parent class, we also gets access to all methods of his child's.
#
# What is multiple inheritance?
# Answer:
# If a child class inheriting the properties not only from it's parent, but also from parent of parent.
#
# What is polymorphism?
# Answer:
# It's a concept which allows us to making access to objects with few different ways. For example: we have a
# class Wizard, and we have attack method. We can call attack method this way: wizard1.attack(), but also,
# we can do it with creating a special method:
# def player_attack(char):
#     char.attack()
# and then call it: player_attack(wizard1).
# Or we can use a loop for this:
# for char in [wizard1]:
#     char.attack()
# This is what polymorphism is.
#
# What is method resolution order or MRO?
# Answer:
# It's an order what Python uses when we working with inheritance. For example, we have few classes.
# class X:pass
# class Y:pass
# class Z:pass
# class A(X,Y):pass
# class B(Y,Z):pass
# class M(B,A,Z):pass
# the order will be this:M then B, then A, then X, then Y, then Z