def bubble(array):
    length = len(array)
    for i in range(length):
        for j in range(i + 1, length):
            if array[j] < array[i]:
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
    return array
