public class MethodOverloadingDemo {

    // Method to add two integers
    public static int add(int a, int b) {
        return a + b;
    }

    // Method to add two doubles
    public static double add(double a, double b) {
        return a + b;
    }

    // Method to add three integers
    public static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        // Calling overloaded methods
        int sumTwoInts = add(10, 20);
        double sumTwoDoubles = add(5.5, 4.5);
        int sumThreeInts = add(1, 2, 3);

        // Display results
        System.out.println("Sum of two integers: " + sumTwoInts);
        System.out.println("Sum of two doubles: " + sumTwoDoubles);
        System.out.println("Sum of three integers: " + sumThreeInts);
    }
}
