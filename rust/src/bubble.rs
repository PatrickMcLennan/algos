pub fn bubble(mut array: Vec<i32>) -> Vec<i32> {
    for i in 0..array.len() {
        for j in (i + 1)..array.len() {
            if array[j] < array[i] {
                let temp: i32 = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
