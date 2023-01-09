class BinaryMatrix(object):
    def get(self, row: int, col: int) -> int:
        return 0

    def dimensions(self) -> list[int]:
        return []


class Solution:
    def leftMostColumnWithOne(self, binaryMatrix: "BinaryMatrix") -> int:
        rows, cols = binaryMatrix.dimensions()

        currRow = 0
        currCol = cols - 1

        while currRow < rows and currCol >= 0:
            if binaryMatrix.get(currRow, currCol) == 0:
                currRow += 1
            else:
                currCol -= 1

        return currCol + 1 if currCol != cols - 1 else -1
