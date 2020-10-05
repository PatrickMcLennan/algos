import numpy

from bubble import bubble

numbers = numpy.random.randint(0, 100, numpy.random.randint(10, 50))
print(numbers)
print(bubble(numbers))
