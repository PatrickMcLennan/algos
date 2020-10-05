mod bubble;
use bubble::bubble;

use rand::Rng;

fn main() {
    let length: i32 = rand::thread_rng().gen_range(10, 50);
    let mut numbers: Vec<i32> = Vec::new();

    for _number in 0..length {
        numbers.push(rand::thread_rng().gen_range(0, 100))
    }

    println!("{:?}", bubble(numbers));
}
