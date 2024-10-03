# Pascal Triangle
This directory contains the implementation of Pascal Triangle.

## Introduction
A pascal's triangle is an arrangement of numbers in a triangular array such that the numbers at the end of each row are 1 and the remaining numbers are the sum of the nearest two numbers in the above row. This concept is used widely in probability, combinatorics, and algebra. Pascal's triangle is used to find the likelihood of the outcome of the toss of a coin, coefficients of binomial expansions in probability, etc.

## Pascal Triangle Explained
Pascal's triangle, also known as Pascal's triangle, is a unique triangle named for Blaise Pascal. It has one at the top and one on each of the triangle's sides to the end. Each number in the centre is the sum of the two numbers immediately above it since the middle numbers are so full. (n + 1) items make up the number of elements in the nth row. By writing 1 as the first and last element of a row and the sum of the two successive elements of the previous row, one can create Pascal's triangle by finding the other elements of the row. It is simple to make Pascal's triangle by adding the two consecutive integers from the previous lines and writing them in the new line.

## Usage
For this project, the following entry point can be used for testing.

`main.py`
```python
#!/usr/bin/python3
"""
Entry point
"""
pascal_triangle = __import__('0-pascal_triangle').pascal_triangle

def print_triangle(triangle):
    """
    Print the triangle
    """
    for row in triangle:
        print("[{}]".format(",".join([str(x) for x in row])))


if __name__ == "__main__":
    print_triangle(pascal_triangle(5))
```
