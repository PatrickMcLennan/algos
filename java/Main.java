public class Main {

    private static int randomNumber(int min, int max) {
        return (int) Math.floor(Math.random() * (max - min + 1) + min);
    }

    public static void main(String[] args) {
        System.out.println(randomNumber(10, 50));
    }
}