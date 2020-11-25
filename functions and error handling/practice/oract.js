
int sum = sumArray([1, 3, 4, 9])

func sumArray(array){
    if array.length() == 1{
        return array[0]
    }
    return sumArray(array.firstHalf)+ sumArray(array.secondHalf)
}


[1 , 3, 4, 9]
0) 1 - sumArray([1, 3, 4, 9])

1) array[0] = 1
    2 - sumArray([3, 4, 9])

2) array[0] = 3
    3 - sumArray([4, 9])

3) array[0] = 4
    4 - sumArray([9])

4) array[0] = 9
    5 - sumArray([])

5) return 0