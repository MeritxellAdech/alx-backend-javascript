#!/usr/bin/python3
"""
    Create a Pascal Triangle
"""


def pascal_triangle(num_of_rows):
    """Create a lists of integers representing the Pascal’s triangle of
    Args
        :num_of_rows: the number of rows
    Return
        the triangle
    """
    if num_of_rows <= 0:
        return []
    elif num_of_rows == 1:
        return [1]
    elif num_of_rows == 2:
        return [[1], [1, 1]]
    else:
        prev = []
        actual = []
        triangle = [[1], [1, 1]]
        n = num_of_rows
        for row in range(2, n):
            prev = triangle[row - 1]
            actual = []
            for i in range(row + 1):
                if i == 0 or i == row:
                    actual.append(1)
                    continue
                value = prev[i - 1] + prev[i]
                actual.append(value)
            triangle.append(actual)
    return triangle
